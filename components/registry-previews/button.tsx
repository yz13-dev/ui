"use client";

import type { VariantValues } from "@/components/variant-controls";
import { Button } from "@/registry/components/ui/button";

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Button
      variant={
        values.variant as
          | "default"
          | "outline"
          | "secondary"
          | "ghost"
          | "error"
          | "success"
          | "warning"
          | "info"
          | "link"
      }
      size={values.size as "xs" | "sm" | "default" | "lg"}
      filled={Boolean(values.filled)}
      disabled={Boolean(values.disabled)}
    >
      Button
    </Button>
  );
}
