import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function TicTacToeBotPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="TicTacToe Bot"
        domain="xobot.luckiapps.com"
        description="Tateti contra bot, con marcador 'Yo vs Bot' y reinicio de partida."
        objective="Alinear tres en línea antes que el bot."
        howToPlay={[
          "Jugás tu turno tocando una celda.",
          "El bot responde automáticamente.",
          "El marcador se actualiza (Yo: X – Bot: Y).",
          "'Restart Game' reinicia la partida.",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
