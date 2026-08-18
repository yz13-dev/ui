"use client"

import type { VariantValues } from "@/components/variant-controls"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/components/ui/card"

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Card size={values.size as "default" | "sm"} className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>A short supporting description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-body text-tertiary">Card content goes here.</p>
      </CardContent>
    </Card>
  )
}
