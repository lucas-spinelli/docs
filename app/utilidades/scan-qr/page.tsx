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

export default function ScanQRPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Scan QR"
        domain="scanqr.luckiapps.com"
        description="Scan QR es un escáner de códigos QR desde la cámara, con estados de escaneo y acción para abrir el enlace detectado."
        purpose={["Abrir rápidamente enlaces o contenido codificado en un QR."]}
        features={[
          'Botón "Escanear QR".',
          'Estado "Escaneando…".',
          'Estado "Escaneo completado".',
          'Botón "Visitar enlace".',
        ]}
        howToUse={[
          'Tocá "Escanear QR" y otorgá permiso de cámara si el navegador lo pide.',
          "Apuntá al código QR.",
          'Tocá "Visitar enlace" cuando finalice.',
        ]}
        privacy="El escaneo utiliza la cámara del dispositivo. La utilidad puede mostrar el resultado (enlace) y permitir abrirlo. El comportamiento exacto de guardado (si existe) se documenta cuando la app lo declare explícitamente."
      />
    </DocsLayout>
  )
}
