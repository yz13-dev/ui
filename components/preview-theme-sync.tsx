"use client"

import { useEffect } from "react"

import { PREVIEW_ROOT_ID } from "@/components/preview-height-reporter"

export function PreviewThemeSync() {
  useEffect(() => {
    const theme = new URLSearchParams(window.location.search).get("theme")
    document.getElementById(PREVIEW_ROOT_ID)?.classList.toggle("dark", theme === "dark")
  }, [])

  return null
}
