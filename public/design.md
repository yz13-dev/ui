# YZ13 UI — design.md

This file documents the design system behind [ui.yz13.dev](https://ui.yz13.dev), a
personal shadcn-style component registry built on Tailwind CSS v4 and Base UI (not
Radix). It exists so that both humans and AI agents extending this registry — or
building products with it — produce interfaces that read as one system, without
reverse-engineering intent from component source alone.

If you are generating or editing a component, page, or block for this registry, read
this file first. Prefer the rules here over generic Tailwind/shadcn defaults you may
already know — this system deviates from stock shadcn in specific, intentional ways
(token names, the interaction primitive library, the type scale).

## Priorities, in order

1. **Consistency with existing patterns** over inventing a new one. If a similar
   component already exists, match its structure, variant naming, and token usage.
2. **Restraint** over expressiveness. Monochrome first; color, gradients, and motion
   are used only when they carry meaning.
3. **Semantic tokens** over raw Tailwind values. Never hardcode a hex/oklch color or an
   arbitrary `text-*`/`gap-*` size when a role token already exists for it.
4. **Accessibility and both themes** over a single polished screenshot. Every surface
   must work in light and dark, and every interactive element needs a visible focus
   state.

## What this is not

- Not Radix-based. Interactive primitives (`Dialog`, `Select`, `Tooltip`, `Popover`,
  ...) come from `@base-ui/react`. Don't assume Radix's API shape, data attributes, or
  CSS variable names — check the actual component source.
- Not using Tailwind's default color palette or default `text-sm`/`text-base` scale
  for content. This system layers its own semantic color tokens and a named type-role
  scale on top of Tailwind v4's `@theme`.
- Not decorated by default. No drop shadows, no gradients, no color, unless the
  interface needs to communicate something specific.

## Color

Color is a two-tier system defined in `globals.css`: primitive ramps, then semantic
aliases built on top of them. Components consume only the semantic layer — never
reference a primitive step (`--primary-700`, `--success-400`, ...) directly from a
component.

**Primitives** are 11-step OKLCH ramps (`50` → `950`), constant across both themes.
The compact semantic palette declares the light and dark values used by components.

- `primary` — pure gray, zero chroma. The monochrome interactive color (buttons, links,
  focus rings).
- `success` / `warning` / `error` / `info` — the status ramps.

**Semantic aliases** flip per theme (light/dark) and are exposed as ordinary Tailwind
utility classes:

| Utility | Backed by | Use for |
| --- | --- | --- |
| `bg-canvas` | semantic palette | Page background |
| `bg-surface` | semantic palette | Card / base surface background |
| `bg-muted` | semantic palette | Hover and selected-state surfaces |
| `text-primary` | semantic palette | Primary body text |
| `text-secondary` | semantic palette | Secondary body text |
| `text-link` | `primary` | Inline links, link-styled buttons |
| `bg-brand`, `bg-brand-hover`, `bg-brand-active`, `text-brand-foreground` | `primary` | Solid interactive surfaces — the default `Button`, `Badge` variant |
| `bg-success` / `bg-warning` / `bg-error` | status ramps | Status surfaces |
| `text-on-success` / `text-on-warning` / `text-on-error` | status ramps | Text on status surfaces |
| `border-subtle` / `border-default` / `border-active` | semantic palette | Border hierarchy |
| `ring-ring` / `outline-ring` | `primary` | Focus rings |

Rules:

- Base UI (`canvas`, `surface`, `muted`, `border`, the text hierarchy) is monochrome —
  reach for it by default.
- Status colors exist for meaningful emphasis only — a status, a selection, a
  result the reader needs to notice. Never use it decoratively, and never use it as a
  generic "brand color" substitute for `brand`.
- `success` / `warning` / `error` / `info` communicate a real state. Pair the color
  with a non-color cue (an icon, a label) where possible — a value isn't green just
  because it's favorable.
- Status variants follow the tinted pattern already established by `Button`'s `error`
  variant: `bg-{status}/10 text-{status}` (or the dedicated `bg-{status}-subtle` for a
  slightly stronger tint), not a solid fill.

## Typography

Use semantic type roles for content, not arbitrary Tailwind sizes. Each role is a
`--text-*` token in `globals.css`, used as a normal Tailwind utility (`text-title`,
`text-heading-16`, ...). Weight is separate — apply `font-medium` / `font-semibold`
alongside the role; the token only sets size and line-height.

| Role | Size | Use for |
| --- | --- | --- |
| `text-display` | 48px | A single page-defining statement, used rarely |
| `text-title` | 32px | The page or document title |
| `text-heading-24` | 24px | Major section breaks |
| `text-heading-20` | 20px | Nested subsection headings |
| `text-heading-16` | 16px | Component-level headings, e.g. a `CardTitle` |
| `text-lede` | 17px | A short orientation paragraph under a title |
| `text-body` | 14px | Reading prose |
| `text-label` | 13px | Compact names and UI labels |
| `text-caption` | 12px | Subordinate, qualifying text |

`text-sm`, `text-xs`, and the rest of Tailwind's default scale still exist and are the
right choice for dense UI chrome (buttons, inputs, badges) where control size — not
content role — should drive the type size. Don't put a bare `text-sm`/`text-base` on a
`*Title`/`*Description`/`Label`-shaped component; use the matching role token.

## Spacing

There's no separate spacing token scale — Tailwind's default spacing multiplier
already covers it. Pick the gap that matches the relationship, not a fixed number:

- **Within a group** (label → value, icon → text): `gap-1`–`gap-2`
- **Inside a component** (padding, internal stacks): `gap-3`–`gap-4`
- **Between sibling components or sections**: `gap-6`–`gap-8`
- **Major page or section breaks**: `gap-12`–`gap-16`

Every gap should have one clear owner. Don't stack a parent gap with competing margins
on its children.

## Restraint checklist

Before shipping a component or page, check:

- No cards nested inside cards, and no border added just to patch weak hierarchy —
  prefer spacing, alignment, and type first.
- Peer elements (equivalent stats, table columns, list rows) share the same type role,
  size, and alignment. Don't resize one because its content is longer.
- No color without meaning.
- No decorative gradients on backgrounds or text. The gradient-border treatment
  (`gradient-border-plugin`, used by `Button` and `Card`) is this system's intentional
  signature surface treatment, not decoration — it isn't extended to new uses without
  reason.
- Motion explains a state change or confirms an action; it doesn't run by default.
- Every interactive element has a visible `focus-visible` state and works with a
  keyboard alone.

## More

Full docs, live previews, and the component registry: https://ui.yz13.dev
