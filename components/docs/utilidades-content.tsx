import type React from "react"
import Link from "next/link"
import {
  Clock,
  Timer,
  StickyNote,
  FileText,
  ListTodo,
  Paintbrush,
  FileSpreadsheet,
  Presentation,
  Twitter,
  Languages,
  QrCode,
  ScanLine,
  Box,
  DollarSign,
  Calculator,
  Video,
  Mic,
  Music,
  Code,
  Layout,
  Lock,
} from "lucide-react"

const utilidades = {
  productividad: [
    {
      name: "Time",
      href: "/utilidades/time",
      icon: Clock,
      domain: "time.luckiapps.com",
      desc: "Reloj digital con Clear Mode",
    },
    {
      name: "Timer",
      href: "/utilidades/timer",
      icon: Timer,
      domain: "timer.luckiapps.com",
      desc: "Temporizador con modos personalizables",
    },
    {
      name: "Calculadora",
      href: "/utilidades/calculadora",
      icon: Calculator,
      domain: "calculator.luckiapps.com",
      desc: "Calculadora con modo científico",
    },
    {
      name: "Traductor",
      href: "/utilidades/traductor",
      icon: Languages,
      domain: "luckiapps.com",
      desc: "Traductor de idiomas",
    },
    {
      name: "LuckiDolar",
      href: "/utilidades/luckidolar",
      icon: DollarSign,
      domain: "dolar.luckiapps.com",
      desc: "Cotizaciones de mercados argentinos",
    },
  ],
  notas: [
    {
      name: "MiniNotes",
      href: "/utilidades/mininotes",
      icon: StickyNote,
      domain: "mininotes.luckiapps.com",
      desc: "Bloc de notas con etiquetas de colores",
    },
    {
      name: "Apple Notes",
      href: "/utilidades/apple-notes",
      icon: FileText,
      domain: "inotes.luckiapps.com",
      desc: "Notas con interfaz minimalista",
    },
    {
      name: "ListNotes",
      href: "/utilidades/listnotes",
      icon: ListTodo,
      domain: "list.luckiapps.com",
      desc: "Lista de compras y tareas",
    },
    {
      name: "Paint Notes",
      href: "/utilidades/paint-notes",
      icon: Paintbrush,
      domain: "paint.luckiapps.com",
      desc: "Editor de dibujo en canvas",
    },
    {
      name: "LuckDocs",
      href: "/utilidades/luckdocs",
      icon: FileText,
      domain: "docs.luckiapps.com",
      desc: "Procesador de texto con plantillas",
    },
    {
      name: "LuckSheet",
      href: "/utilidades/lucksheet",
      icon: FileSpreadsheet,
      domain: "sheet.luckiapps.com",
      desc: "Planilla de cálculo",
    },
    {
      name: "LuckSlides",
      href: "/utilidades/luckslides",
      icon: Presentation,
      domain: "slides.luckiapps.com",
      desc: "Creador de presentaciones",
    },
  ],
  multimedia: [
    {
      name: "Video Editor",
      href: "/utilidades/video-editor",
      icon: Video,
      domain: "video.luckiapps.com",
      desc: "Editor de video web",
    },
    {
      name: "Audio Recorder",
      href: "/utilidades/audio-recorder",
      icon: Mic,
      domain: "rec.luckiapps.com",
      desc: "Grabador de audio",
    },
    {
      name: "Spectrum",
      href: "/utilidades/spectrum",
      icon: Music,
      domain: "music.luckiapps.com",
      desc: "Utilidad de audio y micrófono",
    },
    {
      name: "3D Viewer",
      href: "/utilidades/3d-viewer",
      icon: Box,
      domain: "3d.luckiapps.com",
      desc: "Visor de modelos 3D",
    },
  ],
  herramientas: [
    {
      name: "Tweet Card",
      href: "/utilidades/tweet-card",
      icon: Twitter,
      domain: "x.luckiapps.com",
      desc: "Generador de mockups de X/Twitter",
    },
    { name: "QR", href: "/utilidades/qr", icon: QrCode, domain: "luckiapps.com", desc: "Generador de códigos QR" },
    {
      name: "Scan QR",
      href: "/utilidades/scan-qr",
      icon: ScanLine,
      domain: "scanqr.luckiapps.com",
      desc: "Escáner de códigos QR",
    },
    {
      name: "Encryptor",
      href: "/utilidades/encryptor",
      icon: Lock,
      domain: "encrypted.luckiapps.com",
      desc: "Cifrado César",
    },
  ],
  desarrollo: [
    {
      name: "Code Editor",
      href: "/utilidades/code-editor",
      icon: Code,
      domain: "code.luckiapps.com",
      desc: "Editor HTML con live preview",
    },
    {
      name: "UI Builder",
      href: "/utilidades/ui-builder",
      icon: Layout,
      domain: "ui.luckiapps.com",
      desc: "Constructor visual de interfaces React",
    },
  ],
}

function UtilityCard({
  name,
  href,
  icon: Icon,
  domain,
  desc,
}: { name: string; href: string; icon: React.ElementType; domain: string; desc: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80"
    >
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-xs text-muted-foreground">{domain}</p>
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </Link>
  )
}

export function UtilidadesContent() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">Utilidades</h1>
      <p className="text-lg text-muted-foreground mt-4">
        Colección de herramientas web para productividad, notas, multimedia y desarrollo.
      </p>

      <section id="que-son" className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Qué son las Utilidades</h2>
        <p className="text-muted-foreground mt-4">
          Las Utilidades de LuckiApps son aplicaciones web diseñadas para resolver tareas específicas de forma rápida y
          sin instalaciones. Desde temporizadores hasta editores de código, cada utilidad está pensada para funcionar
          directamente en tu navegador.
        </p>
      </section>

      <section id="productividad" className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Productividad</h2>
        <p className="text-muted-foreground mt-4 mb-6">Herramientas para gestionar tu tiempo y tareas diarias.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {utilidades.productividad.map((u) => (
            <UtilityCard key={u.name} {...u} />
          ))}
        </div>
      </section>

      <section id="notas-documentos" className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Notas y Documentos</h2>
        <p className="text-muted-foreground mt-4 mb-6">Aplicaciones para crear, organizar y editar contenido.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {utilidades.notas.map((u) => (
            <UtilityCard key={u.name} {...u} />
          ))}
        </div>
      </section>

      <section id="multimedia" className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Multimedia</h2>
        <p className="text-muted-foreground mt-4 mb-6">Herramientas para video, audio y contenido 3D.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {utilidades.multimedia.map((u) => (
            <UtilityCard key={u.name} {...u} />
          ))}
        </div>
      </section>

      <section id="herramientas" className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Herramientas</h2>
        <p className="text-muted-foreground mt-4 mb-6">Utilidades variadas para tareas específicas.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {utilidades.herramientas.map((u) => (
            <UtilityCard key={u.name} {...u} />
          ))}
        </div>
      </section>

      <section id="desarrollo" className="mt-12">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Desarrollo</h2>
        <p className="text-muted-foreground mt-4 mb-6">Herramientas para programadores y diseñadores.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {utilidades.desarrollo.map((u) => (
            <UtilityCard key={u.name} {...u} />
          ))}
        </div>
      </section>
    </article>
  )
}
