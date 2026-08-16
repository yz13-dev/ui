"use client"

import { toast } from "sonner"

import { Toaster } from "@/registry/components/ui/sonner"
import { Button } from "@/registry/components/ui/button"

export function Preview() {
  return (
    <>
      <Button
        variant="outline"
        onClick={() => toast("Event has been created.")}
      >
        Show toast
      </Button>
      <Toaster />
    </>
  )
}
