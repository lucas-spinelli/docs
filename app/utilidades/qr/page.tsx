import { DocsLayout } from "@/components/docs/docs-layout"
import { UtilityPageTemplate } from "@/components/docs/utility-page-template"

const tocItems = [
  { title: "Qué es", href: "#que-es", level: 2 },
  { title: "Para qué sirve", href: "#para-que-sirve", level: 2 },
  { title: "Cómo se usa", href: "#como-se-usa", level: 2 },
  { title: "Datos y privacidad", href: "#datos-privacidad", level: 2 },
  { title: "Anuncios", href: "#anuncios", level: 2 },
]

export default function QRPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="QR"
        domain="luckiapps.com"
        description="QR es la utilidad de LuckiApps destinada a generar códigos QR. En la plataforma aparece como 'QR', y se describe como generador de códigos QR personalizados."
        purpose={[
          "Convertir enlaces o texto en un código QR para compartir rápidamente.",
          "Crear QRs para imprimir, enviar o usar en el celular.",
        ]}
        howToUse={[
          'Entrá a "QR" desde LuckiApps.',
          "Pegá el contenido (por ejemplo, una URL) y generá el código (según interfaz).",
        ]}
        privacy="El contenido ingresado se usa para generar el QR. Si la utilidad ofrece historial/guardado, se documenta explícitamente en esta página cuando la app lo muestre."
      />
    </DocsLayout>
  )
}
