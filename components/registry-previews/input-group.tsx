"use client";

import { SearchIcon } from "lucide-react";

import type { VariantValues } from "@/components/variant-controls";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/registry/components/ui/input-group";

export function Preview({ values }: { values: VariantValues }) {
  return (
    <InputGroup size={values.size as "xs" | "sm" | "default" | "lg"} className="w-full max-w-xs">
      <InputGroupAddon>
        <SearchIcon />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search components..." disabled={Boolean(values.disabled)} />
    </InputGroup>
  );
}
