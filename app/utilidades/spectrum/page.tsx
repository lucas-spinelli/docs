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

export default function SpectrumPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Spectrum"
        domain="music.luckiapps.com"
        description="Spectrum es una utilidad de audio que permite usar el micrófono o subir un MP3, mostrando estados de inicialización y reproducción."
        purpose={[
          "Probar entrada de micrófono.",
          "Cargar un MP3 y visualizar/usar el audio dentro de la herramienta (según funciones activas).",
        ]}
        features={[
          'Acciones: "Use Mic" y "Upload MP3".',
          "Indicadores de estado: Audio, Initialized, Playing, Loop.",
          'Mensaje "No audio loaded" cuando no hay audio cargado.',
        ]}
        howToUse={['Elegí "Use Mic" o "Upload MP3".', "Verificá los indicadores (Initialized, Playing, etc.)."]}
        privacy="Micrófono: requiere permisos del navegador. MP3: el archivo se usa dentro de la app para reproducir/analizar según corresponda."
      />
    </DocsLayout>
  )
}
