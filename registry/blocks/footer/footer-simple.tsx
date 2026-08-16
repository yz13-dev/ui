import { YZ13Icon } from "@/registry/components/logo/yz13"
import { Separator } from "@/registry/components/ui/separator"

const columns = [
  {
    title: "Product",
    links: ["Components", "Blocks", "Pages"],
  },
  {
    title: "Resources",
    links: ["Docs", "Design principles"],
  },
  {
    title: "Company",
    links: ["GitHub"],
  },
]

function FooterSimple() {
  return (
    <footer className="flex flex-col gap-8 px-6 py-12">
      <div className="flex flex-wrap justify-between gap-8">
        <div className="flex flex-col gap-2">
          <YZ13Icon className="h-6 w-auto" />
          <p className="max-w-56 text-caption text-muted-foreground">
            A monochrome, typography-driven component registry.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
              <span className="text-label font-medium">{column.title}</span>
              <ul className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-label text-muted-foreground hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <p className="text-caption text-muted-foreground">
        © {new Date().getFullYear()} YZ13. All rights reserved.
      </p>
    </footer>
  )
}

export { FooterSimple }
