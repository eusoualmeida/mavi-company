import { ArrowRight } from "lucide-react"
import { Reveal } from "./reveal"
import { FeatureBlock } from "./feature-block"
import { services, whatsappUrl, type Service } from "@/lib/site"

function IndexRow({ service }: { service: Service }) {
  return (
    <a
      href={whatsappUrl(`Olá! Tenho interesse em "${service.title}".`)}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-row group border-line grid grid-cols-[auto_1fr_auto] items-start gap-4 border-t px-2 py-7 transition-colors duration-[220ms] [transition-timing-function:var(--ease-editorial)] hover:bg-peach md:gap-8 md:px-5 md:py-9"
    >
      <span className="font-disp text-muted-warm group-hover:text-orange pt-1 text-sm font-semibold transition-colors duration-[220ms]">
        {service.n}
      </span>

      <div>
        {service.badge && (
          <span className="rounded-pill bg-orange text-cream-2 mb-2 inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em]">
            {service.badge}
          </span>
        )}
        <h3 className="display-3 text-indigo">{service.title}</h3>
        <p className="body-lg measure mt-2.5 text-[16px]">{service.body}</p>
        <p className="font-disp text-orange-ink mt-4 text-xs font-semibold tracking-[0.05em]">
          {service.price}
        </p>
      </div>

      <ArrowRight
        aria-hidden="true"
        className="text-muted-warm group-hover:text-orange mt-1 h-5 w-5 shrink-0 transition-all duration-[220ms] [transition-timing-function:var(--ease-editorial)] group-hover:translate-x-1"
      />
    </a>
  )
}

export function ServiceIndex() {
  return (
    <section id="servicos" className="border-line border-t px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <p className="kicker text-orange-ink">A esteira</p>
          <h2 className="display-2 text-indigo mt-4 max-w-[22ch]">
            Entre por baixo. Suba quando fizer <span className="em-serif">sentido</span>.
          </h2>
          <p className="body-lg measure mt-5">
            Quatro formas de trabalhar comigo, do risco baixo ao projeto completo. Você começa onde
            dói e sobe só se o retorno justificar — <span className="ink-orange">nunca antes</span>.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          {services.map((service, i) => (
            <Reveal key={service.n} delay={i * 80} className={service.featured ? "my-4" : ""}>
              {service.featured ? (
                <FeatureBlock service={service} />
              ) : (
                <IndexRow service={service} />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
