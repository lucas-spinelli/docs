import { DocsLayout } from "@/components/docs/docs-layout"
import { GamePageTemplate } from "@/components/docs/game-page-template"

export default function PacmanPage() {
  return (
    <DocsLayout>
      <GamePageTemplate
        title="Pac-Man"
        domain="pacman.luckiapps.com"
        description="Versión web de Pac-Man incluida como juego en LuckiApps. El juego depende de canvas; si el navegador no lo soporta, aparece un mensaje de 'canvas no soportado'."
        objective="Comer todos los puntos evitando a los fantasmas."
        howToPlay={[
          "Usá las flechas para mover a Pac-Man.",
          "Comé todos los puntos del laberinto.",
          "Evitá a los fantasmas o comelos cuando estén vulnerables.",
        ]}
        privacy="No se observa ingreso obligatorio de datos personales en la interfaz pública."
      />
    </DocsLayout>
  )
}
