import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function Game2048Page() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="2048"
        domain="2048.luckiapps.com"
        description="Juego 2048 con botón 'New Game', puntaje y explicación integrada de reglas y controles."
        objective="Llegar a la ficha 2048 ('To win, get a 2048 tile')."
        howToPlay={[
          "Deslizás el tablero y las fichas se mueven.",
          "Dos fichas iguales se combinan y suman.",
          "Usá las flechas direccionales o swipe para mover.",
          "'New Game' para reiniciar.",
        ]}
        controls={[
          {
            platform: "PC",
            instructions: ["Flechas direccionales para mover"],
          },
          {
            platform: "Móvil",
            instructions: ["Swipe para mover las fichas"],
          },
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
