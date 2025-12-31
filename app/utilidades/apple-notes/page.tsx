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

export default function AppleNotesPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Apple Notes"
        domain="inotes.luckiapps.com"
        description="Apple Notes es una utilidad de notas con un flujo simple: lista de notas y creación de notas nuevas."
        purpose={["Tomar notas rápidas con una interfaz minimalista."]}
        features={["Contador de notas.", 'Estado "No notes found".', 'Botón "Create New Note".']}
        howToUse={['Tocá "Create New Note".', "Seleccioná una nota del listado para verla/editarla."]}
        privacy="El contenido de notas normalmente se guarda en el navegador para persistencia. El detalle exacto se documenta cuando la app lo declare explícitamente."
      />
    </DocsLayout>
  )
}
