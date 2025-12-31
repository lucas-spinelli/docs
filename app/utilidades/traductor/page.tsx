import { DocsLayout } from "@/components/docs/docs-layout"
import { UtilityPageTemplate } from "@/components/docs/utility-page-template"

const tocItems = [
  { title: "Qué es", href: "#que-es", level: 2 },
  { title: "Para qué sirve", href: "#para-que-sirve", level: 2 },
  { title: "Cómo se usa", href: "#como-se-usa", level: 2 },
  { title: "Datos y privacidad", href: "#datos-privacidad", level: 2 },
  { title: "Anuncios", href: "#anuncios", level: 2 },
]

export default function TraductorPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Traductor"
        domain="luckiapps.com"
        description="Traductor es la utilidad de LuckiApps orientada a traducir texto de un idioma a otro desde el navegador. Aparece como 'Traductor' en la sección de utilidades de la plataforma."
        purpose={[
          "Traducciones rápidas para estudio, trabajo o uso cotidiano.",
          "Revisión de frases y versiones alternativas en otro idioma.",
        ]}
        howToUse={[
          'Entrá a "Traductor" desde LuckiApps.',
          "Pegá o escribí el texto y elegí idiomas (cuando la interfaz lo muestre).",
        ]}
        privacy="El texto ingresado se usa únicamente para generar la traducción. Si en el futuro el Traductor declara si usa o no servicios externos, se documenta en esta página."
      />
    </DocsLayout>
  )
}
