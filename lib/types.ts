import { z } from "zod"

export const registryKindSchema = z.enum(["component", "block", "page"])
export type RegistryKind = z.infer<typeof registryKindSchema>

export const registryStatusSchema = z.enum(["stable", "beta", "deprecated"])
export type RegistryStatus = z.infer<typeof registryStatusSchema>

export const variantAxisSchema = z.object({
  prop: z.string(),
  label: z.string(),
  type: z.enum(["select", "boolean"]),
  options: z.array(z.string()).optional(),
  defaultValue: z.union([z.string(), z.boolean()]),
})
export type VariantAxis = z.infer<typeof variantAxisSchema>

const registryItemBaseSchema = z.object({
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  description: z.string(),
  tags: z.array(z.string()),
  files: z.array(z.string()).min(1),
  dependencies: z.array(z.string()).optional(),
  status: registryStatusSchema.optional(),
  createdAt: z.string(),
})
export type RegistryItemBase = z.infer<typeof registryItemBaseSchema>

export const registryComponentSchema = registryItemBaseSchema.extend({
  kind: z.literal("component"),
  variants: z.array(variantAxisSchema).optional(),
})
export type RegistryComponent = z.infer<typeof registryComponentSchema>

export const registryBlockSchema = registryItemBaseSchema.extend({
  kind: z.literal("block"),
  registryDependencies: z.array(z.string()),
  previewHeight: z.number().optional(),
})
export type RegistryBlock = z.infer<typeof registryBlockSchema>

export const registryPageSchema = registryItemBaseSchema.extend({
  kind: z.literal("page"),
  registryDependencies: z.array(z.string()),
})
export type RegistryPage = z.infer<typeof registryPageSchema>

export const registryItemSchema = z.discriminatedUnion("kind", [
  registryComponentSchema,
  registryBlockSchema,
  registryPageSchema,
])
export type RegistryItem = z.infer<typeof registryItemSchema>
