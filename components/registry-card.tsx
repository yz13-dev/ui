import Link from "next/link"

import type { CatalogListItem } from "@/lib/registry"
import { KIND_DIR } from "@/lib/registry-constants"
import {
  Badge,
} from "@/registry/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/components/ui/card"

export function RegistryCard({ item }: { item: CatalogListItem }) {
  const href = `/${KIND_DIR[item.kind]}/${item.category}/${item.slug}`

  return (
    <Link href={href} className="block">
      <Card className="h-full transition-colors hover:bg-muted/50">
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
          {item.status && item.status !== "stable" ? (
            <CardAction>
              <Badge variant={item.status === "deprecated" ? "error" : "outline"}>
                {item.status}
              </Badge>
            </CardAction>
          ) : null}
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        {item.tags.length > 0 ? (
          <CardContent className="flex flex-wrap mt-auto gap-1.5">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="capitalize">
                {tag}
              </Badge>
            ))}
          </CardContent>
        ) : null}
      </Card>
    </Link>
  )
}
