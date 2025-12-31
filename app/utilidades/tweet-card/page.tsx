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

export default function TweetCardPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Tweet Card"
        domain="x.luckiapps.com"
        description="Tweet Card es un generador de X-Cards para crear mockups realistas de publicaciones de X (Twitter) con vista previa en tiempo real y exportación."
        purpose={[
          "Diseñar publicaciones para presentaciones, artículos o redes.",
          "Preparar ejemplos visuales sin depender de capturas reales.",
        ]}
        features={[
          "Modos: Principal / Respuesta / Citar.",
          "Campos: Nombre, Usuario (@), Avatar URL, Contenido, Hora, Likes, RTs.",
          "Opción: Verificado (Blue Check).",
          "Exportación: PNG / JPG.",
          "Vista previa en tiempo real.",
        ]}
        howToUse={[
          "Elegí el modo (Principal / Respuesta / Citar).",
          "Completá los campos del tweet.",
          "Exportá en PNG o JPG.",
        ]}
        privacy="Lo que escribas se usa para generar la imagen del mockup. El guardado (si existe) se documenta cuando la app lo declare explícitamente."
      />
    </DocsLayout>
  )
}
