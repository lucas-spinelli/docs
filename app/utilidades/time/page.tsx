import { DocsLayout } from "@/components/docs/docs-layout"
import { UtilityPageTemplate } from "@/components/docs/utility-page-template"

const tocItems = [
  { title: "Qué es", href: "#que-es", level: 2 },
  { title: "Para qué sirve", href: "#para-que-sirve", level: 2 },
  { title: "Cómo se usa", href: "#como-se-usa", level: 2 },
  { title: "Datos y privacidad", href: "#datos-privacidad", level: 2 },
  { title: "Anuncios", href: "#anuncios", level: 2 },
]

export default function TimePage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Time"
        domain="time.luckiapps.com"
        description="Time es un reloj digital para ver la hora de forma rápida. Incluye un modo de visualización llamado 'Clear Mode' y un acceso a previsiones del clima mediante un enlace externo."
        purpose={[
          "Consultar la hora sin distracciones.",
          "Usarlo como pantalla simple (por ejemplo, en una segunda pestaña o monitor).",
        ]}
        howToUse={["Abrí la utilidad 'Time'.", "Activá 'Clear Mode' para una visualización más limpia."]}
        privacy="Esta utilidad no muestra formularios de datos personales en su interfaz pública."
      />
    </DocsLayout>
  )
}
