"use client"

import { motion } from "framer-motion"
import {
  TrendingDown,
  Scale,
  ShieldCheck,
  Target,
  Database,
  Clock,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const benefits = [
  {
    icon: TrendingDown,
    title: "Redução de custos operacionais",
    description:
      "Sistemas bem desenvolvidos e automações inteligentes reduzem retrabalho, erros e custos operacionais.",
  },
  {
    icon: Scale,
    title: "Escala sem aumentar equipe",
    description:
      "Tecnologia sob medida permite crescer a operação sem depender de contratações proporcionais.",
  },
  {
    icon: ShieldCheck,
    title: "Menos erros e mais confiabilidade",
    description:
      "Processos digitais, integrações e automações garantem consistência, segurança e previsibilidade.",
  },
  {
    icon: Target,
    title: "Processos claros e estruturados",
    description:
      "Fluxos bem definidos com sistemas e automações tornam a operação previsível e fácil de gerenciar.",
  },
  {
    icon: Database,
    title: "Controle total e dados centralizados",
    description:
      "Dashboards, integrações e dados em tempo real para decisões estratégicas baseadas em fatos.",
  },
  {
    icon: Clock,
    title: "Operação rodando 24/7",
    description:
      "Sistemas e automações funcionando continuamente, sem gargalos, pausas ou dependência humana.",
  },
];

export function Benefits() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Por que automatizar com a MaviCompany?
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:rotate-6 transition-all duration-500">
                <benefit.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
