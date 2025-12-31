import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function BlockBreakerPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Block Breaker"
        domain="breaker.luckiapps.com"
        description="Juego arcade de romper bloques con paleta, vidas, nivel y controles para PC y móvil."
        objective="Destruye todos los bloques para ganar."
        howToPlay={[
          "Hacé clic en 'Jugar' o presioná Espacio para iniciar.",
          "Mové la paleta para rebotar la pelota.",
          "Destruí todos los bloques para avanzar de nivel.",
          "'Reiniciar' para volver a empezar.",
        ]}
        controls={[
          {
            platform: "PC",
            instructions: ["Flechas o A/D para mover la paleta", "Espacio para pausar"],
          },
          {
            platform: "Móvil",
            instructions: ["Arrastrar o tocar para mover la paleta"],
          },
        ]}
        features={["Puntos, vidas y nivel (arranca con 3 vidas y nivel 1)", "Botones 'Jugar' y 'Reiniciar'"]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
