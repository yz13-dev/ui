import type { ComponentType } from "react"

import type { VariantValues } from "@/components/variant-controls"

import { Preview as AlertPreview } from "./alert"
import { Preview as AvatarPreview } from "./avatar"
import { Preview as BadgePreview } from "./badge"
import { Preview as ButtonPreview } from "./button"
import { Preview as CardPreview } from "./card"
import { Preview as CarouselPreview } from "./carousel"
import { Preview as CheckboxPreview } from "./checkbox"
import { Preview as InputPreview } from "./input"
import { Preview as KbdPreview } from "./kbd"
import { Preview as LabelPreview } from "./label"
import { Preview as ProgressPreview } from "./progress"
import { Preview as SeparatorPreview } from "./separator"
import { Preview as SheetPreview } from "./sheet"
import { Preview as SkeletonPreview } from "./skeleton"
import { Preview as SpinnerPreview } from "./spinner"
import { Preview as SwitchPreview } from "./switch"
import { Preview as TextareaPreview } from "./textarea"
import { Preview as TogglePreview } from "./toggle"
import { Preview as ToggleGroupPreview } from "./toggle-group"

export const registryPreviews: Record<
  string,
  ComponentType<{ values: VariantValues }>
> = {
  button: ButtonPreview,
  badge: BadgePreview,
  alert: AlertPreview,
  toggle: TogglePreview,
  "toggle-group": ToggleGroupPreview,
  sheet: SheetPreview,
  card: CardPreview,
  separator: SeparatorPreview,
  carousel: CarouselPreview,
  avatar: AvatarPreview,
  skeleton: SkeletonPreview,
  spinner: SpinnerPreview,
  switch: SwitchPreview,
  checkbox: CheckboxPreview,
  input: InputPreview,
  label: LabelPreview,
  textarea: TextareaPreview,
  progress: ProgressPreview,
  kbd: KbdPreview,
}
