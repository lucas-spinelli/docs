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

export default function UIBuilderPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="UI Builder"
        domain="ui.luckiapps.com"
        description="UI Builder es un constructor visual de interfaz que genera código React. Incluye preview, propiedades, templates, reset y un panel de 'Generated Code' con opciones de copiar o descargar."
        purpose={[
          "Armar pantallas rápidamente con componentes.",
          "Generar una base de UI en React sin escribir todo a mano.",
        ]}
        features={[
          "Barra: Preview, Properties, Templates, Reset.",
          "Panel de componentes.",
          "Gestión de columnas (horizontal/vertical).",
          "Panel de propiedades para editar.",
          '"Generated Code" con Copy y Download.',
        ]}
        howToUse={[
          "Creá una columna horizontal o vertical.",
          "Agregá componentes dentro de esa estructura.",
          "Ajustá propiedades.",
          "Copiá o descargá el código generado.",
        ]}
        privacy="El diseño y el código generado se gestionan en la sesión del navegador. Si hay guardado, se documenta cuando la app lo declare explícitamente."
      />
    </DocsLayout>
  )
}
