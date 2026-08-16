import { Suspense } from "react"

import { CatalogCategoryGrid } from "@/components/catalog-category-grid"
import { CatalogFilterableGrid } from "@/components/catalog-filterable-grid"
import { getRegistryIndex, toCatalogListItem } from "@/lib/registry"
import type { RegistryKind } from "@/lib/types"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/registry/components/ui/empty"

const KIND_LABEL: Record<RegistryKind, string> = {
  component: "components",
  block: "blocks",
  page: "pages",
}

export function CatalogGrid({
  kind,
  category,
}: {
  kind: RegistryKind
  category?: string
}) {
  const index = getRegistryIndex()

  if (category) {
    const items = index.byKindAndCategory[kind].get(category) ?? []
    return (
      <Suspense>
        <CatalogCategoryGrid
          items={items
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(toCatalogListItem)}
        />
      </Suspense>
    )
  }

  const items = index.byKind[kind]

  if (items.length === 0) {
    return (
      <Empty>
        <EmptyHeader>
          <EmptyTitle>No {KIND_LABEL[kind]} yet</EmptyTitle>
          <EmptyDescription>
            This part of the catalog is still empty — check back later.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  return (
    <Suspense>
      <CatalogFilterableGrid kind={kind} items={items.map(toCatalogListItem)} />
    </Suspense>
  )
}
