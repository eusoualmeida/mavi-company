"use client"

import { motion } from "framer-motion"
import { MessageSquare, TrendingUp, Cog } from "lucide-react"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const pillars = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Atendimento com IA",
    thesis:
      "Sua operação de atendimento não pode depender de escala humana. Agentes de IA respondem, qualificam e resolvem — 24 horas por dia.",
    items: [
      "Agentes de IA e chatbots no WhatsApp",
      "Qualificação automática de leads",
      "Atendimento pós-venda e suporte",
      "Roteamento inteligente para humanos",
    ],
  },
  {
    number: "02",
    icon: TrendingUp,
    title: "Vendas",
    thesis:
      "Vender previsivelmente é fruto de sistema, não de esforço. Integramos CRM, WhatsApp e funil para que nenhum lead esfrie por processo manual.",
    items: [
      "Automação de funil de vendas",
      "Integração de CRM, WhatsApp e e-mail",
      "Classificação e priorização de leads com IA",
      "E-commerce e checkouts otimizados",
    ],
  },
  {
    number: "03",
    icon: Cog,
    title: "Operação e Processos",
    thesis:
      "Cada processo manual é um teto invisível de crescimento. Automatizamos, integramos e construímos sistemas sob medida para remover esse teto.",
    items: [
      "Automação de processos (n8n, RPA)",
      "Integrações entre CRMs, ERPs e APIs",
      "Sistemas sob medida e dashboards",
      "Plataformas SaaS multi-tenant",
      "Consultoria técnica e arquitetura",
    ],
  },
]

export function Pillars() {
  return (
    <motion.section
      id="pilares"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-4">
            Como estruturamos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            Três pilares para estruturar sua empresa com IA
          </h2>
          <p className="text-lg text-muted-foreground">
            Não entregamos promessas.{" "}
            <span className="text-primary font-semibold">
              Entregamos sistemas funcionando.
            </span>
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar) => (
            <motion.article
              key={pillar.number}
              variants={cardVariants}
              className="group relative flex flex-col p-8 rounded-2xl border border-border/60 bg-card/20 hover:border-primary/50 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-mono text-primary/60">
                  {pillar.number}
                </span>
                <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <pillar.icon className="h-5 w-5 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                {pillar.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {pillar.thesis}
              </p>

              <ul className="space-y-3 mt-auto">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
