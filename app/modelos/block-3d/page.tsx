import { DocsLayout } from "@/components/docs/docs-layout"
import { ModelPageTemplate } from "@/components/docs/model-page-template"

export default function Block3DPage() {
  return (
    <DocsLayout>
      <ModelPageTemplate
        title="Block 3D"
        domain="benchmark.luckiapps.com"
        description="Un benchmark 3D que corre en el navegador. Está enlazado desde LuckiApps como 'Block 3D' y permite probar el rendimiento gráfico del dispositivo."
        features={[
          "Benchmark de rendimiento 3D",
          "Pruebas gráficas en el navegador",
          "Medición de capacidad del dispositivo",
        ]}
        privacy="No se recopilan datos personales. Los resultados del benchmark se muestran localmente."
      />
    </DocsLayout>
  )
}
