import { FooterSimple } from "@/registry/blocks/footer/footer-simple"
import { HeroCentered } from "@/registry/blocks/hero/hero-centered"
import { NavbarSimple } from "@/registry/blocks/navbar/navbar-simple"
import { PricingThreeTier } from "@/registry/blocks/pricing/pricing-3-tier"

function SaasLanding() {
  return (
    <div className="flex flex-col">
      <NavbarSimple />
      <HeroCentered />
      <PricingThreeTier />
      <FooterSimple />
    </div>
  )
}

export { SaasLanding }
