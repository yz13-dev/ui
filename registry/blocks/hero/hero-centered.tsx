import { Badge } from "@/registry/components/ui/badge"
import { Button } from "@/registry/components/ui/button"

function HeroCentered() {
  return (
    <section className="flex flex-col items-center gap-6 px-6 py-24 text-center">
      <Badge variant="outline">Now available</Badge>
      <h1 className="max-w-2xl text-display font-medium text-balance">
        Build your product's design system faster
      </h1>
      <p className="max-w-lg text-lede text-muted-foreground text-balance">
        A monochrome, typography-driven component registry you can install with a single
        command and make your own.
      </p>
      <div className="flex items-center gap-3">
        <Button size="lg">Get started</Button>
        <Button variant="outline" size="lg">
          View components
        </Button>
      </div>
    </section>
  )
}

export { HeroCentered }
