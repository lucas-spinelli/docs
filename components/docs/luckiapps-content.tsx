import {
  ExternalLink,
  Layers,
  Gamepad2,
  Monitor,
  Wrench,
  FileText,
  Shield,
  Megaphone,
  Palette,
  GraduationCap,
  RefreshCw,
  Code2,
} from "lucide-react"

export function LuckiAppsContent() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">LuckiApps Documentation</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Documentación oficial de la plataforma LuckiApps. Un espacio profesional para entender qué ofrece la
          plataforma y cómo funciona cada proyecto.
        </p>
      </header>

      {/* Qué es LuckiApps */}
      <section id="que-es-luckiapps" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <Layers className="h-6 w-6 text-accent" />
          Qué es LuckiApps
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          LuckiApps es una plataforma de aplicaciones web para usar directamente en el navegador. Reúne utilidades,
          juegos y modelos web en un mismo lugar, con una experiencia simple y rápida.
        </p>
      </section>

      {/* Qué es esta documentación */}
      <section id="que-es-esta-documentacion" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <FileText className="h-6 w-6 text-accent" />
          Qué es esta documentación
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          docs.luckiapps.com es el espacio oficial donde LuckiApps documenta, de forma clara y profesional:
        </p>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
            <span>Qué ofrece cada proyecto.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
            <span>Cómo funciona a nivel producto (lógica general y comportamiento).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
            <span>Qué incluye (pantallas, opciones, límites).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
            <span>Cómo se manejan datos, privacidad, anuncios y feedback en cada caso.</span>
          </li>
        </ul>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Nota:</strong> No es un repositorio de código ni un tutorial. Es
            documentación orientada a transparencia y uso.
          </p>
        </div>
      </section>

      {/* Cómo está organizado */}
      <section id="organizacion" className="space-y-6">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <Layers className="h-6 w-6 text-accent" />
          Cómo está organizado LuckiApps
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          LuckiApps se organiza en tres categorías principales, tal como se ve en la plataforma: utilidades, juegos y
          modelos web.
        </p>

        {/* Utilidades */}
        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Wrench className="h-5 w-5 text-accent" />
            Utilidades
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Aplicaciones prácticas y creativas. Entre las utilidades disponibles se incluyen reloj y temporizador,
            distintas variantes de notas, documentos, planillas y presentaciones, generador de tarjeta para X,
            traductor, QR y escaneo QR, visor 3D, dólar, calculadora, editor de video, grabador de audio, visualizador
            de audio, editor de código, constructor de interfaz, cifrado y herramientas de tarjetas/mapa, entre otras.
          </p>
        </div>

        {/* Juegos */}
        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Gamepad2 className="h-5 w-5 text-accent" />
            Juegos
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Juegos web clásicos y originales. En LuckiApps hay, entre otros, ContraGame, Block Game, Block 3D, Ninja
            Game, TicTacToe (con y sin bot), Snake, Cubo Rubik, 2048, Pac-Man, Flappy Bird, Chess, Sudoku, Wordle,
            Bingo, Memory Match, Block Breaker y Final Sentence.
          </p>
        </div>

        {/* Modelos web */}
        <div className="rounded-lg border border-border bg-card p-6 space-y-3">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground">
            <Monitor className="h-5 w-5 text-accent" />
            Modelos web
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Experiencias de interfaz y modelos visuales como Windows 11 y Mac.
          </p>
        </div>
      </section>

      {/* Cómo se documenta cada proyecto */}
      <section id="documentacion-proyectos" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <FileText className="h-6 w-6 text-accent" />
          Cómo se documenta cada proyecto
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Cada utilidad, juego o modelo web cuenta (o contará) con su propia página de documentación. En esa página se
          describe:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h4 className="font-semibold text-foreground">Funcionamiento</h4>
            <p className="text-sm text-muted-foreground">
              Qué hace, cómo se usa y qué comportamiento se espera (reglas, estados, rondas, tiempos, puntajes si
              aplica, flujo general).
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h4 className="font-semibold text-foreground">Estructura de experiencia</h4>
            <p className="text-sm text-muted-foreground">
              Qué pantallas o secciones tiene, qué opciones ofrece y qué límites existen.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h4 className="font-semibold text-foreground">Datos y privacidad</h4>
            <p className="text-sm text-muted-foreground">
              Qué se guarda o procesa para que funcione y dónde sucede, explicado de forma entendible.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h4 className="font-semibold text-foreground">Anuncios y promociones</h4>
            <p className="text-sm text-muted-foreground">
              Si el proyecto incluye anuncios o promociones, cómo se integran y qué impacto tienen.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2 sm:col-span-2">
            <h4 className="font-semibold text-foreground">Feedback</h4>
            <p className="text-sm text-muted-foreground">Cómo reportar errores y cómo enviar sugerencias.</p>
          </div>
        </div>
      </section>

      {/* Anuncios y promociones */}
      <section id="anuncios" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <Megaphone className="h-6 w-6 text-accent" />
          Anuncios y promociones en LuckiApps
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          LuckiApps puede mostrar anuncios o promociones dentro de algunos proyectos.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Los anuncios son propios de la plataforma: LuckiApps decide qué anuncios colocar, dónde aparecen y cómo se
          muestran. El objetivo es sostener el desarrollo y mantener el ecosistema en crecimiento.
        </p>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">
            Cuando un proyecto incluye anuncios o promociones, se informa en su documentación correspondiente.
          </p>
        </div>
      </section>

      {/* Personalización */}
      <section id="personalizacion" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <Palette className="h-6 w-6 text-accent" />
          Personalización de la plataforma
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          LuckiApps incluye opciones de personalización visual (colores de fondo, botones, acentos y fuentes del
          título), disponibles desde la propia interfaz.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Cuando una personalización afecte de forma relevante a un proyecto, se documenta en su página.
        </p>
      </section>

      {/* Uso educativo */}
      <section id="uso-educativo" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <GraduationCap className="h-6 w-6 text-accent" />
          Uso educativo
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          LuckiApps puede utilizarse en contextos educativos o recreativos. Esta documentación está escrita para ser
          clara y útil también para familias y docentes que quieran entender cómo funciona cada experiencia antes de
          usarla.
        </p>
      </section>

      {/* Actualizaciones */}
      <section id="actualizaciones" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <RefreshCw className="h-6 w-6 text-accent" />
          Actualizaciones
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          LuckiApps evoluciona con el tiempo. En la documentación se publican cambios importantes cuando corresponda:
          mejoras, correcciones y ajustes de comportamiento que impacten al usuario.
        </p>
      </section>

      {/* Relación con dev.luckiapps.com */}
      <section id="relacion-dev" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <Code2 className="h-6 w-6 text-accent" />
          Relación con dev.luckiapps.com
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h4 className="font-semibold text-foreground flex items-center gap-2">docs.luckiapps.com</h4>
            <p className="text-sm text-muted-foreground">
              Documenta el producto: funcionamiento, transparencia, anuncios y criterios de cada proyecto.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4 space-y-2">
            <h4 className="font-semibold text-foreground flex items-center gap-2">dev.luckiapps.com</h4>
            <p className="text-sm text-muted-foreground">
              Es el espacio para aprender sobre lógica, diseño y estructura de aplicaciones similares a las de
              LuckiApps, sin publicar el código fuente de los proyectos.
            </p>
          </div>
        </div>
      </section>

      {/* Resumen */}
      <section id="resumen" className="space-y-4">
        <h2 className="flex items-center gap-3 text-2xl font-semibold text-foreground border-b border-border pb-3">
          <Shield className="h-6 w-6 text-accent" />
          Resumen
        </h2>
        <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
          <p className="text-foreground leading-relaxed">
            <strong>docs.luckiapps.com</strong> es la documentación oficial de LuckiApps: un espacio profesional para
            entender qué ofrece la plataforma y cómo funciona cada proyecto, con transparencia sobre experiencia, datos,
            anuncios y feedback.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8 mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} LuckiApps. Todos los derechos reservados.</p>
          <a
            href="https://luckiapps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            Visitar LuckiApps
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </footer>
    </div>
  )
}
