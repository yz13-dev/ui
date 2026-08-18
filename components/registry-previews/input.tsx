"use client";

import type { VariantValues } from "@/components/variant-controls";
import { Input } from "@/registry/components/ui/input";

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Input
      placeholder="Email"
      size={values.size as "xs" | "sm" | "default" | "lg"}
      disabled={Boolean(values.disabled)}
      className="w-full max-w-xs"
    />
  );
}
