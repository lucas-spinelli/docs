import type React from "react"
import { Sidebar } from "./sidebar"
import { MobileNav } from "./mobile-nav"
import { TableOfContents } from "./table-of-contents"

interface DocsLayoutProps {
  children: React.ReactNode
  tocItems?: { title: string; href: string; level: number }[]
}

export function DocsLayout({ children, tocItems = [] }: DocsLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileNav />

      <div className="lg:pl-64">
        <main className="mx-auto max-w-6xl px-4 py-8 pt-20 lg:pt-8">
          <div className="grid grid-cols-1 gap-10 xl:grid-cols-[1fr_200px]">
            <article className="prose prose-invert max-w-none">{children}</article>
            {tocItems.length > 0 && <TableOfContents items={tocItems} />}
          </div>
        </main>
      </div>
    </div>
  )
}
