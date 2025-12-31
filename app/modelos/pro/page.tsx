import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function ProPage() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Pro"
        domain="pro.luckiapps.com"
        description="Una sección de servicios profesionales de LuckiApps actualmente en estado 'Próximamente'. Incluye tres bloques de servicios planificados."
        features={[
          "Diseño: logo, banner, anuncio, marca, estructura web, etc.",
          "Desarrollo: crear o mejorar un sitio web HTML5",
          "Ideas: ideas para proyectos",
        ]}
        privacy="Actualmente en desarrollo. Los detalles de privacidad se publicarán cuando los servicios estén activos."
      >
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Estado</h2>
          <div className="mt-4 bg-primary/10 border border-primary/30 rounded-lg p-4">
            <p className="text-muted-foreground">
              <span className="font-medium text-primary">Próximamente</span> — Los servicios Pro de LuckiApps están en
              desarrollo.
            </p>
          </div>
        </section>
      </ModelPageTemplate>
    </DocsLayout>
  )
}
