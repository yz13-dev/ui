"use client"

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/components/ui/drawer"
import { buttonVariants } from "@/registry/components/ui/button"

export function Preview() {
  return (
    <Drawer>
      <DrawerTrigger className={buttonVariants({ variant: "outline" })}>
        Open drawer
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here.
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
