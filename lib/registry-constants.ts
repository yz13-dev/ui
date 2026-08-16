import type { RegistryKind } from "./types"

/**
 * Pure data, no `node:fs`/`node:path` imports — safe to import from "use client" files
 * (unlike `lib/registry.ts`, which reads the filesystem at module scope and would pull
 * `node:fs` into the client bundle if imported from client code, even for an unrelated
 * named export).
 */
export const KIND_DIR: Record<RegistryKind, string> = {
  component: "components",
  block: "blocks",
  page: "pages",
}

export const KIND_LABEL: Record<RegistryKind, string> = {
  component: "Components",
  block: "Blocks",
  page: "Pages",
}
