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

export default function VideoEditorPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Video Editor"
        domain="video.luckiapps.com"
        description="Video Editor es una utilidad para cargar un archivo de video desde el navegador y trabajar sobre él. Indica formatos compatibles y un límite máximo de tamaño."
        purpose={[
          "Edición básica desde web (según capacidades de la herramienta).",
          "Preparar un video sin instalar software adicional.",
        ]}
        features={[
          'Carga por drag & drop o botón "Choose Video File".',
          "Formatos: MP4, WebM, OGG, MOV.",
          "Límite indicado: máximo 100MB.",
        ]}
        howToUse={[
          'Arrastrá y soltá un archivo o elegí "Choose Video File".',
          "Continuá con las opciones de edición que muestre la interfaz.",
        ]}
        privacy="El archivo seleccionado se usa para la edición. Si existe exportación/descarga, el resultado queda en el dispositivo del usuario."
      />
    </DocsLayout>
  )
}
