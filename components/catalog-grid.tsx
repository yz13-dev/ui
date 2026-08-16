import { CatalogFilterableGrid } from "@/components/catalog-filterable-grid"
import { RegistryCard } from "@/components/registry-card"
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
    return <ItemGrid items={items.slice().sort((a, b) => a.name.localeCompare(b.name))} />
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

  return <CatalogFilterableGrid kind={kind} items={items.map(toCatalogListItem)} />
}

function ItemGrid({
  items,
}: {
  items: ReturnType<typeof getRegistryIndex>["all"]
}) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <RegistryCard key={`${item.kind}:${item.slug}`} item={item} />
      ))}
    </div>
  )
}
