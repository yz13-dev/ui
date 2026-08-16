"use client"

import { MonitorIcon, SmartphoneIcon, TabletIcon } from "lucide-react"

import { ToggleGroup, ToggleGroupItem } from "@/registry/components/ui/toggle-group"

export type Viewport = "desktop" | "tablet" | "mobile"

export const VIEWPORT_WIDTH: Record<Viewport, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
}

export function ViewportToggle({
  value,
  onChange,
}: {
  value: Viewport
  onChange: (viewport: Viewport) => void
}) {
  return (
    <ToggleGroup
      value={[value]}
      onValueChange={(next) => {
        const added = next.find((item) => item !== value)
        const viewport = (added ?? next[0]) as Viewport | undefined
        if (viewport) onChange(viewport)
      }}
      variant="outline"
      size="sm"
    >
      <ToggleGroupItem value="desktop" aria-label="Desktop">
        <MonitorIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="tablet" aria-label="Tablet">
        <TabletIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="mobile" aria-label="Mobile">
        <SmartphoneIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
