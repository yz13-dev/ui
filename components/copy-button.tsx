"use client"

import { CheckIcon, CopyIcon } from "lucide-react"

import { useCopyButton } from "fumadocs-ui/utils/use-copy-button"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/components/ui/button"

export function CopyButton({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const [checked, onClick] = useCopyButton(() => {
    void navigator.clipboard.writeText(text)
  })

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      onClick={onClick}
      aria-label="Copy"
      className={cn(className)}
    >
      {checked ? <CheckIcon /> : <CopyIcon />}
    </Button>
  )
}
