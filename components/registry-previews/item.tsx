"use client"

import { BellIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/components/ui/item"
import { Button } from "@/registry/components/ui/button"

export function Preview() {
  return (
    <Item variant="outline" className="w-full max-w-sm">
      <ItemMedia variant="icon">
        <BellIcon />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>New notification</ItemTitle>
        <ItemDescription>You have a new message.</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          View
        </Button>
      </ItemActions>
    </Item>
  )
}
