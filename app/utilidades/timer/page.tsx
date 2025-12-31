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

export default function TimerPage() {
  return (
    <DocsLayout tocItems={tocItems}>
      <UtilityPageTemplate
        title="Timer"
        domain="timer.luckiapps.com"
        description="Timer es un temporizador con tres modos: personalizado, pausa corta y pausa larga. Incluye un panel de configuraciones para definir el tiempo en minutos por modo."
        purpose={[
          "Medir tiempo de estudio, tareas o descansos.",
          "Usar ciclos tipo trabajo/pausa (pausa corta y pausa larga).",
        ]}
        features={[
          "Contador principal (00:00).",
          'Botón "INICIAR".',
          'Selector de modo: "Personalizado", "Pausa corta", "Pausa larga".',
          'Panel "Configuraciones" con campos de minutos y botón "Aplicar".',
        ]}
        howToUse={[
          "Elegí el modo (personalizado / pausa corta / pausa larga).",
          'Entrá a "Configuraciones", ajustá los minutos y tocá "Aplicar".',
          'Tocá "INICIAR" para comenzar.',
        ]}
        privacy="Su configuración puede guardarse localmente para mantener los tiempos elegidos (cuando corresponde). Si en el futuro se especifica con exactitud, se documenta en esta misma página."
      />
    </DocsLayout>
  )
}
