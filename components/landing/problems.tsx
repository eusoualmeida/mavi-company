"use client"

import { motion } from "framer-motion"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}
import {
  AlertCircle,
  Unplug,
  MessageSquareOff,
  BarChart3,
  Users,
  UserX,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const problems = [
  {
    icon: MessageSquareOff,
    text: "Atendimento que não escala",
    description:
      "Cliente esperando resposta, lead esfriando, time preso em atendimento repetitivo. Sem IA no atendimento, cada novo cliente é um novo custo.",
  },
  {
    icon: BarChart3,
    text: "Vendas sem previsibilidade",
    description:
      "Funil sem automação, CRM desatualizado, follow-up manual. Vender vira sorte — não sistema. O crescimento fica travado no esforço individual.",
  },
  {
    icon: AlertCircle,
    text: "Processos manuais e frágeis",
    description:
      "Operação feita em planilhas e ferramentas soltas gera retrabalho, erros e um teto invisível de crescimento sustentado por horas humanas.",
  },
  {
    icon: Unplug,
    text: "Sistemas que não conversam",
    description:
      "CRM, ERP, WhatsApp, e-commerce, pagamento — cada um em seu silo. Dados fragmentados impedem decisão rápida e criam trabalho duplicado.",
  },
  {
    icon: Users,
    text: "Crescer significa contratar",
    description:
      "Sem sistemas e automações, a única alavanca de crescimento é aumentar equipe. Custo, complexidade e risco sobem junto — margem cai.",
  },
  {
    icon: UserX,
    text: "Operação depende de pessoas, não de sistema",
    description:
      "Se uma pessoa-chave falta, a operação para. Sem tecnologia estruturando os processos, o negócio fica refém de rotinas informais e memória de time.",
  },
];

export function Problems() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 md:py-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-4">
            O problema
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
            Seu negócio está travado por processos manuais?
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-16"
        >
          {problems.map((problem) => (
            <motion.div
              key={problem.text}
              variants={itemVariants}
              className="group p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 hover:bg-card/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 group-hover:bg-red-500/20 transition-colors shrink-0">
                  <problem.icon className="h-5 w-5 text-red-400" />
                </div>
                <div>
                  <p className="text-foreground font-medium leading-relaxed">
                    {problem.text}
                  </p>
                  {problem.description && (
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {problem.description}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
          <div className="p-6 md:p-8 rounded-xl border border-primary/30 bg-primary/5">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Enquanto isso, empresas orientadas por tecnologia{" "}
              <span className="text-primary font-semibold">
                escalam com automação e IA.
              </span>
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
