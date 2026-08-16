import fs from "node:fs"
import path from "node:path"

import type { IndexedRegistryItem } from "./registry"

export interface RegistrySourceFile {
  file: string
  code: string
}

export function getItemSource(item: IndexedRegistryItem): RegistrySourceFile[] {
  return item.files.map((file) => ({
    file,
    code: fs.readFileSync(path.join(item.dir, file), "utf-8"),
  }))
}
