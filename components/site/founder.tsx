import Link from "next/link"
import { Reveal } from "./reveal"
import { site } from "@/lib/site"

export function Founder() {
  return (
    <section id="sobre" className="border-line border-t px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-14">
        <Reveal className="md:col-span-5">
          {/* TODO(mateus): trocar pela foto real em /public/images/founder.jpg */}
          <div className="rounded-card border-line bg-cream-2 flex aspect-[4/5] w-full max-w-sm items-center justify-center border">
            <span className="kicker text-muted-warm px-6 text-center">
              Foto do fundador
              <br />
              (placeholder)
            </span>
          </div>
        </Reveal>

        <div className="md:col-span-7">
          <Reveal>
            <p className="kicker text-orange-ink">Quem faz</p>
            <h2 className="display-2 text-indigo mt-4 max-w-[18ch]">
              Vim do chão de <span className="em-serif">fábrica</span>. Hoje eu escrevo o sistema.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="body-lg measure mt-6 space-y-4">
              <p>
                Passei anos como analista industrial — ISO, Power BI, CNC. Convivi com o processo
                manual pelo lado de quem sofre com ele: a planilha que ninguém confia, o relatório
                que some, a conferência que atrasa o turno inteiro.
              </p>
              <p>
                Depois virei desenvolvedor e passei a construir o outro lado: SaaS multi-tenant, ERP
                offline-first, sistema que aguenta produção de verdade. É uma combinação incomum —{" "}
                <span className="ink-indigo">entendo seu processo</span> e{" "}
                <span className="ink-orange">construo a solução</span>, sem intermediário traduzindo
                errado no meio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="font-disp text-indigo mt-7 text-sm font-semibold">
              {site.founder}
              <span className="text-muted-warm font-medium"> · Fundador</span>
            </p>
            <Link
              href="/sobre"
              className="text-orange-ink mt-4 inline-flex text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Ler a história completa
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
