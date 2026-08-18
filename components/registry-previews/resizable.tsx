"use client"

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/registry/components/ui/resizable"

export function Preview() {
  return (
    <ResizablePanelGroup className="h-40 w-full max-w-sm rounded-lg border">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-label text-tertiary">
          One
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center text-label text-tertiary">
          Two
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
