import { Clock } from "lucide-react"
import { ActionButton } from "./button"
import { TrustBar } from "./trust-bar"
import { Reveal } from "./reveal"
import { whatsappUrl } from "@/lib/site"

export function Hero() {
  return (
    <section className="px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-40">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <p className="kicker text-orange-ink flex items-center gap-2">
            <span className="bg-orange inline-block h-1.5 w-1.5 rounded-full" aria-hidden="true" />
            IA e automação para operações
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display-1 text-indigo mt-6 max-w-[16ch]">
            Seu processo manual <span className="em-serif">drena</span> tempo e dinheiro. Eu resolvo
            e deixo <span className="em-serif">rodando</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="body-lg measure mt-7">
            Construo a solução de IA que resolve o processo e entrego funcionando dentro da sua
            operação: deploy feito, equipe treinada, <span className="ink-orange">escopo fechado</span>.
            Sem promessa vaga e sem projeto que nunca termina.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ActionButton href={whatsappUrl()} external>
              Falar sobre meu processo
            </ActionButton>
            <ActionButton href="/#servicos" variant="secondary" arrow={false}>
              Ver como eu trabalho
            </ActionButton>
          </div>
          <p className="text-muted-warm mt-4 flex items-center gap-2 text-[13px] font-medium">
            <Clock className="text-orange-ink h-3.5 w-3.5" aria-hidden="true" />
            Resposta em até 24h · sem compromisso
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 md:mt-14">
            <TrustBar />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
