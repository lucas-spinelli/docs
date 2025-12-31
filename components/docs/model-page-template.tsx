import type React from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Shield, Megaphone, Monitor, AlertTriangle } from "lucide-react"

interface ModelPageProps {
  title: string
  domain?: string
  description: string
  features?: string[]
  privacy: string
  warning?: string
  children?: React.ReactNode
}

export function ModelPageTemplate({
  title,
  domain,
  description,
  features,
  privacy,
  warning,
  children,
}: ModelPageProps) {
  return (
    <article className="prose prose-invert max-w-none">
      <Link
        href="/modelos"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 no-underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a Modelos
      </Link>

      <div className="flex flex-col gap-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-0">{title}</h1>
        {domain && (
          <a
            href={`https://${domain}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary hover:underline text-sm no-underline"
          >
            {domain}
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>

      <section id="que-es" className="mt-8">
        <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2 flex items-center gap-2">
          <Monitor className="h-5 w-5" />
          Qué es
        </h2>
        <p className="text-muted-foreground mt-4">{description}</p>
      </section>

      {warning && (
        <section id="advertencia" className="mt-10">
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-yellow-500 font-medium mb-1">Nota importante</h3>
              <p className="text-muted-foreground text-sm">{warning}</p>
            </div>
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
