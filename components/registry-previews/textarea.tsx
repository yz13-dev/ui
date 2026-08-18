"use client";

import type { VariantValues } from "@/components/variant-controls";
import { Textarea } from "@/registry/components/ui/textarea";

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Textarea
      placeholder="Type your message..."
      size={values.size as "xs" | "sm" | "default" | "lg"}
      disabled={Boolean(values.disabled)}
      className="w-full max-w-xs"
    />
  );
}
