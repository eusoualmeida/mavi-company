import { ActionButton } from "./button"
import { Reveal } from "./reveal"
import { site, whatsappUrl } from "@/lib/site"

export function Cta() {
  return (
    <section className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <div className="rounded-card bg-indigo relative overflow-hidden px-7 py-14 md:px-14 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full opacity-60"
              style={{
                background: "radial-gradient(circle, rgba(239,90,42,.5) 0%, rgba(239,90,42,0) 70%)",
              }}
            />

            <div className="relative">
              <h2 className="font-disp text-cream max-w-[18ch] text-[clamp(26px,4vw,40px)] font-bold leading-[1.1] tracking-[-0.02em]">
                Me conta qual processo está <span className="em-serif">travando</span>.
              </h2>
              <p className="text-cream/70 measure mt-5 text-[17px] font-medium leading-[1.55]">
                Uma conversa de 20 minutos costuma bastar pra saber se dá pra automatizar, quanto
                custaria e se vale a pena. Se não valer, eu digo — e não cobro por isso.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ActionButton href={whatsappUrl()} external variant="onIndigo">
                  Falar no WhatsApp
                </ActionButton>
                <a
                  href={`mailto:${site.email}`}
                  className="text-cream/70 hover:text-cream inline-flex min-h-11 items-center text-sm font-medium transition-colors"
                >
                  ou {site.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
