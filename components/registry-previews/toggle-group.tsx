"use client"

import type { VariantValues } from "@/components/variant-controls"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/components/ui/toggle-group"
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react"

export function Preview({ values }: { values: VariantValues }) {
  return (
    <ToggleGroup
      variant={values.variant as "default" | "outline"}
      size={values.size as "sm" | "default" | "lg"}
      defaultValue={["left"]}
    >
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeftIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenterIcon />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRightIcon />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
