"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

export function Founder() {
  return (
    <motion.section
      id="fundador"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 md:py-32 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Foto */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-2xl border border-border/60 bg-card/20 overflow-hidden"
            >
              {/* TODO: substituir por foto real do fundador em /public/images/founder.jpg */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 via-secondary/20 to-background">
                <User className="h-24 w-24 text-primary/30" strokeWidth={1} />
              </div>
            </motion.div>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs md:text-sm uppercase tracking-[0.2em] text-primary/80 mb-4"
            >
              Quem está por trás
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight text-balance"
            >
              Mateus Almeida
              <br />
              <span className="text-muted-foreground text-2xl md:text-3xl font-medium">
                Fundador · Desenvolvedor
              </span>
            </motion.h2>

            {/* TODO: substituir pelo texto oficial de bio do fundador. Rascunho abaixo é neutro. */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg"
            >
              <p>
                Desenvolvedor e fundador da MaviCompany. Construo sistemas, integrações e automações com IA para empresas que precisam estruturar sua operação antes de escalar em pessoas.
              </p>
              <p>
                O foco é sempre o mesmo: transformar processos manuais e frágeis em sistemas previsíveis, dados centralizados e agentes de IA rodando 24/7.
              </p>
              <p className="text-foreground/90 font-medium">
                Se você está pronto para estruturar sua empresa com IA, a conversa começa por um diagnóstico.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
