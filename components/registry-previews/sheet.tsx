"use client"

import type { VariantValues } from "@/components/variant-controls"
import { Button } from "@/registry/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/components/ui/sheet"

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open sheet</Button>} />
      <SheetContent side={values.side as "top" | "right" | "bottom" | "left"}>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
