import Link from "next/link"
import { ServerCodeBlock } from "fumadocs-ui/components/codeblock.rsc"

import { ComponentPreview } from "@/components/component-preview"
import { CopyButton } from "@/components/copy-button"
import { PreviewFrame } from "@/components/preview-frame"
import { codeTheme } from "@/lib/code-theme"
import { KIND_DIR, getRegistryIndex, type IndexedRegistryItem } from "@/lib/registry"
import { getItemSource } from "@/lib/registry-source"
import type { RegistryKind } from "@/lib/types"
import { Badge } from "@/registry/components/ui/badge"

const REQUIRES_KIND: Partial<Record<RegistryKind, RegistryKind>> = {
  block: "component",
  page: "block",
}

export async function CatalogItemDetail({ item }: { item: IndexedRegistryItem }) {
  const requiresKind = REQUIRES_KIND[item.kind]
  const registryDependencies =
    "registryDependencies" in item ? item.registryDependencies : []

  const index = getRegistryIndex()
  const source = getItemSource(item)
  const installCommand = item.dependencies?.length
    ? `npm i ${item.dependencies.join(" ")}`
    : null

  return (
    <div className="flex flex-col gap-8">
      {item.kind === "component" ? <ComponentPreview item={item} /> : null}
      {item.kind !== "component" ? (
        <PreviewFrame
          kind={item.kind}
          slug={item.slug}
          previewHeight={item.kind === "block" ? item.previewHeight : undefined}
        />
      ) : null}

      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline" className="capitalize">
            {item.category}
          </Badge>
          {item.status && item.status !== "stable" ? (
            <Badge variant={item.status === "deprecated" ? "destructive" : "outline"}>
              {item.status}
            </Badge>
          ) : null}
        </div>
        <h1 className="text-title font-medium">{item.name}</h1>
        <p className="text-lede text-muted-foreground">{item.description}</p>
      </div>

      {item.tags.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <h2 className="text-heading-16 font-medium">Files</h2>
        <ul className="flex flex-col gap-1">
          {item.files.map((file) => (
            <li key={file} className="text-label text-muted-foreground">
              {file}
            </li>
          ))}
        </ul>
      </div>

      {item.dependencies && item.dependencies.length > 0 ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-heading-16 font-medium">Dependencies</h2>
          <div className="flex flex-wrap gap-1.5">
            {item.dependencies.map((dep) => (
              <Badge key={dep} variant="outline">
                {dep}
              </Badge>
            ))}
          </div>
        </div>
      ) : null}

      {installCommand ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-heading-16 font-medium">Install</h2>
          <div className="flex items-center justify-between gap-2 rounded-lg border bg-muted/30 py-2 pr-2 pl-3">
            <code className="text-label">{installCommand}</code>
            <CopyButton text={installCommand} />
          </div>
        </div>
      ) : null}

      {requiresKind && registryDependencies.length > 0 ? (
        <div className="flex flex-col gap-2">
          <h2 className="text-heading-16 font-medium">Requires</h2>
          <ul className="flex flex-col gap-1">
            {registryDependencies.map((dep) => {
              const dependency = index.byKindAndSlug[requiresKind].get(dep)
              return (
                <li key={dep} className="text-label">
                  {dependency ? (
                    <Link
                      href={`/${KIND_DIR[requiresKind]}/${dependency.category}/${dependency.slug}`}
                      className="text-primary hover:underline"
                    >
                      {dependency.name}
                    </Link>
                  ) : (
                    dep
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        <h2 className="text-heading-16 font-medium">Code</h2>
        <div className="flex flex-col gap-4">
          {source.map(({ file, code }) => (
            <ServerCodeBlock
              key={file}
              code={code}
              lang="tsx"
              themes={{ light: codeTheme, dark: codeTheme }}
              codeblock={{ title: file }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
