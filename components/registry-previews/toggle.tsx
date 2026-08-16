"use client"

import type { VariantValues } from "@/components/variant-controls"
import { Toggle } from "@/registry/components/ui/toggle"
import { BoldIcon } from "lucide-react"

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Toggle
      variant={values.variant as "default" | "outline"}
      size={values.size as "sm" | "default" | "lg"}
      aria-label="Toggle bold"
    >
      <BoldIcon />
    </Toggle>
  )
}
