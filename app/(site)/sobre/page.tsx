import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { Cta } from "@/components/site/cta"
import { TrustBar } from "@/components/site/trust-bar"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Sobre",
  description: `${site.founder} veio da indústria e virou desenvolvedor. Entende o processo pelo lado de quem sofre com ele e constrói a solução que resolve.`,
  alternates: { canonical: "/sobre" },
}

export default function SobrePage() {
  return (
    <>
      <PageHeader
        kicker="Quem faz"
        title={
          <>
            Vim do chão de <span className="em-serif">fábrica</span>. Hoje eu escrevo o sistema.
          </>
        }
        description="Meu histórico é incomum: passei anos operando processo manual antes de aprender a construir o software que o elimina."
      />

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            {/* TODO(mateus): trocar pela foto real em /public/images/founder.jpg */}
            <div className="rounded-card border-line bg-cream-2 flex aspect-[16/10] w-full items-center justify-center border md:aspect-[21/9]">
              <span className="kicker text-muted-warm px-6 text-center">
                Foto do fundador (placeholder)
              </span>
            </div>
          </Reveal>

          <div className="measure mt-14 space-y-12">
            <Reveal>
              <h2 className="display-2 text-indigo max-w-[16ch]">
                Cinco anos vendo o problema de <span className="em-serif">perto</span>.
              </h2>
              <div className="body-lg mt-6 space-y-4">
                <p>
                  Trabalhei como analista industrial. Meu dia era ISO, Power BI, CNC e o que vinha
                  junto: planilha que ninguém confia, relatório refeito três vezes no mesmo mês,
                  conferência manual que segurava o turno inteiro esperando.
                </p>
                <p>
                  Aprendi ali uma coisa que não se aprende lendo documentação: o processo manual
                  raramente é burrice de quem opera. Ele existe porque{" "}
                  <span className="ink-indigo">ninguém nunca sentou pra resolver</span> — e cada
                  pessoa que entra na operação herda o remendo de quem veio antes.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="display-2 text-indigo max-w-[16ch]">
                Depois aprendi a <span className="em-serif">construir</span> o outro lado.
              </h2>
              <div className="body-lg mt-6 space-y-4">
                <p>
                  Virei desenvolvedor. Não de curso e portfólio: de sistema em produção, com usuário
                  real reclamando quando cai. Construí SaaS multi-tenant, ERP offline-first — coisas
                  que precisam funcionar no pico, na conexão ruim, no dia em que ninguém está olhando.
                </p>
                <p>
                  É aí que os dois lados se encontram. Quem só conhece a operação descreve o problema
                  mas depende de alguém pra resolver. Quem só programa entrega o que foi pedido, não o
                  que era preciso. Eu faço as duas pontas —{" "}
                  <span className="ink-orange">sem tradução no meio</span>, que é onde projeto
                  costuma morrer.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="display-2 text-indigo max-w-[16ch]">
                O que isso muda pra <span className="em-serif">você</span>.
              </h2>
              <div className="body-lg mt-6 space-y-4">
                <p>
                  Significa que eu não vendo ferramenta. Vendo o processo resolvido. Se dá pra
                  automatizar, automatizo. Se precisa de software próprio, construo. E se o seu caso
                  não justifica o investimento, eu falo — perder uma venda é mais barato que entregar
                  um projeto que não devia existir.
                </p>
                <p>
                  Também significa que a solução é feita pra durar. Sistema que quebra no primeiro
                  pico não é solução, é dívida com prazo.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-line border-t pt-8">
                <p className="font-disp text-indigo text-sm font-semibold">
                  {site.founder}
                  <span className="text-muted-warm font-medium"> · Fundador da {site.name}</span>
                </p>
                <div className="mt-6">
                  <TrustBar />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
