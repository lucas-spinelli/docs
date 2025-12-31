import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function MacPage() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Mac"
        domain="mac.luckiapps.com"
        description="Un modelo web que simula la interfaz de macOS en el navegador. La aplicación está renderizada completamente por JavaScript/canvas."
        features={[
          "Simulación de interfaz macOS",
          "Renderizado en tiempo real por JavaScript",
          "Experiencia visual del sistema operativo de Apple",
        ]}
        privacy="Es una simulación visual. No se recopilan datos personales."
      />
    </DocsLayout>
  )
}
