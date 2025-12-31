import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function FlappyBirdPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Flappy Bird"
        domain="flappy.luckiapps.com"
        description="Versión web estilo Flappy Bird con marcador de puntaje."
        objective="Pasar obstáculos sin chocar y sumar el mayor puntaje posible."
        howToPlay={[
          "Tocá o hacé clic para hacer volar al pájaro.",
          "Pasá entre los obstáculos sin chocar.",
          "Tu puntaje aumenta con cada obstáculo superado.",
        ]}
        features={["Marcador de puntaje ('Score')"]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
