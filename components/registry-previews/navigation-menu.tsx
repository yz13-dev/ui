"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/registry/components/ui/navigation-menu"

export function Preview() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-48 flex-col gap-1">
              <li>
                <NavigationMenuLink href="#">Button</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Badge</NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink href="#">Card</NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="#">Docs</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
