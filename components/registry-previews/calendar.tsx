"use client"

import { useState } from "react"

import { Calendar } from "@/registry/components/ui/calendar"

export function Preview() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  )
}
