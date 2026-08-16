import type * as PageTree from "fumadocs-core/page-tree"

import { KIND_DIR, getRegistryIndex } from "./registry"
import type { RegistryKind } from "./types"

const KIND_LABEL: Record<RegistryKind, string> = {
  component: "Components",
  block: "Blocks",
  page: "Pages",
}

export function getCatalogTree(): PageTree.Root {
  const index = getRegistryIndex()

  const children: PageTree.Folder[] = (
    Object.keys(KIND_DIR) as RegistryKind[]
  ).map((kind) => {
    const kindUrl = `/${KIND_DIR[kind]}`
    const categories = [...index.byKindAndCategory[kind].entries()].sort(
      ([a], [b]) => a.localeCompare(b)
    )

    return {
      type: "folder",
      name: KIND_LABEL[kind],
      defaultOpen: true,
      index: { type: "page", name: KIND_LABEL[kind], url: kindUrl },
      children: categories.map(([category, items]) => {
        const categoryUrl = `${kindUrl}/${category}`

        return {
          type: "folder",
          name: category,
          index: { type: "page", name: category, url: categoryUrl },
          children: items
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name))
            .map(
              (item): PageTree.Item => ({
                type: "page",
                name: item.name,
                url: `${categoryUrl}/${item.slug}`,
              })
            ),
        } satisfies PageTree.Folder
      }),
    } satisfies PageTree.Folder
  })

  return {
    name: "Catalog",
    children,
  }
}
