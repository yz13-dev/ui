"use client"

import type { VariantValues } from "@/components/variant-controls"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/registry/components/ui/carousel"

export function Preview({ values }: { values: VariantValues }) {
  const orientation = values.orientation as "horizontal" | "vertical"

  return (
    <Carousel orientation={orientation} className="w-full max-w-xs">
      <CarouselContent className={orientation === "vertical" ? "h-48" : undefined}>
        {[1, 2, 3].map((slide) => (
          <CarouselItem key={slide}>
            <div className="flex h-32 items-center justify-center rounded-lg border text-heading-20 font-medium text-tertiary">
              {slide}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
