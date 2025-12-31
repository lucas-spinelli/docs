import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function Windows11Page() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Windows 11"
        domain="windows.luckiapps.com"
        description="Un modelo web que simula una experiencia tipo Windows 11 dentro del navegador. Recrea la interfaz visual del sistema operativo de Microsoft con elementos interactivos."
        features={[
          "Menú con secciones: All, Apps, Documents, Web, More",
          "Secciones de contenido: Top Apps, Quick Searches, This Day In History, Markets Today, New Movies, Top News",
          "Indicadores de estado (Wifi, batería 87%, fecha)",
          "Ventanas simuladas: File Explorer (This PC, Downloads, Documents, Recycle Bin, OneDrive)",
          "Aplicaciones: Edge, Internet Explorer, Store, Notepad",
          "Consola con prompt C:\\Users\\luckiapps\\>",
        ]}
        privacy="En lo visible no aparecen formularios de datos personales obligatorios. Es una simulación visual sin recopilación de datos."
      />
    </DocsLayout>
  )
}
