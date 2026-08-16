import type { AdvancedIndex } from "fumadocs-core/search/server"

import { KIND_DIR, KIND_LABEL, getRegistryIndex } from "./registry"

export function buildRegistryIndexes(): AdvancedIndex[] {
  return getRegistryIndex().all.map((item) => {
    const url = `/${KIND_DIR[item.kind]}/${item.category}/${item.slug}`
    return {
      id: url,
      title: item.name,
      description: item.description,
      breadcrumbs: [KIND_LABEL[item.kind]],
      url,
      structuredData: {
        headings: [],
        contents: [
          { heading: undefined, content: [item.description, item.tags.join(" ")].join(" ") },
        ],
      },
    }
  })
}
