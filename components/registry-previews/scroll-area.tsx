"use client"

import { ScrollArea } from "@/registry/components/ui/scroll-area"
import { Separator } from "@/registry/components/ui/separator"

const tags = Array.from({ length: 20 }, (_, i) => `Tag ${i + 1}`)

export function Preview() {
  return (
    <ScrollArea className="h-48 w-full max-w-xs rounded-lg border p-4">
      <div className="flex flex-col gap-2">
        {tags.map((tag) => (
          <div key={tag}>
            <span className="text-label">{tag}</span>
            <Separator className="mt-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
