"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, MessageSquare, TrendingUp, Cog } from "lucide-react"
import { motion } from "framer-motion"
import { useModal } from "./modal-provider"

const pillars = [
  { Icon: MessageSquare, label: "Atendimento com IA" },
  { Icon: TrendingUp, label: "Vendas" },
  { Icon: Cog, label: "Operação" },
]

export function Hero() {
  const { openModal } = useModal()

  function handleScrollTo(targetId: string) {
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 overflow-hidden">
      {/* Background — mais editorial, menos glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, #7C3AED 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Top label */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/25 bg-primary/5 mb-10">
            <span className="text-primary text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase">
              Consultoria · IA · Estruturação
            </span>
          </div>

          {/* Headline — tese como manchete */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8 text-balance">
            <span className="text-foreground">Empresas que escalam constroem sistemas </span>
            <span className="text-primary">antes de contratar pessoas.</span>
          </h1>

          {/* Subhead */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            A MaviCompany estrutura sua empresa com IA — atendimento, vendas e processos operando de forma inteligente, previsível e escalável.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold group"
              onClick={() => openModal("diagnostic")}
            >
              Solicitar diagnóstico
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-foreground px-8 py-6 text-base font-semibold bg-transparent"
              onClick={() => handleScrollTo("como-funciona")}
            >
              <Play className="mr-2 h-5 w-5" />
              Ver como funciona
            </Button>
          </div>
        </motion.div>

        {/* Diagrama editorial dos 3 pilares — substitui o mock com números fictícios */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="group relative p-6 md:p-7 rounded-xl border border-border/50 bg-card/20 hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                    <pillar.Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                      Pilar 0{i + 1}
                    </p>
                    <p className="text-base md:text-lg font-semibold text-foreground">
                      {pillar.label}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
