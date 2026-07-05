import type { Metadata } from "next"
import { QualificationForm } from "./qualification-form"

export const metadata: Metadata = {
  title: "Aplicação | MaviCompany",
  description:
    "Processo seletivo para estruturação de empresas com IA — atendimento, vendas e processos.",
  // Landing de captação privada (link da bio do Instagram) — não deve indexar.
  robots: { index: false, follow: false },
}

export default function AplicarPage() {
  return (
    <main
      className="min-h-screen font-sans antialiased"
      style={{ backgroundColor: "#0A0A0F", color: "#F5F5F7" }}
    >
      <QualificationForm />
    </main>
  )
}
