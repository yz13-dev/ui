"use client"

import { useEffect } from "react"

export const PREVIEW_HEIGHT_MESSAGE = "yz13:preview-height"

export const PREVIEW_ROOT_ID = "yz13-preview-root"

export function PreviewHeightReporter() {
  useEffect(() => {
    const root = document.getElementById(PREVIEW_ROOT_ID)
    if (!root) return

    const report = () => {
      window.parent.postMessage(
        { type: PREVIEW_HEIGHT_MESSAGE, height: root.scrollHeight },
        "*"
      )
    }

    report()

    const observer = new ResizeObserver(report)
    observer.observe(root)

    return () => observer.disconnect()
  }, [])

  return null
}
