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

export default function MiniNotesPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="MiniNotes"
        domain="mininotes.luckiapps.com"
        description="MiniNotes es un bloc de notas organizado por etiquetas de colores, con opción de modo oscuro y accesos internos a 'Privacidad' y 'Términos'."
        purpose={[
          "Crear notas rápidas y ordenarlas sin complicaciones.",
          "Separar notas por color/tema usando etiquetas.",
        ]}
        features={[
          'Sección "Todas las notas".',
          "Etiquetas: Rojo, Naranja, Amarillo, Verde, Turquesa, Azul, Púrpura, Rosa.",
          'Estado vacío ("No hay notas todavía").',
          'Botón "Nueva nota".',
          '"Modo oscuro".',
          'Acceso a "Privacidad" y "Términos".',
          'Opción "Editar perfil" (según interfaz).',
        ]}
        howToUse={[
          'Entrá y tocá "Nueva nota".',
          'Usá "Todas las notas" para ver el listado.',
          "Filtrá por etiqueta para ordenar tu contenido.",
        ]}
        privacy="Las notas suelen requerir guardado local del contenido para que no se pierda al cerrar. El método exacto de guardado se documenta cuando la app lo expone explícitamente."
      />
    </DocsLayout>
  )
}
