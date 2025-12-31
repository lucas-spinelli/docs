import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function CardPage() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Card"
        domain="card.luckiapps.com"
        description="Una página con un formulario de tarjeta que incluye campos para Card Number, Card Holder, Exp. Date y CCV. Es un modelo/UI demo para demostrar diseño de formularios de pago."
        features={["Campo Card Number", "Campo Card Holder", "Campo Exp. Date", "Campo CCV"]}
        warning="Este es un modelo/UI demo. NO ingreses datos de tarjetas reales. No hay un flujo de pago real conectado."
        privacy="Es un modelo de demostración visual. No se procesan ni almacenan datos de tarjetas."
      />
    </DocsLayout>
  )
}
