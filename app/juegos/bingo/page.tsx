import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function BingoPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Bingo"
        domain="bingo.luckiapps.com"
        description="Bingo con selección de modo de juego y elección de condición de victoria."
        objective="Completar la condición de victoria seleccionada (línea o tablero completo)."
        howToPlay={["Elegís el modo de victoria.", "Jugás marcando números hasta cumplir la condición seleccionada."]}
        features={[
          "Bingo Tradicional: ganar completando una línea, columna o diagonal",
          "Tablero Completo: ganar completando todos los números del tablero",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
