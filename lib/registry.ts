import fs from "node:fs"
import path from "node:path"
import {
  type RegistryItem,
  type RegistryKind,
  registryItemSchema,
} from "@/lib/types"

export const REGISTRY_ROOT = path.join(process.cwd(), "registry")

export const KIND_DIR: Record<RegistryKind, string> = {
  component: "components",
  block: "blocks",
  page: "pages",
}

export type IndexedRegistryItem = RegistryItem & {
  /** Absolute path to the item's folder (where its meta.json and files live). */
  dir: string
  /** Absolute path to the meta.json itself. */
  metaPath: string
}

export interface RegistryIndex {
  all: IndexedRegistryItem[]
  byKind: Record<RegistryKind, IndexedRegistryItem[]>
  byKindAndSlug: Record<RegistryKind, Map<string, IndexedRegistryItem>>
  byKindAndCategory: Record<RegistryKind, Map<string, IndexedRegistryItem[]>>
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

function loadKind(kind: RegistryKind): IndexedRegistryItem[] {
  const kindRoot = path.join(REGISTRY_ROOT, KIND_DIR[kind])

  return findMetaFiles(kindRoot).map((metaPath) => {
    const raw = JSON.parse(fs.readFileSync(metaPath, "utf-8"))
    const parsed = registryItemSchema.safeParse(raw)

    if (!parsed.success) {
      throw new Error(
        `Invalid registry item at ${metaPath}: ${parsed.error.message}`
      )
    }

    return {
      ...parsed.data,
      dir: path.dirname(metaPath),
      metaPath,
    }
  })
}

let cachedIndex: RegistryIndex | null = null

export function getRegistryIndex(): RegistryIndex {
  if (cachedIndex) return cachedIndex

  const byKind: Record<RegistryKind, IndexedRegistryItem[]> = {
    component: loadKind("component"),
    block: loadKind("block"),
    page: loadKind("page"),
  }

  const byKindAndSlug: Record<RegistryKind, Map<string, IndexedRegistryItem>> = {
    component: new Map(),
    block: new Map(),
    page: new Map(),
  }

  const byKindAndCategory: Record<
    RegistryKind,
    Map<string, IndexedRegistryItem[]>
  > = {
    component: new Map(),
    block: new Map(),
    page: new Map(),
  }

  const all: IndexedRegistryItem[] = []

  for (const kind of Object.keys(byKind) as RegistryKind[]) {
    for (const item of byKind[kind]) {
      all.push(item)
      byKindAndSlug[kind].set(item.slug, item)

      const existing = byKindAndCategory[kind].get(item.category) ?? []
      existing.push(item)
      byKindAndCategory[kind].set(item.category, existing)
    }
  }

  cachedIndex = { all, byKind, byKindAndSlug, byKindAndCategory }
  return cachedIndex
}
