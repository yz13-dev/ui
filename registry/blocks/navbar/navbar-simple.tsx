import { YZ13Icon } from "@/registry/components/logo/yz13"
import { Button } from "@/registry/components/ui/button"

const links = ["Components", "Blocks", "Pages", "Docs"]

function NavbarSimple() {
  return (
    <header className="flex items-center justify-between gap-6 border-b px-6 py-4">
      <div className="flex items-center gap-8">
        <YZ13Icon className="h-6 w-auto" />
        <nav className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-label text-muted-foreground hover:text-foreground"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      <Button size="sm">Get started</Button>
    </header>
  )
}

export { NavbarSimple }
