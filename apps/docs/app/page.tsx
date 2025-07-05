import { Button } from "@yz13/ui/button";

export default function () {
  return (
    <div className="w-full h-dvh flex flex-col items-center gap-2 justify-center">
      <Button variant="default">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="link">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="secondary">Button</Button>
    </div>
  )
}
