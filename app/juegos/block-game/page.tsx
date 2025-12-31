import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function BlockGamePage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Block Game"
        domain="block.luckiapps.com"
        description="Block Game es un juego arcade con menú de inicio, modo 'Casual Mode', pausa y pantalla de fin de partida."
        objective="Lograr la mayor puntuación posible y mejorar tu rendimiento entre partidas."
        howToPlay={[
          "Iniciás desde 'PLAY GAME'.",
          "Podés pausar y reanudar con 'RESUME'.",
          "Al terminar aparece 'Game Over' con tu puntaje y opción de 'PLAY AGAIN'.",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
