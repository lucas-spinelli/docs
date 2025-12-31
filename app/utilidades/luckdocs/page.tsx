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

export default function LuckDocsPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="LuckDocs"
        domain="docs.luckiapps.com"
        description="LuckDocs es un procesador de texto con creación por plantillas y listado de documentos recientes."
        purpose={[
          "Crear documentos rápidos sin instalar nada.",
          "Empezar con plantillas comunes (CV, carta, informe, etc.).",
        ]}
        features={[
          "Plantillas: Documento en blanco, Currículum, Carta formal, Informe, Folleto, Factura, Propuesta, Boletín.",
          'Sección "Documentos recientes" con estado vacío cuando no hay contenido.',
        ]}
        howToUse={[
          "Elegí una plantilla para comenzar.",
          "Editá el documento.",
          'Volvé a abrirlo desde "Documentos recientes" (si fue guardado por la app).',
        ]}
        privacy="Un editor de documentos necesita algún tipo de guardado (local y/o exportación). El detalle exacto se documenta en cuanto la app lo exponga explícitamente en su interfaz."
      />
    </DocsLayout>
  )
}
