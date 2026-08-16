import Link from "next/link"

import { KIND_DIR, getRegistryIndex, type IndexedRegistryItem } from "@/lib/registry"
import type { RegistryKind } from "@/lib/types"
import { Badge } from "@/registry/components/ui/badge"

const REQUIRES_KIND: Partial<Record<RegistryKind, RegistryKind>> = {
  block: "component",
  page: "block",
}

export function CatalogItemDetail({ item }: { item: IndexedRegistryItem }) {
  const requiresKind = REQUIRES_KIND[item.kind]
  const registryDependencies =
    "registryDependencies" in item ? item.registryDependencies : []

  const index = getRegistryIndex()

  return (
    <div className="flex flex-col gap-8">
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
    </div>
  )
}
