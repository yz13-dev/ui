"use client"

import { LayoutGridIcon, ListIcon } from "lucide-react"

import type { ViewMode } from "@/lib/view-mode"
import { Button } from "@/registry/components/ui/button"
import { ButtonGroup } from "@/registry/components/ui/button-group"

export function ViewToggle({
  value,
  onChange,
}: {
  value: ViewMode
  onChange: (view: ViewMode) => void
}) {
  return (
    <ButtonGroup>
      <Button
        type="button"
        variant={value === "grid" ? "default" : "outline"}
        size="icon-lg"
        aria-label="Grid view"
        aria-pressed={value === "grid"}
        onClick={() => onChange("grid")}
      >
        <LayoutGridIcon />
      </Button>
      <Button
        type="button"
        variant={value === "list" ? "default" : "outline"}
        size="icon-lg"
        aria-label="List view"
        aria-pressed={value === "list"}
        onClick={() => onChange("list")}
      >
        <ListIcon />
      </Button>
    </ButtonGroup>
  )
}
