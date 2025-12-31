"use client"

import { cn } from "@/lib/utils"

interface TocItem {
  title: string
  href: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-20">
        <h4 className="mb-4 text-sm font-semibold text-foreground">En esta página</h4>
        <nav className="space-y-2">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "block text-sm text-muted-foreground transition-colors hover:text-foreground",
                item.level === 2 && "pl-0",
                item.level === 3 && "pl-4",
              )}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  )
}
