# CLAUDE.md

## Design system

Full principles: `content/docs/design-principles.mdx` (also served as a docs page). Read it before styling any new or edited component. Summary of the rules that apply when adding components:

**Typography** — use the semantic `text-*` role tokens from `registry/globals.css` (`@theme`), not raw Tailwind sizes, for anything that plays a content role:

| Component pattern | Role |
| --- | --- |
| Modal/page-level `*Title` (Dialog, Sheet, Drawer, AlertDialog, Card, Popover, Empty) | `text-heading-16 font-medium` |
| `*Description` under one of the above, and small group-header labels (menu `*Label`, `Table Caption`) | `text-caption` |
| Compact row/control text — form `Label`, `FieldLabel`/`FieldTitle`, `ItemTitle`, `ProgressLabel`, button label | `text-label` |
| Body prose in MDX docs | `text-body` (handled centrally in `components/mdx.tsx`, don't override per-page) |
| Page/section headings in MDX docs | `text-title` / `text-heading-24` / `text-heading-20` / `text-heading-16` (also centralized in `components/mdx.tsx`) |

Don't add a bare `text-sm`/`text-xs`/`text-base` to a new Title/Description/Label-shaped component — use the matching role token above instead. Control-size-driven text (button size variants, icon sizing) stays on the size system, not content roles.

When a role token's line-height already fits (all of them do — `--text-*--line-height` in `registry/globals.css`), don't also add `leading-none`/`leading-snug`/`leading-normal`/`leading-relaxed` next to it — that fights the token via an unpredictable cascade order instead of a clean override. Drop the old `leading-*` when adopting a role token.

**Spacing** — no separate spacing token scale; use Tailwind's default multiplier per the rhythm in the principles doc (`gap-1`–`gap-2` within a group, `gap-3`–`gap-4` inside a component, `gap-6`–`gap-8` between sections, `gap-12`–`gap-16` for major breaks).

**Color** — base UI stays monochrome (neutral OKLCH tokens). The chroma accent palette (`--pink` … `--red`) is for meaningful state/emphasis only, never decoration.

**Restraint** — no cards nested in cards, no color without meaning, peer elements (equivalent stats/columns/rows) share the same type role and alignment. The gradient-border treatment (`gradient-border-plugin`) is this system's intentional signature surface, not a "decorative gradient" — keep it scoped to where it's already used (`Button`, `Card`), don't extend it reflexively to new components.

## Registry structure

`registry/` is the single source of truth for every UI component (published and distributable via `registry.json` / `shadcn add`). Every file in `components/ui/*` is a one-line re-export shim, e.g. `export * from "@/registry/components/ui/button";` — nothing there is a local copy. Never edit component logic or styling directly in `components/ui/*`; always edit the matching file in `registry/components/ui/*`, and the shim picks it up automatically.

When adding a new UI component:
1. Create it in `registry/components/ui/<name>.tsx`.
2. Add an entry to `registry.json` (`type: "registry:block"`, `files` pointing at `registry/components/ui/<name>.tsx` → target `components/ui/<name>.tsx`). Declare `dependencies` only for packages a standard shadcn install wouldn't already have — notably `@base-ui/react` (this project uses it instead of Radix) and any component-specific library (`cmdk`, `vaul`, `recharts`, etc.). Declare `registryDependencies` for any other registry item it imports from `@/components/ui/*`.
3. Add the one-line shim to `components/ui/<name>.tsx`: `export * from "@/registry/components/ui/<name>";`.

A component that's genuinely docs-site-only (not meant for external distribution) can skip the registry and live directly in `components/ui/` instead — that's the one case where a real (non-shim) file there is correct.

Non-component assets follow the same single-source rule, just without a re-export shim (you can't re-export a binary file — the app imports the registry path directly instead). Fonts: `registry/lib/fonts.ts` (`next/font/local`) + `registry/lib/fonts/*.woff2` are the only copies; `app/layout.tsx` imports `sans`/`mono`/`serif`/`pixel` straight from `@/registry/lib/fonts`. Shipped via the `fonts` registry item (`registryDependencies: ["theme"]`, since the font variable names are wired into `--font-sans` etc. in `registry/globals.css`). A consumer installing it still has to apply `sans.variable`/`mono.variable`/`serif.variable`/`pixel.variable` on their own root layout by hand — `shadcn add` copies files, it doesn't edit a consumer's `layout.tsx`.

## Package manager

Use `bun` (`bun install`, `bun run <script>`, `bunx <pkg>`) — never `npm`/`yarn`/`pnpm`.

## Commits

No commitlint/hooks enforce this — it's a manual convention, follow it anyway:
- Subject line only. No body, no description, no bullet list of changes.
- No `Co-Authored-By` trailer.
- Lowercase, short, imperative: `add card to registry`, `update styles for registry globals.css`, `fix errors in app`. No conventional-commit prefixes (`feat:`, `fix(scope):`, etc.), no scopes.
