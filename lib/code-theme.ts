import type { ThemeRegistrationRaw } from "shiki"

/**
 * Monochrome syntax theme driven by this site's own CSS variables (`--foreground`,
 * `--muted-foreground`) instead of a stock Shiki theme's hardcoded hex palette — matches
 * `design-principles.mdx`'s "monochrome-first, no color without meaning" rule. Structure is
 * conveyed through weight/italic, not hue. The same object is used for both the light and
 * dark theme slots since every color here is a CSS var that already flips under `.dark`.
 */
export const codeTheme: ThemeRegistrationRaw = {
  name: "yz13",
  type: "dark",
  fg: "var(--foreground)",
  bg: "var(--background)",
  settings: [
    {
      settings: { foreground: "var(--foreground)" },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: { foreground: "var(--muted-foreground)", fontStyle: "italic" },
    },
    {
      scope: ["string", "string.template", "string.quoted", "string.regexp"],
      settings: { foreground: "var(--muted-foreground)" },
    },
    {
      scope: [
        "keyword",
        "keyword.control",
        "storage.type",
        "storage.modifier",
        "keyword.operator.new",
      ],
      settings: { fontStyle: "italic" },
    },
    {
      scope: [
        "punctuation",
        "meta.brace",
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.accessor",
      ],
      settings: { foreground: "var(--muted-foreground)" },
    },
    {
      scope: ["entity.name.tag"],
      settings: { fontStyle: "bold" },
    },
    {
      scope: ["entity.name.type", "support.type", "entity.other.attribute-name"],
      settings: { fontStyle: "italic" },
    },
  ],
}
