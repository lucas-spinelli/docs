import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function SudokuPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Sudoku"
        domain="sudoku.luckiapps.com"
        description="Sudoku con selector de dificultad, temporizador, tema, ajustes y ayudas (notas, hint, undo/redo)."
        objective="Completar el tablero cumpliendo reglas de Sudoku."
        howToPlay={[
          "Seleccioná una celda vacía.",
          "Ingresá un número del 1 al 9.",
          "Completá el tablero sin repetir números en filas, columnas o cuadros 3x3.",
        ]}
        features={[
          "Selector de dificultad (Easy, Medium, Hard)",
          "Cronómetro",
          "'Auto solve' para resolver automáticamente",
          "'New game' para nueva partida",
          "'Toggle theme' para cambiar tema",
          "'Settings' para ajustes",
          "Teclado 1–9",
          "Herramientas: Notes, Clear, Undo, Redo, Hint",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
