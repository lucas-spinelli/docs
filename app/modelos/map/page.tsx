import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function MapPage() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Map"
        domain="map.luckiapps.com"
        description="Un mapa interactivo de LuckiApps. La aplicación está renderizada por JavaScript y es completamente interactiva."
        features={["Mapa interactivo", "Renderizado por JavaScript"]}
        privacy="No se recopilan datos personales de ubicación sin consentimiento explícito."
      />
    </DocsLayout>
  )
}
