"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import { RegistryCard } from "@/components/registry-card"
import type { CatalogListItem } from "@/lib/registry"
import { KIND_DIR } from "@/lib/registry-constants"
import type { RegistryKind } from "@/lib/types"
import { Badge } from "@/registry/components/ui/badge"

export function CatalogFilterableGrid({
  kind,
  items,
}: {
  kind: RegistryKind
  items: CatalogListItem[]
}) {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())

  const tags = useMemo(
    () => [...new Set(items.flatMap((item) => item.tags))].sort((a, b) => a.localeCompare(b)),
    [items]
  )

  const filtered =
    selectedTags.size > 0
      ? items.filter((item) => item.tags.some((tag) => selectedTags.has(tag)))
      : items

  const categories = useMemo(() => {
    const byCategory = new Map<string, CatalogListItem[]>()
    for (const item of filtered) {
      const existing = byCategory.get(item.category) ?? []
      existing.push(item)
      byCategory.set(item.category, existing)
    }
    return [...byCategory.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(
        ([category, categoryItems]) =>
          [category, categoryItems.slice().sort((a, b) => a.name.localeCompare(b.name))] as const
      )
  }, [filtered])

  function toggleTag(tag: string) {
    setSelectedTags((current) => {
      const next = new Set(current)
      if (next.has(tag)) next.delete(tag)
      else next.add(tag)
      return next
    })
  }

  return (
    <div className="flex flex-col gap-8">
      {tags.length > 0 ? (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <button key={tag} type="button" onClick={() => toggleTag(tag)}>
              <Badge
                variant={selectedTags.has(tag) ? "default" : "outline"}
                className="cursor-pointer capitalize"
              >
                {tag}
              </Badge>
            </button>
          ))}
        </div>
      ) : null}

      {categories.length === 0 ? (
        <p className="text-body text-muted-foreground">No matching items.</p>
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
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {categoryItems.map((item) => (
                  <RegistryCard key={`${item.kind}:${item.slug}`} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  )
}
