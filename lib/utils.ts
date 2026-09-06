import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Registers this project's semantic `--text-*` role tokens (registry/globals.css)
// under tailwind-merge's "text" theme scale. Without this, tailwind-merge doesn't
// recognize e.g. `text-caption` as a font-size utility, so it falls back to treating
// it as an unclassified value that collides with real text-color utilities (like
// `text-tertiary`) in the same className string — silently dropping the role token
// whenever a component pairs one with a color class (e.g. `cn("text-caption text-tertiary")`).
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display",
        "title",
        "heading-24",
        "heading-20",
        "heading-16",
        "lede",
        "body",
        "label",
        "caption",
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
