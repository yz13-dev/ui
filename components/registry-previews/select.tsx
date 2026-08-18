"use client";

import type { VariantValues } from "@/components/variant-controls";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/components/ui/select";

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Select defaultValue="apple">
      <SelectTrigger
        size={values.size as "xs" | "sm" | "default" | "lg"}
        disabled={Boolean(values.disabled)}
      >
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="cherry">Cherry</SelectItem>
      </SelectContent>
    </Select>
  );
}
