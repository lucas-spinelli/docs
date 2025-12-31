import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function CuboRubikPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Cubo Rubik"
        domain="cubo.luckiapps.com"
        description="Juego/entorno de cubo 3x3x3 con cronómetro y estadísticas de tiempos (best, worst, promedios)."
        objective="Resolver el cubo en el menor tiempo posible y mejorar tus marcas."
        howToPlay={[
          "'Double tap to start' para iniciar.",
          "Resolvé el cubo rotando las caras.",
          "Al completar muestra 'Complete!' y se registra el tiempo.",
        ]}
        features={["Total de resoluciones", "Mejor tiempo (best)", "Peor tiempo (worst)", "Promedios (5/12/25)"]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
