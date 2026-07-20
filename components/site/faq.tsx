import { Plus } from "lucide-react"
import { Reveal } from "./reveal"
import { faq } from "@/lib/site"

/**
 * Acordeão nativo em <details>/<summary>: acessível por padrão,
 * sem JS e sem depender de lib com visual próprio.
 */
export function Faq() {
  return (
    <section id="faq" className="border-line border-t px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <p className="kicker text-orange-ink">Dúvidas</p>
          <h2 className="display-2 text-indigo mt-4 max-w-[20ch]">
            O que perguntam <span className="em-serif">antes</span> de fechar.
          </h2>
        </Reveal>

        <div className="measure mt-12 md:mt-14">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 60}>
              <details className="group border-line border-t">
                <summary className="flex min-h-11 cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-disp text-indigo text-[15px] font-bold leading-snug tracking-[-0.02em] md:text-base">
                    {item.q}
                  </span>
                  <Plus
                    aria-hidden="true"
                    className="text-orange mt-0.5 h-5 w-5 shrink-0 transition-transform duration-[220ms] [transition-timing-function:var(--ease-editorial)] group-open:rotate-45"
                  />
                </summary>
                <p className="body-lg pb-7 pr-11 text-[16px]">{item.a}</p>
              </details>
            </Reveal>
          ))}
          <div className="border-line border-t" />
        </div>
      </div>
    </section>
  )
}
