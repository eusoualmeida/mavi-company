"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const forWho = [
  "Empresas em crescimento que precisam estruturar antes de escalar time",
  "Operações digitais com atendimento, vendas e processos manuais",
  "Times que já viram a dor do 'contratar mais gente para resolver'",
  "Negócios prontos para tratar tecnologia como investimento, não custo",
]

const notForWho = [
  "Quem busca solução pronta de prateleira, sem diagnóstico",
  "Quem não quer olhar para o próprio processo antes de automatizar",
  "Quem espera resultado sem mudar como a operação é conduzida",
]

export function TargetAudience() {
  return (
    <motion.section
      id="para-quem"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-4">
            Para quem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance leading-tight">
            Estruturação não é para todo mundo.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ficamos com clareza no início para não perder tempo — nem seu, nem nosso — depois.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Lista positiva */}
            <motion.div
              variants={leftVariants}
              className="p-8 rounded-2xl border border-green-500/25 bg-green-500/5"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">Para quem é:</h3>
              <div className="space-y-4">
                {forWho.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-green-400" />
                    </div>
                    <span className="text-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Lista negativa */}
            <motion.div
              variants={rightVariants}
              className="p-8 rounded-2xl border border-red-500/25 bg-red-500/5"
            >
              <h3 className="text-lg font-bold text-foreground mb-6">Para quem não é:</h3>
              <div className="space-y-4">
                {notForWho.map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                      <X className="h-4 w-4 text-red-400" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
