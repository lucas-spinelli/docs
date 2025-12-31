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

export default function PaintNotesPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Paint Notes"
        domain="paint.luckiapps.com"
        description="Paint Notes es un editor de dibujo en HTML5 Canvas con herramientas de trazo, formas, texto y acciones de edición (guardar/limpiar/deshacer/rehacer)."
        purpose={["Dibujar bocetos rápidos.", "Tomar notas visuales.", "Crear imágenes simples desde el navegador."]}
        features={[
          "Herramientas: Lápiz, Pincel, Borrador, Línea, Rectángulo, Círculo, Texto, Relleno y Spray.",
          "Controles: color personalizado, grosor del trazo, opacidad.",
          "Acciones: Guardar, Limpiar, Deshacer, Rehacer.",
          "Tamaño de lienzo indicado: 800×600px.",
        ]}
        howToUse={[
          "Elegí una herramienta.",
          "Ajustá color, grosor y opacidad.",
          "Dibujá en el lienzo.",
          "Guardá la imagen o limpiá para empezar de nuevo.",
        ]}
        privacy="El dibujo existe en la sesión del navegador hasta que se guarde o se cierre. Si se guarda, el archivo queda en el dispositivo del usuario."
      />
    </DocsLayout>
  )
}
