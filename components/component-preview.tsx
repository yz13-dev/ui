"use client"

import { useState } from "react"

import { registryPreviews } from "@/components/registry-previews"
import { VariantControls } from "@/components/variant-controls"
import type { RegistryComponent } from "@/lib/types"

export function ComponentPreview({ item }: { item: RegistryComponent }) {
  const PreviewComponent = registryPreviews[item.slug]

  const [values, setValues] = useState(() =>
    Object.fromEntries(
      (item.variants ?? []).map((variant) => [variant.prop, variant.defaultValue])
    )
  )

  if (!PreviewComponent) return null

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border">
      {item.variants && item.variants.length > 0 ? (
        <VariantControls
          variants={item.variants}
          values={values}
          onChange={(prop, value) =>
            setValues((current) => ({ ...current, [prop]: value }))
          }
        />
      ) : null}
      <div className="flex min-h-40 items-center justify-center bg-muted/30 p-8">
        <PreviewComponent values={values} />
      </div>
    </div>
  )
}
