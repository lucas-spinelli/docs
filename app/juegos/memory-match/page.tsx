import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function MemoryMatchPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Memory Match"
        domain="luckiapps.com"
        description="Memory Match figura como juego en LuckiApps. Juego clásico de memoria donde encontrás pares de cartas iguales."
        objective="Encontrar pares de cartas iguales recordando posiciones."
        howToPlay={[
          "Se muestran cartas boca abajo.",
          "Tocás dos cartas para revelarlas.",
          "Si coinciden, quedan descubiertas; si no, se vuelven a ocultar.",
          "Ganás cuando emparejás todas.",
        ]}
        privacy="No se documenta guardado específico hasta que la URL pública del juego esté expuesta desde la plataforma."
      />
    </DocsLayout>
  )
}
