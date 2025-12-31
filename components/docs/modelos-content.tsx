import Link from "next/link"
import { Monitor, CreditCard, Globe, Cpu, Crown, ArrowRight } from "lucide-react"

const modelCategories = [
  {
    title: "Sistemas Operativos",
    description: "Simulaciones de interfaces de sistemas operativos populares",
    icon: <Monitor className="h-6 w-6" />,
    models: [
      { name: "Windows 11", href: "/modelos/windows-11", description: "Experiencia tipo Windows 11 en el navegador" },
      { name: "Mac", href: "/modelos/mac", description: "Simulación de interfaz macOS" },
    ],
  },
  {
    title: "Tarjetas y UI",
    description: "Modelos de tarjetas y componentes de interfaz",
    icon: <CreditCard className="h-6 w-6" />,
    models: [
      { name: "Card", href: "/modelos/card", description: "Formulario de tarjeta demo" },
      { name: "Card 2", href: "/modelos/card-2", description: "Tarjeta flipping UI demo" },
    ],
  },
  {
    title: "Mapas y Geografía",
    description: "Herramientas geográficas y mapas interactivos",
    icon: <Globe className="h-6 w-6" />,
    models: [
      { name: "Globle", href: "/modelos/globle", description: "Modelo de globo terráqueo" },
      { name: "Map", href: "/modelos/map", description: "Mapa interactivo" },
    ],
  },
  {
    title: "Servicios",
    description: "Servicios y suscripciones de LuckiApps",
    icon: <Crown className="h-6 w-6" />,
    models: [
      { name: "Pro", href: "/modelos/pro", description: "Servicios profesionales (Próximamente)" },
      { name: "Suscribe", href: "/modelos/suscribe", description: "Acceso a servicios Pro" },
    ],
  },
  {
    title: "3D y Benchmark",
    description: "Modelos 3D y pruebas de rendimiento",
    icon: <Cpu className="h-6 w-6" />,
    models: [{ name: "Block 3D", href: "/modelos/block-3d", description: "Benchmark 3D en el navegador" }],
  },
]

export function ModelosContent() {
  return (
    <article className="prose prose-invert max-w-none">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">Modelos Web</h1>
        <p className="text-lg text-muted-foreground mt-4">
          Simulaciones, demos y modelos interactivos que demuestran capacidades de diseño y desarrollo web.
        </p>
      </div>

      <div className="not-prose space-y-8">
        {modelCategories.map((category) => (
          <div key={category.title}>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                {category.icon}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">{category.title}</h2>
                <p className="text-sm text-muted-foreground">{category.description}</p>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {category.models.map((model) => (
                <Link
                  key={model.name}
                  href={model.href}
                  className="group flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80"
                >
                  <div>
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{model.description}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-lg border border-border bg-card/50 p-6">
        <h2 className="text-xl font-semibold text-foreground mb-2">Sobre los Modelos Web</h2>
        <p className="text-muted-foreground">
          Los modelos web de LuckiApps son demostraciones técnicas y simulaciones de interfaces. Algunos son puramente
          visuales para mostrar diseño y estructura, mientras que otros tienen funcionalidad interactiva. No ingreses
          datos personales reales en modelos de demostración como formularios de tarjeta.
        </p>
      </div>
    </article>
  )
}
