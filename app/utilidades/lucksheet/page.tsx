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

export default function LuckSheetPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="LuckSheet"
        domain="sheet.luckiapps.com"
        description="LuckSheet es una planilla de cálculo con plantillas por categorías (General, Finance, Business, Productivity, HR, Education)."
        purpose={[
          "Presupuestos, seguimiento de ventas, planificación semanal, inventario, asistencia y notas, entre otros.",
        ]}
        features={[
          "Plantillas: Blank Spreadsheet, Monthly Budget, Sales Tracker, Weekly Schedule, Inventory Management, Attendance Tracker, Project Planner, Grade Calculator, Product Comparison.",
          "Filtros por categoría: All, General, Finance, Business, Productivity, HR, Education.",
        ]}
        howToUse={['Elegí una plantilla o "Blank Spreadsheet".', "Completá la información en la planilla."]}
        privacy="Una planilla normalmente requiere guardado/exportación. El detalle exacto se documenta cuando la app lo declare explícitamente."
      />
    </DocsLayout>
  )
}
