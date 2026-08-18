"use client";

import type { VariantValues } from "@/components/variant-controls";
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/components/ui/combobox";

export function Preview({ values }: { values: VariantValues }) {
  return (
    <Combobox>
      <ComboboxInput
        placeholder="Search fruit..."
        size={values.size as "xs" | "sm" | "default" | "lg"}
        disabled={Boolean(values.disabled)}
      />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="apple">Apple</ComboboxItem>
          <ComboboxItem value="banana">Banana</ComboboxItem>
          <ComboboxItem value="cherry">Cherry</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
