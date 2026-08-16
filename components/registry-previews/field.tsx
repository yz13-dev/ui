"use client"

import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/components/ui/field"
import { Input } from "@/registry/components/ui/input"

export function Preview() {
  return (
    <Field className="w-full max-w-xs">
      <FieldLabel htmlFor="preview-email">Email</FieldLabel>
      <Input id="preview-email" type="email" placeholder="you@example.com" />
      <FieldDescription>We'll never share your email.</FieldDescription>
    </Field>
  )
}
