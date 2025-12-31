import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function NinjaGamePage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Ninja Game"
        domain="ninja.luckiapps.com"
        description="Ninja Game es un juego de precisión donde estirás una 'vara' manteniendo el mouse presionado y luego avanzás; incluye reinicio."
        objective="Calcular la distancia correcta para avanzar sin fallar. Si acertás, progresás; si no, se reinicia."
        howToPlay={[
          "Mantener presionado el mouse para 'estirar' la vara ('Hold down the mouse to stretch out a stick').",
          "Soltar para ejecutar el movimiento.",
          "'RESTART' reinicia la partida.",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
