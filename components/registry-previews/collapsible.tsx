"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/components/ui/collapsible"
import { buttonVariants } from "@/registry/components/ui/button"

export function Preview() {
  return (
    <Collapsible className="w-full max-w-sm">
      <CollapsibleTrigger className={buttonVariants({ variant: "outline" })}>
        Toggle details
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-2 text-label text-muted-foreground">
        Additional content revealed when the trigger is pressed.
      </CollapsibleContent>
    </Collapsible>
  )
}
