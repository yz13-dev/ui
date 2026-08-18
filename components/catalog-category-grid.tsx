"use client"

import { useQueryState } from "nuqs"

import { ItemCollection } from "@/components/item-collection"
import { ViewToggle } from "@/components/view-toggle"
import type { CatalogListItem } from "@/lib/registry"
import { viewModeParser } from "@/lib/view-mode"

export function CatalogCategoryGrid({ items }: { items: CatalogListItem[] }) {
  const [view, setView] = useQueryState("view", viewModeParser)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <ViewToggle value={view} onChange={setView} />
      </div>
      {items.length === 0 ? (
        <p className="text-body text-tertiary">No matching items.</p>
      ) : (
        <ItemCollection items={items} view={view} />
      )}
    </div>
  )
}
