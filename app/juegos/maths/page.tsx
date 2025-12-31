import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function MathsPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Maths"
        domain="maths.luckiapps.com"
        description="Maths es un juego/experiencia educativa de matemáticas con ejercicios interactivos, seguimiento de progreso y un sistema de recompensas."
        objective="Practicar matemáticas mediante ejercicios y avanzar por progreso."
        howToPlay={[
          "Resolvé los ejercicios propuestos por la aplicación.",
          "Avanzá a medida que completás desafíos.",
          "Mejorá tu progreso y desbloqueá recompensas.",
        ]}
        privacy="Se documenta en detalle cuando la interfaz pública muestre explícitamente qué guarda y cómo presenta el progreso."
      />
    </DocsLayout>
  )
}
