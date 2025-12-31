import Link from "next/link"
import { ExternalLink, Gamepad2 } from "lucide-react"

const games = [
  {
    category: "Arcade",
    items: [
      {
        name: "Block Game",
        href: "/juegos/block-game",
        domain: "block.luckiapps.com",
        desc: "Juego arcade con modo casual y sistema de puntuación",
      },
      {
        name: "Block 3D",
        href: "/juegos/block-3d",
        domain: "benchmark.luckiapps.com",
        desc: "Experiencia 3D vinculada a la categoría de juegos",
      },
      {
        name: "Ninja Game",
        href: "/juegos/ninja-game",
        domain: "ninja.luckiapps.com",
        desc: "Juego de precisión donde estirás una vara para avanzar",
      },
      {
        name: "Snake",
        href: "/juegos/snake",
        domain: "snake.luckiapps.com",
        desc: "Versión estilo Nokia Snake con vidas y velocidad progresiva",
      },
      {
        name: "Pac-Man",
        href: "/juegos/pacman",
        domain: "pacman.luckiapps.com",
        desc: "Versión web del clásico Pac-Man",
      },
      {
        name: "Flappy Bird",
        href: "/juegos/flappy-bird",
        domain: "flappy.luckiapps.com",
        desc: "Versión web estilo Flappy Bird con marcador",
      },
      {
        name: "Block Breaker",
        href: "/juegos/block-breaker",
        domain: "breaker.luckiapps.com",
        desc: "Juego arcade de romper bloques con paleta",
      },
    ],
  },
  {
    category: "Puzzle y Estrategia",
    items: [
      {
        name: "2048",
        href: "/juegos/2048",
        domain: "2048.luckiapps.com",
        desc: "El clásico juego de combinar fichas hasta llegar a 2048",
      },
      {
        name: "Cubo Rubik",
        href: "/juegos/cubo-rubik",
        domain: "cubo.luckiapps.com",
        desc: "Cubo 3x3x3 con cronómetro y estadísticas",
      },
      {
        name: "Chess",
        href: "/juegos/chess",
        domain: "chess.luckiapps.com",
        desc: "Ajedrez web con historial de movimientos",
      },
      {
        name: "Sudoku",
        href: "/juegos/sudoku",
        domain: "sudoku.luckiapps.com",
        desc: "Sudoku con dificultad, temporizador y ayudas",
      },
      {
        name: "Memory Match",
        href: "/juegos/memory-match",
        domain: "luckiapps.com",
        desc: "Encuentra pares de cartas iguales",
      },
    ],
  },
  {
    category: "Clásicos",
    items: [
      {
        name: "TicTacToe",
        href: "/juegos/tictactoe",
        domain: "xo.luckiapps.com",
        desc: "Tateti para dos jugadores en el mismo dispositivo",
      },
      {
        name: "TicTacToe Bot",
        href: "/juegos/tictactoe-bot",
        domain: "xobot.luckiapps.com",
        desc: "Tateti contra bot con marcador",
      },
      {
        name: "Bingo",
        href: "/juegos/bingo",
        domain: "bingo.luckiapps.com",
        desc: "Bingo con selección de modo de victoria",
      },
    ],
  },
  {
    category: "Palabras y Educación",
    items: [
      {
        name: "Wordle",
        href: "/juegos/wordle",
        domain: "wordle.luckiapps.com",
        desc: "La Palabra del Día con estadísticas",
      },
      {
        name: "Maths",
        href: "/juegos/maths",
        domain: "maths.luckiapps.com",
        desc: "Juego educativo de matemáticas con ejercicios",
      },
      {
        name: "Final Sentence",
        href: "/juegos/final-sentence",
        domain: "final.luckiapps.com",
        desc: "Juego de tipeo con mecánica de ruleta rusa",
      },
    ],
  },
]

export function JuegosContent() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">Juegos</h1>
        <p className="text-lg text-muted-foreground">
          Colección de juegos web de LuckiApps. Desde clásicos arcade hasta puzzles y juegos educativos.
        </p>
      </div>

      <div className="not-prose space-y-10">
        {games.map((category) => (
          <section key={category.category}>
            <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Gamepad2 className="h-5 w-5 text-primary" />
              {category.category}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {category.items.map((game) => (
                <Link
                  key={game.name}
                  href={game.href}
                  className="group rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {game.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{game.desc}</p>
                  <span className="mt-2 inline-block text-xs text-muted-foreground/70">{game.domain}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  )
}
