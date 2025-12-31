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

export default function LuckSlidesPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="LuckSlides"
        domain="slides.luckiapps.com"
        description="LuckSlides es un creador de presentaciones con layouts para empezar rápido."
        purpose={["Crear presentaciones desde el navegador con un flujo similar a herramientas conocidas."]}
        features={[
          "Barra de menú (File, Edit, View, Insert, Slide, Help).",
          'Estado "No slides yet".',
          'Botón "Add Slide".',
          "Layouts: Blank, Title Slide, Title & Content, Two Columns, Image, Comparison, Section Header, Big Number, Quote.",
          'Opción "New Blank Slide".',
        ]}
        howToUse={['Tocá "Add Slide".', "Elegí un layout para crear la primera diapositiva.", "Editá el contenido."]}
        privacy="Una presentación normalmente requiere guardado/exportación. El detalle exacto se documenta cuando la app lo declare explícitamente."
      />
    </DocsLayout>
  )
}
