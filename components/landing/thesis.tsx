"use client"

import { motion } from "framer-motion"

export function Thesis() {
  return (
    <motion.section
      id="tese"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-24 md:py-40 relative"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-6"
          >
            Nossa tese
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance"
          >
            Tecnologia não é diferencial.
            <br />
            <span className="text-primary">É pré-requisito.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 max-w-2xl space-y-5 text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            <p>
              Empresas que crescem de forma sustentável constroem sistemas antes de escalar pessoas.
            </p>
            <p>
              A cada nova contratação sem estruturação, o custo operacional cresce mais rápido que a receita — e a operação vira gargalo. A saída não é contratar mais. É estruturar a operação com IA, dados e sistemas antes.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
