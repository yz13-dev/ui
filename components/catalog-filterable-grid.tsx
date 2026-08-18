"use client"

import Link from "next/link"
import { useQueryState } from "nuqs"
import { useMemo, useState } from "react"

import { ItemCollection } from "@/components/item-collection"
import { TagFilter } from "@/components/tag-filter"
import { ViewToggle } from "@/components/view-toggle"
import type { CatalogListItem } from "@/lib/registry"
import { KIND_DIR } from "@/lib/registry-constants"
import type { RegistryKind } from "@/lib/types"
import { viewModeParser } from "@/lib/view-mode"

export function CatalogFilterableGrid({
  kind,
  items,
}: {
  kind: RegistryKind
  items: CatalogListItem[]
}) {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [view, setView] = useQueryState("view", viewModeParser)

  const tags = useMemo(
    () => [...new Set(items.flatMap((item) => item.tags))].toSorted((a, b) => a.localeCompare(b)),
    [items]
  )

  const filtered =
    selectedTags.length > 0
      ? items.filter((item) => item.tags.some((tag) => selectedTags.includes(tag)))
      : items

  const categories = useMemo(() => {
    const byCategory = new Map<string, CatalogListItem[]>()
    for (const item of filtered) {
      const existing = byCategory.get(item.category) ?? []
      existing.push(item)
      byCategory.set(item.category, existing)
    }
    return [...byCategory.entries()]
      .toSorted(([a], [b]) => a.localeCompare(b))
      .map(
        ([category, categoryItems]) =>
          [category, categoryItems.slice().toSorted((a, b) => a.name.localeCompare(b.name))] as const
      )
  }, [filtered])

  return (
    <div className="flex flex-col gap-8">
      <div className="flex sm:flex-nowrap flex-wrap items-center sm:justify-between justify-end gap-4">
        {tags.length > 0 ? (
          <TagFilter tags={tags} value={selectedTags} onChange={setSelectedTags} />
        ) : (
          <div />
        )}
        <ViewToggle value={view} onChange={setView} />
      </div>

      {categories.length === 0 ? (
        <p className="text-body text-tertiary">No matching items.</p>
      ) : (
        <div className="flex flex-col gap-12">
          {categories.map(([category, categoryItems]) => (
            <section key={category} className="flex flex-col gap-4">
              <Link
                href={`/${KIND_DIR[kind]}/${category}`}
                className="text-heading-20 font-medium capitalize hover:underline"
              >
                {category}
              </Link>
              <ItemCollection items={categoryItems} view={view} />
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
