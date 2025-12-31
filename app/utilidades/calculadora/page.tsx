import { DocsLayout } from "@/components/docs/docs-layout"
import { UtilityPageTemplate } from "@/components/docs/utility-page-template"

const tocItems = [
  { title: "Qué es", href: "#que-es", level: 2 },
  { title: "Para qué sirve", href: "#para-que-sirve", level: 2 },
  { title: "Modos", href: "#modos", level: 2 },
  { title: "Cómo se usa", href: "#como-se-usa", level: 2 },
  { title: "Datos y privacidad", href: "#datos-privacidad", level: 2 },
  { title: "Anuncios", href: "#anuncios", level: 2 },
]

export default function CalculadoraPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Calculadora"
        domain="calculator.luckiapps.com"
        description="Calculadora es la utilidad de cálculo de LuckiApps. Incluye tres temas/modos de interfaz: Normal, Apple y Científica (según la experiencia dentro de la plataforma)."
        purpose={[
          "Operaciones rápidas del día a día.",
          "Cálculo en modo científico cuando necesitás funciones avanzadas.",
        ]}
        howToUse={["Elegí el tema (Normal / Apple / Científica).", "Realizá la operación con los botones en pantalla."]}
        privacy="La calculadora procesa operaciones en el navegador. Si guarda historial o preferencias de tema, se documenta cuando la app lo declare explícitamente."
      >
        <section id="modos" className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Modos</h2>
          <ul className="mt-4 space-y-3">
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Normal:</span> interfaz directa para operaciones comunes.
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Apple:</span> estilo visual inspirado en calculadoras tipo
              iOS.
            </li>
            <li className="text-muted-foreground">
              <span className="font-medium text-foreground">Científica:</span> agrega funciones científicas además de
              las básicas (el conjunto exacto se documenta según lo que muestre la app).
            </li>
          </ul>
        </section>
      </UtilityPageTemplate>
    </DocsLayout>
  )
}
