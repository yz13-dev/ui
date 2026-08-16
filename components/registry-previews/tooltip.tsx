"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/registry/components/ui/tooltip"
import { Button } from "@/registry/components/ui/button"

export function Preview() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
