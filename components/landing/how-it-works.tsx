"use client"

import { motion } from "framer-motion"
import { Search, Layers, Code, Rocket } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Diagnóstico técnico e mapeamento",
    description: "Analisamos sua operação e identificamos oportunidades de automação e melhoria.",
  },
  {
    icon: Layers,
    number: "02",
    title: "Arquitetura da solução",
    description: "Desenhamos a estrutura técnica ideal para suas necessidades e objetivos.",
  },
  {
    icon: Code,
    number: "03",
    title: "Desenvolvimento e automações",
    description: "Construímos sistemas robustos com IA integrada e automações inteligentes.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Testes, entrega e suporte",
    description: "Implementamos, testamos e acompanhamos a performance continuamente.",
  },
]

export function HowItWorks() {
  return (
    <motion.section
      id="como-funciona"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 md:py-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simples. Técnico. Eficiente.
          </h2>
          <p className="text-lg text-muted-foreground">
            Nosso processo garante resultados previsíveis
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={stepVariants} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
              )}
              
              <div className="relative p-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
