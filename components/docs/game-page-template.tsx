import type React from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Shield, Megaphone, Gamepad2 } from "lucide-react"

interface GamePageProps {
  title: string
  domain: string
  description: string
  objective: string
  howToPlay: string[]
  features?: string[]
  controls?: { platform: string; instructions: string[] }[]
  privacy: string
  children?: React.ReactNode
}

export function GamePageTemplate({
  title,
  domain,
  description,
  objective,
  howToPlay,
  features,
  controls,
  privacy,
  children,
}: GamePageProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <Link
        href="/juegos"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 no-underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a Juegos
      </Link>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-0">{title}</h1>
        <a
          href={`https://${domain}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary hover:underline text-sm no-underline"
        >
          {domain}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <section id="que-es" className="mt-8">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Qué es</h2>
        <p className="text-muted-foreground mt-4">{description}</p>
      </section>

      <section id="objetivo" className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
          <Gamepad2 className="h-5 w-5" />
          Objetivo
        </h2>
        <p className="text-muted-foreground mt-4">{objective}</p>
      </section>

      <section id="como-se-juega" className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Cómo se juega</h2>
        <ol className="mt-4 space-y-3">
          {howToPlay.map((step, i) => (
            <li key={i} className="text-muted-foreground">
              <span className="font-medium text-foreground">{i + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </section>

      {controls && controls.length > 0 && (
        <section id="controles" className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Controles</h2>
          <div className="mt-4 space-y-4">
            {controls.map((control, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium text-foreground">{control.platform}</h3>
                <ul className="mt-2 space-y-1">
                  {control.instructions.map((instruction, j) => (
                    <li key={j} className="text-muted-foreground">
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {features && features.length > 0 && (
        <section id="que-incluye" className="mt-10">
          <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Qué incluye</h2>
          <ul className="mt-4 space-y-2">
            {features.map((item, i) => (
              <li key={i} className="text-muted-foreground">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {children}

      <section id="datos-privacidad" className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Datos y privacidad
        </h2>
        <p className="text-muted-foreground mt-4">{privacy}</p>
      </section>

      <section id="anuncios" className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
          <Megaphone className="h-5 w-5" />
          Anuncios y promociones
        </h2>
        <p className="text-muted-foreground mt-4">
          Si se muestran anuncios, son propios de LuckiApps y LuckiApps decide qué se muestra.
        </p>
      </section>
    </article>
  )
}
