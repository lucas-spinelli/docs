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

export default function Viewer3DPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="3D Viewer"
        domain="3d.luckiapps.com"
        description="3D Viewer es un visor 3D en el navegador para importar modelos y visualizarlos con controles de cámara. Indica WebGL habilitado y renderer Three.js."
        purpose={["Visualizar modelos 3D rápidamente.", "Revisar un archivo 3D sin instalar software."]}
        features={[
          "Importación por archivo o drag & drop.",
          "Formatos aceptados: .glb, .gltf, .obj, .fbx.",
          "View Mode, Camera View, Animation Speed, Show Hotspots.",
          "Atajos: R (reset), F (fullscreen), S (screenshot), mouse orbit, wheel zoom.",
        ]}
        howToUse={[
          '"Choose File" o arrastrá y soltá el modelo.',
          "Navegá con mouse/touch.",
          "Usá atajos para reset/fullscreen/captura.",
        ]}
        privacy="El archivo que importás se procesa en tu navegador para visualizarlo. Si en el futuro se declara un modo de guardado o compartir, se documenta en esta página."
      />
    </DocsLayout>
  )
}
