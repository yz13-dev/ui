import fs from "node:fs"
import path from "node:path"
import {
  type RegistryItem,
  type RegistryKind,
  registryItemSchema,
} from "@/lib/types"

const REGISTRY_ROOT = path.join(process.cwd(), "registry")

const KIND_DIR: Record<RegistryKind, string> = {
  component: "components",
  block: "blocks",
  page: "pages",
}

// Only blocks/pages live in real per-category folders (registry/blocks/<category>/<slug>).
// registry/components is flat (registry/components/ui, registry/components/logo) — no
// legacy consumers to break there, so category is declared in meta.json instead of derived
// from the parent folder. See plan: registry/components/ui/* predates this system.
const FOLDER_MATCHES_CATEGORY: Record<RegistryKind, boolean> = {
  component: false,
  block: true,
  page: true,
}

interface Problem {
  file: string
  message: string
}

const errors: Problem[] = []
const warnings: Problem[] = []

function error(file: string, message: string) {
  errors.push({ file, message })
}

function warn(file: string, message: string) {
  warnings.push({ file, message })
}

function findMetaFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return []

  const results: string[] = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...findMetaFiles(full))
    } else if (entry.isFile() && entry.name.endsWith(".meta.json")) {
      results.push(full)
    }
  }
  return results
}

interface LoadedItem<T extends RegistryItem = RegistryItem> {
  item: T
  dir: string
  metaPath: string
}

function loadKind<K extends RegistryKind>(
  kind: K
): LoadedItem<Extract<RegistryItem, { kind: K }>>[] {
  const kindRoot = path.join(REGISTRY_ROOT, KIND_DIR[kind])
  const loaded: LoadedItem<Extract<RegistryItem, { kind: K }>>[] = []

  for (const metaPath of findMetaFiles(kindRoot)) {
    const rel = path.relative(process.cwd(), metaPath)
    const dir = path.dirname(metaPath)

    let raw: unknown
    try {
      raw = JSON.parse(fs.readFileSync(metaPath, "utf-8"))
    } catch (cause) {
      error(rel, `invalid JSON: ${(cause as Error).message}`)
      continue
    }

    const parsed = registryItemSchema.safeParse(raw)
    if (!parsed.success) {
      for (const issue of parsed.error.issues) {
        error(rel, `schema: ${issue.path.join(".") || "<root>"} — ${issue.message}`)
      }
      continue
    }

    if (parsed.data.kind !== kind) {
      error(
        rel,
        `kind: "${parsed.data.kind}" does not match containing folder "registry/${KIND_DIR[kind]}"`
      )
      continue
    }

    loaded.push({
      item: parsed.data as Extract<RegistryItem, { kind: K }>,
      dir,
      metaPath,
    })
  }

  return loaded
}

const byKind = {
  component: loadKind("component"),
  block: loadKind("block"),
  page: loadKind("page"),
}

const slugIndex: Record<RegistryKind, Map<string, LoadedItem[]>> = {
  component: new Map(),
  block: new Map(),
  page: new Map(),
}

for (const kind of Object.keys(byKind) as RegistryKind[]) {
  for (const loaded of byKind[kind]) {
    const rel = path.relative(process.cwd(), loaded.metaPath)
    const { item, dir } = loaded

    // 1. slug uniqueness within kind
    const existing = slugIndex[kind].get(item.slug) ?? []
    existing.push(loaded)
    slugIndex[kind].set(item.slug, existing)

    // 2a. category matches parent folder (blocks/pages only)
    if (FOLDER_MATCHES_CATEGORY[kind]) {
      const folderCategory = path.basename(dir)
      if (folderCategory !== item.category) {
        error(
          rel,
          `category "${item.category}" does not match parent folder "${folderCategory}"`
        )
      }
    }

    // 2b. slug matches filename for single-file items
    if (item.files.length === 1) {
      const fileName = item.files[0]!
      const fileSlug = fileName.replace(/\.[^./]+$/, "")
      if (fileSlug !== item.slug) {
        error(rel, `slug "${item.slug}" does not match filename "${fileName}"`)
      }
    }

    // 3. files exist on disk
    for (const file of item.files) {
      const filePath = path.join(dir, file)
      if (!fs.existsSync(filePath)) {
        error(rel, `files: "${file}" does not exist at ${path.relative(process.cwd(), filePath)}`)
      }
    }

    // 7. undeclared @/registry/components/ui/* imports (warning)
    const declared = new Set(
      item.kind === "component" ? [] : item.registryDependencies
    )
    for (const file of item.files) {
      const filePath = path.join(dir, file)
      if (!fs.existsSync(filePath)) continue

      const source = fs.readFileSync(filePath, "utf-8")
      const importRe = /from\s+["']@\/registry\/components\/ui\/([a-z0-9-]+)["']/g
      for (const match of source.matchAll(importRe)) {
        const importedSlug = match[1]!
        if (importedSlug === item.slug) continue
        if (!declared.has(importedSlug)) {
          warn(
            path.relative(process.cwd(), filePath),
            `imports "${importedSlug}", but it is not declared in registryDependencies`
          )
        }
      }
    }
  }
}

// 1. report duplicate slugs
for (const kind of Object.keys(slugIndex) as RegistryKind[]) {
  for (const [slug, items] of slugIndex[kind]) {
    if (items.length > 1) {
      for (const loaded of items) {
        error(
          path.relative(process.cwd(), loaded.metaPath),
          `duplicate slug "${slug}" within kind "${kind}"`
        )
      }
    }
  }
}

// 4. registryDependencies resolve against the right kind
function checkDependencies(kind: "block" | "page", targetKind: RegistryKind) {
  for (const loaded of byKind[kind]) {
    const rel = path.relative(process.cwd(), loaded.metaPath)
    for (const dep of loaded.item.registryDependencies) {
      if (!slugIndex[targetKind].has(dep)) {
        error(
          rel,
          `registryDependencies: "${dep}" not found in registry/${KIND_DIR[targetKind]}`
        )
      }
    }
  }
}

checkDependencies("block", "component")
checkDependencies("page", "block")

// 5. cycle detection over the full dependency graph
const graph = new Map<string, string[]>()
for (const loaded of byKind.component) {
  graph.set(`component:${loaded.item.slug}`, [])
}
for (const loaded of byKind.block) {
  graph.set(
    `block:${loaded.item.slug}`,
    loaded.item.registryDependencies.map((slug) => `component:${slug}`)
  )
}
for (const loaded of byKind.page) {
  graph.set(
    `page:${loaded.item.slug}`,
    loaded.item.registryDependencies.map((slug) => `block:${slug}`)
  )
}

function findCycle(): string[] | null {
  const WHITE = 0
  const GRAY = 1
  const BLACK = 2
  const color = new Map<string, number>()
  for (const node of graph.keys()) color.set(node, WHITE)

  const stack: string[] = []

  function visit(node: string): string[] | null {
    color.set(node, GRAY)
    stack.push(node)

    for (const next of graph.get(node) ?? []) {
      const nextColor = color.get(next)
      if (nextColor === GRAY) {
        const cycleStart = stack.indexOf(next)
        return [...stack.slice(cycleStart), next]
      }
      if (nextColor === WHITE) {
        const cycle = visit(next)
        if (cycle) return cycle
      }
    }

    stack.pop()
    color.set(node, BLACK)
    return null
  }

  for (const node of graph.keys()) {
    if (color.get(node) === WHITE) {
      const cycle = visit(node)
      if (cycle) return cycle
    }
  }
  return null
}

const cycle = findCycle()
if (cycle) {
  error("registry", `dependency cycle: ${cycle.join(" -> ")}`)
}

// --- report ---

for (const { file, message } of errors) {
  console.log(`\x1b[31m✗\x1b[0m ${file}`)
  console.log(`  ${message}`)
}
for (const { file, message } of warnings) {
  console.log(`\x1b[33m⚠\x1b[0m ${file}`)
  console.log(`  ${message}`)
}

const errorWord = errors.length === 1 ? "error" : "errors"
const warningWord = warnings.length === 1 ? "warning" : "warnings"
console.log(`\n${errors.length} ${errorWord}, ${warnings.length} ${warningWord}`)

if (errors.length > 0) {
  process.exit(1)
}
