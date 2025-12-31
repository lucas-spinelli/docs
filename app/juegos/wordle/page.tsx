import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function WordlePage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Wordle"
        domain="wordle.luckiapps.com"
        description="Juego de palabra diaria 'La Palabra del Día', con teclado en pantalla y estadísticas."
        objective="Adivinar la palabra en intentos limitados (mecánica tipo Wordle)."
        howToPlay={[
          "Ingresá una palabra de 5 letras.",
          "Presioná 'ENVIAR' para confirmar.",
          "Las letras cambiarán de color: verde (correcta), amarillo (existe pero otra posición), gris (no existe).",
          "Tenés intentos limitados para adivinar la palabra.",
        ]}
        features={[
          "Teclado con letras (incluye Ñ)",
          "Botón ENVIAR y borrado",
          "Estadísticas: jugadas, victorias, racha actual y mejor racha",
          "Indicador de nivel",
        ]}
        privacy="Las estadísticas visibles implican guardado local de progreso/racha en el navegador."
      />
    </DocsLayout>
  )
}
