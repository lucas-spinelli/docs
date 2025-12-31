import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function SnakePage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Snake"
        domain="snake.luckiapps.com"
        description="Versión estilo Nokia Snake con puntaje, vidas, pausa y controles por teclado."
        objective="Comer la comida para crecer sin chocar contra paredes o tu propio cuerpo."
        howToPlay={[
          "Presioná Espacio para iniciar ('PRESS SPACE TO START').",
          "Usá las flechas para mover la serpiente.",
          "Presioná Espacio para pausar ('SPACE TO PAUSE').",
          "La velocidad aumenta a medida que sube el puntaje.",
        ]}
        controls={[
          {
            platform: "Teclado",
            instructions: ["Flechas: mover la serpiente", "Espacio: iniciar y pausar"],
          },
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
