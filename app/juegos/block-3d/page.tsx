import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function Block3DPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Block 3D"
        domain="benchmark.luckiapps.com"
        description="Block 3D figura como juego en LuckiApps y actualmente enlaza a benchmark.luckiapps.com."
        objective="Experiencia 3D vinculada a la categoría de juegos (documentación funcional completa disponible cuando el contenido esté visible públicamente)."
        howToPlay={[
          "Accedé al juego desde benchmark.luckiapps.com.",
          "Interactuá con la experiencia 3D según los controles disponibles.",
        ]}
        privacy="Se documenta en detalle cuando la pantalla pública exponga controles y comportamiento."
      />
    </DocsLayout>
  )
}
