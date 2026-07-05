import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Bot,
  Plug,
  BarChart3,
  ShoppingCart,
  Lightbulb,
  ArrowRight,
  Layers,
  MessageSquare,
  TrendingUp,
  Cog,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Serviços | Mavi Company",
  description: "Estruturamos empresas com IA em três pilares: atendimento, vendas e operação. Conheça cada frente de trabalho.",
}

const pillars = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Atendimento com IA",
    description:
      "Atendimento, qualificação e suporte operando 24/7 com agentes de IA que entendem contexto.",
    services: [
      {
        icon: Bot,
        title: "Agentes de IA & Chatbots",
        href: "/servicos/agentes-ia",
        features: ["Chatbots WhatsApp", "IA Conversacional", "Qualificação de Leads", "Atendimento 24/7"],
      },
    ],
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Vendas",
    description:
      "Funil, CRM e canais integrados para vender com previsibilidade — não com esforço.",
    services: [
      {
        icon: Plug,
        title: "Integrações & APIs",
        href: "/servicos/integracoes",
        features: ["CRM/ERP", "WhatsApp", "Webhooks", "Pagamentos"],
      },
      {
        icon: ShoppingCart,
        title: "E-commerce & Funis Inteligentes",
        href: "/servicos/ecommerce",
        features: ["Lojas Virtuais", "Checkout Otimizado", "Funis", "Recuperação de Carrinho"],
      },
    ],
  },
  {
    number: "03",
    icon: Cog,
    title: "Operação e Processos",
    description:
      "Sistemas sob medida, automações e dashboards para remover o teto invisível dos processos manuais.",
    services: [
      {
        icon: Layers,
        title: "Automação de Processos",
        href: "/servicos/automacao",
        features: ["Workflows", "RPA", "Triggers", "Notificações"],
      },
      {
        icon: Code2,
        title: "Desenvolvimento Web & Sistemas",
        href: "/servicos/desenvolvimento",
        features: ["Aplicações Web", "APIs RESTful", "Dashboards", "Sistemas Internos"],
      },
      {
        icon: BarChart3,
        title: "Plataformas SaaS & Dashboards",
        href: "/servicos/saas",
        features: ["Multi-tenant", "Analytics", "Gestão de Usuários", "Billing"],
      },
      {
        icon: Lightbulb,
        title: "Consultoria Técnica & Arquitetura",
        href: "/servicos/consultoria",
        features: ["Arquitetura", "Code Review", "Mentoria", "Planejamento"],
      },
    ],
  },
]

export default function ServicosPage() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background">
        <Header />

        <PageHeader
          title="Estruturamos em três pilares."
          description="Não é cardápio de serviços. É um mapa de como sua empresa passa de processo manual para operação estruturada com IA."
          breadcrumb="Serviços"
        />

        {/* Pillars */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
              {pillars.map((pillar) => (
                <div key={pillar.number}>
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex flex-col items-center gap-3 shrink-0">
                      <span className="text-sm font-mono text-primary/60">{pillar.number}</span>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <pillar.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                        {pillar.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:pl-[72px]">
                    {pillar.services.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="group p-6 md:p-7 rounded-2xl border border-border/50 bg-card/20 hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-primary" />
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>

                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                          {service.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 text-xs rounded-full border border-border/50 bg-secondary/30 text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MaviControl */}
        <section className="py-16 md:py-24 bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-12 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-card/50 to-accent/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6">
                    <span className="text-primary text-xs md:text-sm font-medium tracking-[0.15em] uppercase">
                      Plataforma Interna
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    MaviControl
                  </h2>

                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    Plataforma proprietária para gestão de automações, monitoramento de agentes de IA e acompanhamento de métricas da operação estruturada. Clientes acompanham a evolução em tempo real.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contato">
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                        Conhecer o MaviControl
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/login">
                      <Button size="lg" variant="outline" className="bg-transparent">
                        Acessar Dashboard
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">
                Não sabe por qual pilar começar?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                O diagnóstico inicial olha os três pilares juntos e prioriza o que trava mais sua operação hoje.
              </p>
              <Link href="/contato">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Solicitar Diagnóstico
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </ModalProvider>
  )
}
