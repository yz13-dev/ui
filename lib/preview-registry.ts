import type { ComponentType } from "react"

import { FooterSimple } from "@/registry/blocks/footer/footer-simple"
import { HeroCentered } from "@/registry/blocks/hero/hero-centered"
import { NavbarSimple } from "@/registry/blocks/navbar/navbar-simple"
import { PricingThreeTier } from "@/registry/blocks/pricing/pricing-3-tier"

export const blockPreviews: Record<string, ComponentType> = {
  "hero-centered": HeroCentered,
  "navbar-simple": NavbarSimple,
  "footer-simple": FooterSimple,
  "pricing-3-tier": PricingThreeTier,
}

export const pagePreviews: Record<string, ComponentType> = {}
