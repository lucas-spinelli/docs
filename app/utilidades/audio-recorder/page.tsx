import { DocsLayout } from "@/components/docs/docs-layout"
import { UtilityPageTemplate } from "@/components/docs/utility-page-template"

const tocItems = [
  { title: "Qué es", href: "#que-es", level: 2 },
  { title: "Para qué sirve", href: "#para-que-sirve", level: 2 },
  { title: "Cómo se usa", href: "#como-se-usa", level: 2 },
  { title: "Datos y privacidad", href: "#datos-privacidad", level: 2 },
  { title: "Anuncios", href: "#anuncios", level: 2 },
]

export default function AudioRecorderPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Audio Recorder"
        domain="rec.luckiapps.com"
        description="Audio Recorder aparece como una utilidad de LuckiApps para grabación de audio."
        purpose={[
          "Grabar audio desde el micrófono del dispositivo (por ejemplo, voz, ideas rápidas o notas de audio).",
        ]}
        howToUse={[
          'Abrí "Audio Recorder" desde LuckiApps.',
          "Permití el acceso al micrófono si el navegador lo solicita.",
          "Iniciá/detené la grabación según los controles que muestre la app.",
        ]}
        privacy="La grabación utiliza el micrófono del dispositivo. Si la app permite descargar el audio, el archivo queda en el dispositivo del usuario. El detalle exacto de guardado se documenta cuando la interfaz lo muestre explícitamente."
      />
    </DocsLayout>
  )
}
