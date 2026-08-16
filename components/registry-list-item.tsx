import Link from "next/link"

import type { CatalogListItem } from "@/lib/registry"
import { KIND_DIR } from "@/lib/registry-constants"
import { Badge } from "@/registry/components/ui/badge"
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/registry/components/ui/item"
import { ArrowRightIcon } from "lucide-react"

export function RegistryListItem({ item }: { item: CatalogListItem }) {
  const href = `/${KIND_DIR[item.kind]}/${item.category}/${item.slug}`

  return (
    <Link href={href} className="block">
      <Item variant="outline" className="bg-card hover:bg-muted/50">
        <ItemContent>
          <ItemTitle className="text-heading-16 font-medium">{item.name}</ItemTitle>
          <ItemDescription>{item.description}</ItemDescription>
          {item.tags.length > 0 ? (
            <div className="flex flex-wrap mt-auto gap-1.5">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="capitalize">
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}
        </ItemContent>
        <ItemActions className="px-2">
          <ArrowRightIcon className="size-4" />
        </ItemActions>
        {item.status && item.status !== "stable" ? (
          <Badge variant={item.status === "deprecated" ? "destructive" : "outline"}>
            {item.status}
          </Badge>
        ) : null}
      </Item>
    </Link>
  )
}
