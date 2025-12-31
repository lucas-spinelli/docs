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

export default function LuckiDolarPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="LuckiDolar"
        domain="dolar.luckiapps.com"
        description="LuckiDolar muestra cotizaciones de 'Mercados Argentinos' con filtros por tipo de cambio. Indica la fuente de datos y la frecuencia de actualización."
        purpose={["Consultar tipos de cambio desde el navegador con filtros rápidos."]}
        features={[
          "Filtros: Oficial, Blue, Bolsa, CCL, Tarjeta, Mayorista, Cripto, Euro, Real, Peso Chileno, Peso Uruguayo.",
          "Fuente: economy.com.ar, con actualizaciones cada 60 segundos (según la pantalla).",
        ]}
        howToUse={["Seleccioná el filtro de cotización que querés ver."]}
        privacy="La utilidad consume datos de cotización desde un proveedor indicado por la propia pantalla."
      />
    </DocsLayout>
  )
}
