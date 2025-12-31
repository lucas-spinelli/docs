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

export default function ListNotesPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="ListNotes"
        domain="list.luckiapps.com"
        description="ListNotes es una lista tipo 'lista de compras' con acción rápida para agregar elementos."
        purpose={["Hacer listas simples (compras, tareas, pendientes) con el menor esfuerzo posible."]}
        features={['"Mi Lista de Compras" como título.', 'Acción "Añadir".']}
        howToUse={['Tocá "Añadir" y sumá ítems a la lista.']}
        privacy="Una lista necesita guardado local para persistir; el detalle exacto se documenta cuando la utilidad lo exponga explícitamente."
      />
    </DocsLayout>
  )
}
