"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { ChevronDown, ChevronRight, Search, Book, Gamepad2, Monitor, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href?: string
  icon?: React.ReactNode
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    title: "LuckiApps",
    href: "/",
    icon: <Book className="h-4 w-4" />,
  },
  {
    title: "Utilidades",
    icon: <Wrench className="h-4 w-4" />,
    children: [
      { title: "Introducción", href: "/utilidades" },
      { title: "Time", href: "/utilidades/time" },
      { title: "Timer", href: "/utilidades/timer" },
      { title: "MiniNotes", href: "/utilidades/mininotes" },
      { title: "Apple Notes", href: "/utilidades/apple-notes" },
      { title: "ListNotes", href: "/utilidades/listnotes" },
      { title: "Paint Notes", href: "/utilidades/paint-notes" },
      { title: "LuckDocs", href: "/utilidades/luckdocs" },
      { title: "LuckSheet", href: "/utilidades/lucksheet" },
      { title: "LuckSlides", href: "/utilidades/luckslides" },
      { title: "Tweet Card", href: "/utilidades/tweet-card" },
      { title: "Traductor", href: "/utilidades/traductor" },
      { title: "QR", href: "/utilidades/qr" },
      { title: "Scan QR", href: "/utilidades/scan-qr" },
      { title: "3D Viewer", href: "/utilidades/3d-viewer" },
      { title: "LuckiDolar", href: "/utilidades/luckidolar" },
      { title: "Calculadora", href: "/utilidades/calculadora" },
      { title: "Video Editor", href: "/utilidades/video-editor" },
      { title: "Audio Recorder", href: "/utilidades/audio-recorder" },
      { title: "Spectrum", href: "/utilidades/spectrum" },
      { title: "Code Editor", href: "/utilidades/code-editor" },
      { title: "UI Builder", href: "/utilidades/ui-builder" },
      { title: "Encryptor", href: "/utilidades/encryptor" },
    ],
  },
  {
    title: "Juegos",
    icon: <Gamepad2 className="h-4 w-4" />,
    children: [
      { title: "Introducción", href: "/juegos" },
      { title: "Block Game", href: "/juegos/block-game" },
      { title: "Block 3D", href: "/juegos/block-3d" },
      { title: "Ninja Game", href: "/juegos/ninja-game" },
      { title: "TicTacToe Bot", href: "/juegos/tictactoe-bot" },
      { title: "TicTacToe", href: "/juegos/tictactoe" },
      { title: "Snake", href: "/juegos/snake" },
      { title: "Cubo Rubik", href: "/juegos/cubo-rubik" },
      { title: "2048", href: "/juegos/2048" },
      { title: "Pac-Man", href: "/juegos/pacman" },
      { title: "Flappy Bird", href: "/juegos/flappy-bird" },
      { title: "Chess", href: "/juegos/chess" },
      { title: "Sudoku", href: "/juegos/sudoku" },
      { title: "Wordle", href: "/juegos/wordle" },
      { title: "Bingo", href: "/juegos/bingo" },
      { title: "Maths", href: "/juegos/maths" },
      { title: "Memory Match", href: "/juegos/memory-match" },
      { title: "Block Breaker", href: "/juegos/block-breaker" },
      { title: "Final Sentence", href: "/juegos/final-sentence" },
    ],
  },
  {
    title: "Modelos",
    icon: <Monitor className="h-4 w-4" />,
    children: [
      { title: "Introducción", href: "/modelos" },
      { title: "Windows 11", href: "/modelos/windows-11" },
      { title: "Mac", href: "/modelos/mac" },
      { title: "Globle", href: "/modelos/globle" },
      { title: "Card", href: "/modelos/card" },
      { title: "Card 2", href: "/modelos/card-2" },
      { title: "Pro", href: "/modelos/pro" },
      { title: "Suscribe", href: "/modelos/suscribe" },
      { title: "Map", href: "/modelos/map" },
      { title: "Block 3D", href: "/modelos/block-3d" },
    ],
  },
]

function NavItemComponent({ item, level = 0 }: { item: NavItem; level?: number }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(() => {
    // Auto-open if current path is in children
    if (item.children) {
      return item.children.some((child) => child.href === pathname)
    }
    return false
  })
  const hasChildren = item.children && item.children.length > 0
  const isActive = item.href === pathname

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex w-full items-center justify-between gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors",
            "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            level > 0 && "pl-6",
          )}
        >
          <span className="flex items-center gap-2">
            {item.icon}
            {item.title}
          </span>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
        {isOpen && (
          <div className="mt-1 space-y-1">
            {item.children?.map((child) => (
              <NavItemComponent key={child.title} item={child} level={level + 1} />
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href || "#"}
      className={cn(
        "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
        "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        level === 0 && "font-medium",
        level > 0 && "pl-9 text-muted-foreground hover:text-foreground",
        isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
      )}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-64 flex-col border-r border-sidebar-border bg-sidebar-bg lg:flex">
      <div className="flex h-16 items-center border-b border-sidebar-border px-4">
        <div className="flex items-center gap-2">
          <a href="https://luckiapps.com" target="_blank" rel="noopener noreferrer">
            <Image src="/logo.png" alt="LuckiApps Logo" width={36} height={36} className="rounded-md" />
          </a>
          <a
            href="https://docs.luckiapps.com"
            className="text-lg font-semibold text-foreground hover:text-muted-foreground transition-colors"
          >
            Docs
          </a>
        </div>
      </div>

      <div className="px-3 py-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full rounded-md border border-border bg-input px-9 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 text-xs text-muted-foreground">
            ⌘K
          </kbd>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
        {navigation.map((item) => (
          <NavItemComponent key={item.title} item={item} />
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <a
          href="https://luckiapps.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          luckiapps.com
        </a>
      </div>
    </aside>
  )
}
