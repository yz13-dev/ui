"use client"

import {
  NativeSelect,
  NativeSelectOption,
} from "@/registry/components/ui/native-select"

export function Preview() {
  return (
    <NativeSelect defaultValue="apple">
      <NativeSelectOption value="apple">Apple</NativeSelectOption>
      <NativeSelectOption value="banana">Banana</NativeSelectOption>
      <NativeSelectOption value="cherry">Cherry</NativeSelectOption>
    </NativeSelect>
  )
}
