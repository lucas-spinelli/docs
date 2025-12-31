"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronRight, Book, Gamepad2, Monitor, Wrench } from "lucide-react"

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

function MobileNavItem({ item, onClose, pathname }: { item: NavItem; onClose: () => void; pathname: string }) {
  const isInSection = item.children?.some((child) => child.href === pathname)
  const [isOpen, setIsOpen] = useState(isInSection || false)
  const hasChildren = item.children && item.children.length > 0

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-3 text-base font-medium text-foreground"
        >
          <span className="flex items-center gap-3">
            {item.icon}
            {item.title}
          </span>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </button>
        {isOpen && (
          <div className="ml-7 space-y-1 border-l border-border pl-4">
            {item.children?.map((child) => (
              <Link
                key={child.title}
                href={child.href || "#"}
                onClick={onClose}
                className={`block rounded-md px-3 py-2 text-sm ${
                  pathname === child.href
                    ? "text-foreground font-medium bg-muted"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {child.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link
      href={item.href || "#"}
      onClick={onClose}
      className={`flex items-center gap-3 rounded-md px-3 py-3 text-base font-medium ${
        pathname === item.href ? "text-foreground bg-muted" : "text-foreground"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  )
}

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="lg:hidden">
      <div className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background px-4">
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
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-muted"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-background">
          <nav className="h-full overflow-y-auto p-4">
            {navigation.map((item) => (
              <MobileNavItem key={item.title} item={item} onClose={() => setIsOpen(false)} pathname={pathname} />
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
