import { ArrowRight } from "lucide-react"
import type { Service } from "@/lib/site"
import { whatsappUrl } from "@/lib/site"

/**
 * Tratamento de destaque para o carro-chefe da esteira.
 * Fundo indigo, brilho radial laranja no canto, seta em círculo.
 */
export function FeatureBlock({ service }: { service: Service }) {
  return (
    <a
      href={whatsappUrl(`Olá! Quero implementar uma solução de IA num processo da minha operação.`)}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-card group bg-indigo relative block overflow-hidden p-7 transition-all duration-[220ms] [transition-timing-function:var(--ease-editorial)] hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] md:p-10"
    >
      {/* Brilho radial laranja no canto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-70"
        style={{
          background: "radial-gradient(circle, rgba(239,90,42,.55) 0%, rgba(239,90,42,0) 68%)",
        }}
      />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
        <span className="font-disp shrink-0 text-sm font-semibold text-[#ffb697]">{service.n}</span>

        <div className="flex-1">
          <span className="kicker mb-2.5 inline-block rounded-pill border border-[#ffb697]/50 px-2.5 py-1 text-[10px] text-[#ffd9c6]">
            Carro-chefe
          </span>
          <h3 className="font-disp text-cream text-[clamp(22px,3vw,32px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Implementação de <span className="em-serif !text-[#ff9e78]">Solução</span>
          </h3>
          <p className="measure mt-4 text-[16px] font-medium leading-[1.55] text-[#c7c4e8]">
            {service.body}
          </p>
          <p className="font-disp mt-6 text-sm font-semibold tracking-[0.05em] text-[#ffb697]">
            {service.price}
          </p>
        </div>

        <span
          aria-hidden="true"
          className="bg-orange text-cream-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-[220ms] [transition-timing-function:var(--ease-editorial)] group-hover:translate-x-1"
        >
          <ArrowRight className="h-5 w-5" />
        </span>
      </div>
    </a>
  )
}
