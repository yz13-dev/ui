"use client"

import type { VariantValues } from "@/components/variant-controls"
import { Separator } from "@/registry/components/ui/separator"

export function Preview({ values }: { values: VariantValues }) {
  const orientation = values.orientation as "horizontal" | "vertical"

  if (orientation === "vertical") {
    return (
      <div className="flex h-12 items-center gap-4">
        <span className="text-label">Blog</span>
        <Separator orientation="vertical" />
        <span className="text-label">Docs</span>
      </div>
    )
  }

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <span className="text-label">Blog</span>
      <Separator orientation="horizontal" />
      <span className="text-label">Docs</span>
    </div>
  )
}
