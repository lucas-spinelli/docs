import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function ChessPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Chess"
        domain="chess.luckiapps.com"
        description="Ajedrez web con tablero completo, botón 'New Game', estado de partida y registro de movimientos."
        objective="Jugar ajedrez estándar (matear al rey rival)."
        howToPlay={[
          "Hacé clic en una pieza para seleccionarla.",
          "Hacé clic en una casilla válida para moverla.",
          "El turno alterna entre blancas y negras.",
          "'New Game' para iniciar una nueva partida.",
        ]}
        features={[
          "'New Game' para reiniciar",
          "'Game Status' con turno ('White's turn') y estado ('Game in progress')",
          "'Move History' con historial de movimientos",
          "Piezas capturadas visibles",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
