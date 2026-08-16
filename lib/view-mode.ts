import { parseAsStringLiteral } from "nuqs"

export type ViewMode = "grid" | "list"

export const viewModeParser = parseAsStringLiteral(["grid", "list"] as const)
  .withDefault("grid")
  .withOptions({ history: "replace" })
