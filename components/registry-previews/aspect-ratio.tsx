"use client"

import { AspectRatio } from "@/registry/components/ui/aspect-ratio"

export function Preview() {
  return (
    <AspectRatio ratio={16 / 9} className="w-full max-w-sm">
      <div className="flex size-full items-center justify-center rounded-lg bg-muted text-label text-tertiary">
        16:9
      </div>
    </AspectRatio>
  )
}
