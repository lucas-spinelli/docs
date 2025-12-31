import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function GloblePage() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Globle"
        description="Un modelo de globo terráqueo interactivo. Aparece listado como app/modelo en LuckiApps."
        features={["Globo terráqueo interactivo", "Visualización geográfica"]}
        privacy="No se recopilan datos personales."
      />
    </DocsLayout>
  )
}
