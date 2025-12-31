import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function TicTacToePage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="TicTacToe"
        domain="xo.luckiapps.com"
        description="Tateti para dos jugadores en el mismo dispositivo, con reinicio y acceso a modo bot."
        objective="Alinear tres en línea."
        howToPlay={[
          "La pantalla indica el turno ('Player X's turn').",
          "'Reset Game' reinicia la partida.",
          "Hay un acceso a 'Play with a bot' para jugar contra la IA.",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
