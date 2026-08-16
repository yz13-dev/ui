import { cn } from "@/lib/utils"
import { Badge } from "@/registry/components/ui/badge"
import { Button } from "@/registry/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/components/ui/card"
import { CheckIcon } from "lucide-react"

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "For side projects and experiments.",
    features: ["1 project", "Community support", "Basic components"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For teams shipping production products.",
    features: ["Unlimited projects", "Priority support", "Full registry access"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with custom needs.",
    features: ["Everything in Pro", "SSO", "Dedicated support"],
    highlighted: false,
  },
]

function PricingThreeTier() {
  return (
    <section className="grid gap-6 px-6 py-16 sm:grid-cols-3">
      {tiers.map((tier) => (
        <Card
          key={tier.name}
          className={cn("flex flex-col", tier.highlighted && "ring-2 ring-foreground")}
        >
          <CardHeader>
            <div className="flex items-center justify-between gap-2">
              <CardTitle>{tier.name}</CardTitle>
              {tier.highlighted ? <Badge>Popular</Badge> : null}
            </div>
            <CardDescription>{tier.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-4">
            <p className="text-title font-medium">{tier.price}</p>
            <ul className="flex flex-col gap-2">
              {tier.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-label text-muted-foreground"
                >
                  <CheckIcon className="size-4 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              variant={tier.highlighted ? "default" : "outline"}
              className="w-full"
            >
              Choose {tier.name}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  )
}

export { PricingThreeTier }
