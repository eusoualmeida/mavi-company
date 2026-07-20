import { Reveal } from "./reveal"
import { steps } from "@/lib/site"

export function Steps() {
  return (
    <section id="como-funciona" className="border-line border-t px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1120px]">
        <Reveal>
          <p className="kicker text-orange-ink">Como funciona</p>
          <h2 className="display-2 text-indigo mt-4 max-w-[20ch]">
            Três etapas, sem <span className="em-serif">mistério</span>.
          </h2>
        </Reveal>

        <ol className="mt-12 grid grid-cols-1 gap-px md:mt-16 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <li className="border-line h-full border-t pt-6 md:border-t-0 md:border-l md:pl-7 md:pt-0">
                <span className="font-disp text-orange text-sm font-semibold">{step.n}</span>
                <h3 className="display-3 text-indigo mt-3">{step.title}</h3>
                <p className="body-lg mt-3 text-[16px]">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
