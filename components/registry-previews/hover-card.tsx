"use client"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/components/ui/hover-card"

export function Preview() {
  return (
    <HoverCard>
      <HoverCardTrigger className="text-label underline underline-offset-4">
        @yz13
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-label font-medium">YZ13</p>
        <p className="text-caption text-tertiary">
          A monochrome, typography-driven component registry.
        </p>
      </HoverCardContent>
    </HoverCard>
  )
}
