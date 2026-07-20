import type { Metadata } from "next"
import { Mail, MessageCircle, Instagram } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { Reveal } from "@/components/site/reveal"
import { ActionButton } from "@/components/site/button"
import { site, whatsappUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale direto comigo sobre o processo manual que está travando sua operação. WhatsApp, e-mail ou Instagram.",
  alternates: { canonical: "/contato" },
}

const channels = [
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: site.whatsappDisplay,
    href: whatsappUrl(),
    note: "Resposta mais rápida. É por aqui que a conversa costuma começar.",
    external: true,
  },
  {
    Icon: Mail,
    label: "E-mail",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Bom pra escopo detalhado, anexo e proposta formal.",
    external: false,
  },
  {
    Icon: Instagram,
    label: "Instagram",
    value: "@mavicompanybr",
    href: site.instagram,
    note: "Bastidores do que estou construindo.",
    external: true,
  },
]

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        kicker="Contato"
        title={
          <>
            Me conta o que está <span className="em-serif">travando</span>.
          </>
        }
        description="Não tem formulário longo nem funil de qualificação. Você manda mensagem, eu respondo, e em 20 minutos de conversa a gente descobre se dá pra resolver."
      />

      <section className="px-5 pb-20 md:px-8 md:pb-28">
        <div className="mx-auto max-w-[1120px]">
          <Reveal>
            <div className="mb-14">
              <ActionButton href={whatsappUrl()} external>
                Falar sobre meu processo
              </ActionButton>
            </div>
          </Reveal>

          <div className="measure">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 80}>
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="rounded-row group border-line hover:bg-peach flex items-start gap-5 border-t px-2 py-7 transition-colors duration-[220ms] [transition-timing-function:var(--ease-editorial)] md:px-4"
                >
                  <span className="rounded-pill border-line bg-cream-2 flex h-11 w-11 shrink-0 items-center justify-center border">
                    <channel.Icon className="text-orange h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1">
                    <span className="kicker text-muted-warm block">{channel.label}</span>
                    <span className="font-disp text-indigo mt-1.5 block text-[15px] font-bold tracking-[-0.02em]">
                      {channel.value}
                    </span>
                    <span className="body-lg mt-2 block text-[15px]">{channel.note}</span>
                  </span>
                </a>
              </Reveal>
            ))}
            <div className="border-line border-t" />
          </div>
        </div>
      </section>
    </>
  )
}
