"use client"

import type { VariantValues } from "@/components/variant-controls"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/components/ui/alert"

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Alert
      variant={values.variant as "default" | "destructive"}
      className="w-full max-w-sm"
    >
      <AlertTitle>Heads up</AlertTitle>
      <AlertDescription>
        This is a short message that explains what happened.
      </AlertDescription>
    </Alert>
  )
}
