import { Button } from "@yz13/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@yz13/ui/dropdown-menu";
import { Icons } from "@yz13/ui/icons";
import { Input } from "@yz13/ui/input";
import { Skeleton } from "@yz13/ui/skeleton";


const Component = () => {
  return (
    <>
      <header className="w-full h-12 border-b flex px-6 items-center justify-between">
        <Skeleton className="w-16 h-9" />
        <div className="flex items-center gap-2">
          <Button>Button</Button>
          <Skeleton className="size-9" />
        </div>
      </header>
      <div className="max-w-4xl mx-auto w-full px-6 py-12">
        <div className="flex items-center justify-between w-full gap-4">
          <Input placeholder="Поиск" />
          <div className="flex gap-2 items-center">
            <Button variant="outline"><Icons.FilterIcon /></Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline"><Icons.SortAscIcon /></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Наиболее популярные</DropdownMenuItem>
                <DropdownMenuItem>Наименее популярные</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  )
}

Component.displayName = "Page"

export default Component;
