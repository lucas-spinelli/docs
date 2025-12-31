import { DocsLayout } from "@/components/docs/docs-layout"
import { UtilityPageTemplate } from "@/components/docs/utility-page-template"

const tocItems = [
  { title: "Qué es", href: "#que-es", level: 2 },
  { title: "Para qué sirve", href: "#para-que-sirve", level: 2 },
  { title: "Qué incluye", href: "#que-incluye", level: 2 },
  { title: "Cómo se usa", href: "#como-se-usa", level: 2 },
  { title: "Datos y privacidad", href: "#datos-privacidad", level: 2 },
  { title: "Anuncios", href: "#anuncios", level: 2 },
]

export default function CodeEditorPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Code Editor"
        domain="code.luckiapps.com"
        description="Code Editor es un editor web para escribir HTML con vista previa en vivo. Incluye panel de archivos (por defecto index.html) y 'Live Preview' con auto-refresh."
        purpose={["Probar ideas rápidas en HTML.", "Crear prototipos pequeños con vista previa inmediata."]}
        features={[
          'Acciones "New" y "Upload".',
          'Panel "Files" con index.html.',
          "Área de edición.",
          'Sección "Live Preview".',
          'Nota: "CSS and JavaScript files will be automatically included".',
          "Auto-refresh para la vista previa.",
        ]}
        howToUse={[
          "Editá index.html.",
          'Mirá el resultado en "Live Preview".',
          'Usá "Upload" si la app permite cargar archivos (según interfaz).',
        ]}
        privacy="El código se ejecuta/visualiza en el navegador. Si existe guardado de archivos, se documenta cuando la app lo declare explícitamente."
      />
    </DocsLayout>
  )
}
