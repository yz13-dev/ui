"use client"

import { Skeleton } from "@/registry/components/ui/skeleton"

export function Preview() {
  return (
    <div className="flex items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-3 w-24" />
      </div>
    </div>
  )
}
