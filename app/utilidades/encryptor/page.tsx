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

export default function EncryptorPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Encryptor"
        domain="encrypted.luckiapps.com"
        description="Encryptor es una utilidad de encriptación y desencriptación basada en cifrado César, con desplazamiento limitado a 5."
        purpose={[
          "Ofuscar mensajes simples para compartirlos en texto.",
          "Practicar/entender un método clásico de cifrado.",
        ]}
        features={[
          'Sección para encriptar: texto + desplazamiento + botón "Encriptar".',
          'Sección para desencriptar: texto + desplazamiento + botón "Desencriptar".',
          "Regla: desplazamiento ≤ 5.",
        ]}
        howToUse={[
          "Escribí el texto y elegí el desplazamiento.",
          'Tocá "Encriptar" o "Desencriptar".',
          "Copiá el resultado.",
        ]}
        privacy="El texto ingresado se procesa en el navegador para generar el resultado. No se almacena de forma automática."
      />
    </DocsLayout>
  )
}
