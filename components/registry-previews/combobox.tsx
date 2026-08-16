"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/registry/components/ui/combobox"

export function Preview() {
  return (
    <Combobox>
      <ComboboxInput placeholder="Search fruit..." />
      <ComboboxContent>
        <ComboboxList>
          <ComboboxItem value="apple">Apple</ComboboxItem>
          <ComboboxItem value="banana">Banana</ComboboxItem>
          <ComboboxItem value="cherry">Cherry</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
