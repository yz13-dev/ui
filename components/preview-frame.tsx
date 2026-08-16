"use client"

import { ExternalLinkIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

import { PREVIEW_HEIGHT_MESSAGE } from "@/components/preview-height-reporter"
import { VIEWPORT_WIDTH, ViewportToggle, type Viewport } from "@/components/viewport-toggle"
import { buttonVariants } from "@/registry/components/ui/button"

export function PreviewFrame({
  kind,
  slug,
  previewHeight,
}: {
  kind: "block" | "page"
  slug: string
  previewHeight?: number
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [viewport, setViewport] = useState<Viewport>("desktop")
  const [height, setHeight] = useState(previewHeight ?? 480)
  const { resolvedTheme } = useTheme()
  const previewUrl = `/preview/${kind}/${slug}${resolvedTheme ? `?theme=${resolvedTheme}` : ""}`

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.source !== iframeRef.current?.contentWindow) return
      if (event.data?.type !== PREVIEW_HEIGHT_MESSAGE) return
      setHeight(event.data.height)
    }

    window.addEventListener("message", onMessage)
    return () => window.removeEventListener("message", onMessage)
  }, [])

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border">
      <div className="flex items-center justify-between gap-2 border-b p-2">
        <ViewportToggle value={viewport} onChange={setViewport} />
        <a
          href={previewUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Open in new tab"
          className={buttonVariants({ variant: "ghost", size: "icon-sm" })}
        >
          <ExternalLinkIcon />
        </a>
      </div>
      <div className="flex justify-center overflow-x-auto bg-muted/30 p-4">
        <iframe
          ref={iframeRef}
          src={previewUrl}
          style={{ width: VIEWPORT_WIDTH[viewport], height }}
          className="max-w-full shrink-0 rounded-lg border bg-background transition-[width]"
          title={`${slug} preview`}
        />
      </div>
    </div>
  )
}
