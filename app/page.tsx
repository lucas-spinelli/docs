import { DocsLayout } from "@/components/docs/docs-layout"
import { LuckiAppsContent } from "@/components/docs/luckiapps-content"

const tocItems = [
  { title: "Qué es LuckiApps", href: "#que-es-luckiapps", level: 2 },
  { title: "Qué es esta documentación", href: "#que-es-esta-documentacion", level: 2 },
  { title: "Organización", href: "#organizacion", level: 2 },
  { title: "Documentación por proyecto", href: "#documentacion-proyectos", level: 2 },
  { title: "Anuncios", href: "#anuncios", level: 2 },
  { title: "Personalización", href: "#personalizacion", level: 2 },
  { title: "Uso educativo", href: "#uso-educativo", level: 2 },
  { title: "Actualizaciones", href: "#actualizaciones", level: 2 },
  { title: "Relación con dev", href: "#relacion-dev", level: 2 },
  { title: "Resumen", href: "#resumen", level: 2 },
]

export default function DocsPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <LuckiAppsContent />
    </DocsLayout>
  )
}
