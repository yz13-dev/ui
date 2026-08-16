"use client"

import { SearchIcon } from "lucide-react"

import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  useComboboxAnchor,
} from "@/registry/components/ui/combobox"

export function TagFilter({
  tags,
  value,
  onChange,
}: {
  tags: string[]
  value: string[]
  onChange: (value: string[]) => void
}) {
  const anchor = useComboboxAnchor()
  const availableTags = tags.filter((tag) => !value.includes(tag))

  return (
    <Combobox items={availableTags} multiple value={value} onValueChange={onChange}>
      <ComboboxChips ref={anchor} className="h-10 w-full max-w-sm gap-2 bg-card px-3">
        <SearchIcon className="size-4.5 shrink-0 text-muted-foreground" />
        {value.map((tag) => (
          <ComboboxChip key={tag} className="h-6 px-2 text-label capitalize">
            {tag}
          </ComboboxChip>
        ))}
        <ComboboxChipsInput
          className="text-base"
          placeholder={value.length > 0 ? undefined : "Filter by tag..."}
        />
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>No tags found.</ComboboxEmpty>
        <ComboboxList>
          {(tag: string) => (
            <ComboboxItem key={tag} value={tag} className="capitalize">
              {tag}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
