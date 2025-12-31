import type React from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Shield, Megaphone } from "lucide-react"

interface UtilityPageProps {
  title: string
  domain: string
  description: string
  purpose: string[]
  features?: string[]
  howToUse: string[]
  privacy: string
  children?: React.ReactNode
}

export function UtilityPageTemplate({
  title,
  domain,
  description,
  purpose,
  features,
  howToUse,
  privacy,
  children,
}: UtilityPageProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <Link
        href="/utilidades"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 no-underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a Utilidades
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

      <section id="para-que-sirve" className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Para qué sirve</h2>
        <ul className="mt-4 space-y-2">
          {purpose.map((item, i) => (
            <li key={i} className="text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </section>

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

      <section id="como-se-usa" className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">Cómo se usa</h2>
        <ol className="mt-4 space-y-3">
          {howToUse.map((step, i) => (
            <li key={i} className="text-muted-foreground">
              <span className="font-medium text-foreground">{i + 1}.</span> {step}
            </li>
          ))}
        </ol>
      </section>

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
          Si esta utilidad incluye anuncios/promociones, son seleccionados y controlados por LuckiApps.
        </p>
      </section>
    </article>
  )
}
