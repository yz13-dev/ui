"use client";

import type { VariantValues } from "@/components/variant-controls";
import { NativeSelect, NativeSelectOption } from "@/registry/components/ui/native-select";

export function Preview({ values }: { values: VariantValues }) {
  return (
    <NativeSelect
      defaultValue="apple"
      size={values.size as "xs" | "sm" | "default" | "lg"}
      disabled={Boolean(values.disabled)}
    >
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  );
}
