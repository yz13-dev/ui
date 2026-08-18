"use client";

import type { VariantValues } from "@/components/variant-controls";
import { Badge } from "@/registry/components/ui/badge";

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Badge
      variant={
        values.variant as
          | "default"
          | "secondary"
          | "error"
          | "success"
          | "warning"
          | "info"
          | "outline"
          | "ghost"
          | "link"
      }
      filled={Boolean(values.filled)}
    >
      Badge
    </Badge>
  );
}
