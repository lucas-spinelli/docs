import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function SuscribePage() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Suscribe"
        domain="pro.luckiapps.com"
        description="Punto de acceso a los servicios Pro de LuckiApps. Actualmente redirige a la página Pro."
        features={["Acceso a servicios Pro", "Redirección a pro.luckiapps.com"]}
        privacy="Comparte la misma política que Pro. Detalles completos disponibles cuando los servicios estén activos."
      >
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Nota</h2>
          <p className="text-muted-foreground mt-4">
            "Suscribe" está publicado como acceso directo pero actualmente redirige a la página Pro. No existe una
            página separada visible.
          </p>
        </section>
      </ModelPageTemplate>
    </DocsLayout>
  )
}
