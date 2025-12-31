import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function FinalSentencePage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Final Sentence"
        domain="final.luckiapps.com"
        description="Juego de tipeo de precisión con vidas y una mecánica de 'ruleta rusa' cuando acumulás errores."
        objective="Escribir frases con precisión perfecta: un error resta vida; con 3 errores se activa el sistema de ruleta rusa; sobrevivir agrega dificultad ('cada supervivencia añade una bala')."
        howToPlay={[
          "Empezás con 'Jugar'.",
          "Podés iniciar con ENTER o clic en 'Jugar'.",
          "Escribí la frase mostrada con precisión.",
          "Evitá errores para no activar la ruleta rusa.",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
