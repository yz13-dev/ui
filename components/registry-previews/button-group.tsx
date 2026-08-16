"use client"

import { ButtonGroup } from "@/registry/components/ui/button-group"
import { Button } from "@/registry/components/ui/button"

export function Preview() {
  return (
    <ButtonGroup>
      <Button variant="outline">Day</Button>
      <Button variant="outline">Week</Button>
      <Button variant="outline">Month</Button>
    </ButtonGroup>
  )
}
