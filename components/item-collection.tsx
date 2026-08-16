"use client"

import { RegistryCard } from "@/components/registry-card"
import { RegistryListItem } from "@/components/registry-list-item"
import type { CatalogListItem } from "@/lib/registry"
import type { ViewMode } from "@/lib/view-mode"

export function ItemCollection({
  items,
  view,
}: {
  items: CatalogListItem[]
  view: ViewMode
}) {
  if (view === "list") {
    return (
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <RegistryListItem key={`${item.kind}:${item.slug}`} item={item} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <RegistryCard key={`${item.kind}:${item.slug}`} item={item} />
      ))}
    </div>
  )
}
