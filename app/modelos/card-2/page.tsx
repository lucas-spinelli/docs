import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function Card2Page() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Card 2"
        domain="card.luckiapps.com/2"
        description="Un modelo de tarjeta 'flipping UI card' con datos de ejemplo. Demuestra diseño/estructura de una tarjeta UI para presentación, identidad, layout y copy."
        features={[
          "Tarjeta con efecto flip",
          "Diseño tipo 'Master Card'",
          "Número ejemplo: 0000 1111 2222 3333",
          "Nombre: Lucki Apps",
          "Valid Thru: 11/30",
          "Texto de soporte con teléfono y email",
          "CTA: Visit luckiapps.com",
        ]}
        privacy="Es un modelo visual con datos de ejemplo ficticios. No se recopilan datos."
      />
    </DocsLayout>
  )
}
