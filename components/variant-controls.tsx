"use client"

import type { VariantAxis } from "@/lib/types"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/components/ui/select"
import { Switch } from "@/registry/components/ui/switch"

export type VariantValues = Record<string, string | boolean>

export function VariantControls({
  variants,
  values,
  onChange,
}: {
  variants: VariantAxis[]
  values: VariantValues
  onChange: (prop: string, value: string | boolean) => void
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-b p-4">
      {variants.map((variant) => (
        <div key={variant.prop} className="flex items-center gap-2">
          <span className="text-label text-muted-foreground">{variant.label}</span>
          {variant.type === "boolean" ? (
            <Switch
              size="sm"
              checked={Boolean(values[variant.prop])}
              onCheckedChange={(checked) => onChange(variant.prop, checked)}
            />
          ) : (
            <Select
              value={values[variant.prop] as string}
              onValueChange={(value) => onChange(variant.prop, value as string)}
            >
              <SelectTrigger size="sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {variant.options?.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        </div>
      ))}
    </div>
  )
}
