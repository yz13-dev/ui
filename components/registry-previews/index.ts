import type { ComponentType } from "react"

import type { VariantValues } from "@/components/variant-controls"

import { Preview as AccordionPreview } from "./accordion"
import { Preview as AlertPreview } from "./alert"
import { Preview as AlertDialogPreview } from "./alert-dialog"
import { Preview as AspectRatioPreview } from "./aspect-ratio"
import { Preview as AvatarPreview } from "./avatar"
import { Preview as BadgePreview } from "./badge"
import { Preview as BreadcrumbPreview } from "./breadcrumb"
import { Preview as ButtonPreview } from "./button"
import { Preview as ButtonGroupPreview } from "./button-group"
import { Preview as CalendarPreview } from "./calendar"
import { Preview as CardPreview } from "./card"
import { Preview as CarouselPreview } from "./carousel"
import { Preview as ChartPreview } from "./chart"
import { Preview as CheckboxPreview } from "./checkbox"
import { Preview as CollapsiblePreview } from "./collapsible"
import { Preview as ComboboxPreview } from "./combobox"
import { Preview as CommandPreview } from "./command"
import { Preview as ContextMenuPreview } from "./context-menu"
import { Preview as DialogPreview } from "./dialog"
import { Preview as DrawerPreview } from "./drawer"
import { Preview as DropdownMenuPreview } from "./dropdown-menu"
import { Preview as EmptyPreview } from "./empty"
import { Preview as FieldPreview } from "./field"
import { Preview as HoverCardPreview } from "./hover-card"
import { Preview as InputPreview } from "./input"
import { Preview as InputGroupPreview } from "./input-group"
import { Preview as InputOtpPreview } from "./input-otp"
import { Preview as ItemPreview } from "./item"
import { Preview as KbdPreview } from "./kbd"
import { Preview as LabelPreview } from "./label"
import { Preview as MenubarPreview } from "./menubar"
import { Preview as NativeSelectPreview } from "./native-select"
import { Preview as NavigationMenuPreview } from "./navigation-menu"
import { Preview as PaginationPreview } from "./pagination"
import { Preview as PopoverPreview } from "./popover"
import { Preview as ProgressPreview } from "./progress"
import { Preview as RadioGroupPreview } from "./radio-group"
import { Preview as ResizablePreview } from "./resizable"
import { Preview as ScrollAreaPreview } from "./scroll-area"
import { Preview as SelectPreview } from "./select"
import { Preview as SeparatorPreview } from "./separator"
import { Preview as SheetPreview } from "./sheet"
import { Preview as SkeletonPreview } from "./skeleton"
import { Preview as SliderPreview } from "./slider"
import { Preview as SonnerPreview } from "./sonner"
import { Preview as SpinnerPreview } from "./spinner"
import { Preview as SwitchPreview } from "./switch"
import { Preview as TablePreview } from "./table"
import { Preview as TabsPreview } from "./tabs"
import { Preview as TextareaPreview } from "./textarea"
import { Preview as TogglePreview } from "./toggle"
import { Preview as ToggleGroupPreview } from "./toggle-group"
import { Preview as TooltipPreview } from "./tooltip"

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
  "alert-dialog": AlertDialogPreview,
  dialog: DialogPreview,
  drawer: DrawerPreview,
  popover: PopoverPreview,
  "hover-card": HoverCardPreview,
  tooltip: TooltipPreview,
  "dropdown-menu": DropdownMenuPreview,
  "context-menu": ContextMenuPreview,
  menubar: MenubarPreview,
  breadcrumb: BreadcrumbPreview,
  pagination: PaginationPreview,
  "navigation-menu": NavigationMenuPreview,
  field: FieldPreview,
  "input-group": InputGroupPreview,
  "input-otp": InputOtpPreview,
  "radio-group": RadioGroupPreview,
  "button-group": ButtonGroupPreview,
  "native-select": NativeSelectPreview,
  select: SelectPreview,
  combobox: ComboboxPreview,
  calendar: CalendarPreview,
  slider: SliderPreview,
  accordion: AccordionPreview,
  collapsible: CollapsiblePreview,
  table: TablePreview,
  tabs: TabsPreview,
  item: ItemPreview,
  empty: EmptyPreview,
  chart: ChartPreview,
  "aspect-ratio": AspectRatioPreview,
  resizable: ResizablePreview,
  "scroll-area": ScrollAreaPreview,
  sonner: SonnerPreview,
  command: CommandPreview,
}
