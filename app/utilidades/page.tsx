import { DocsLayout } from "@/components/docs/docs-layout"
import { UtilidadesContent } from "@/components/docs/utilidades-content"

const tocItems = [
  { title: "Qué son las Utilidades", href: "#que-son", level: 2 },
  { title: "Productividad", href: "#productividad", level: 2 },
  { title: "Notas y Documentos", href: "#notas-documentos", level: 2 },
  { title: "Multimedia", href: "#multimedia", level: 2 },
  { title: "Herramientas", href: "#herramientas", level: 2 },
  { title: "Desarrollo", href: "#desarrollo", level: 2 },
]

export default function UtilidadesPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilidadesContent />
    </DocsLayout>
  )
}
