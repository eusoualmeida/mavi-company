"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "A Mavi estruturou todo nosso sistema de gestão documental. Reduzimos o tempo de emissão de laudos em 70% e eliminamos retrabalho com integrações automáticas.",
    name: "Carlos Mendes",
    role: "CEO",
    company: "DocSafe",
    avatar: "CM",
  },
  {
    quote: "O chatbot de IA que desenvolveram para nosso atendimento qualifica leads 24h por dia. Nosso custo por lead caiu 60% e a taxa de conversão subiu 35%.",
    name: "Ana Beatriz Oliveira",
    role: "Diretora de Marketing",
    company: "Imobiliária Nova Era",
    avatar: "AB",
  },
  {
    quote: "Migramos de processos manuais para um sistema completo de gestão de condomínios. Hoje temos dados em tempo real e a operação roda sem gargalos.",
    name: "Rafael Torres",
    role: "Diretor Operacional",
    company: "CondoApp",
    avatar: "RT",
  },
  {
    quote: "A plataforma de fidelidade que construíram mudou nosso relacionamento com clientes. Em 3 meses, tivemos um aumento de 40% na recompra.",
    name: "Juliana Costa",
    role: "Fundadora",
    company: "Loyalts",
    avatar: "JC",
  },
  {
    quote: "Precisávamos de um sistema financeiro específico para fotógrafos. Eles entregaram exatamente o que precisávamos, com integração de pagamentos e relatórios automáticos.",
    name: "Felipe Augusto",
    role: "Fotógrafo & Empresário",
    company: "Gestor Fotógrafo",
    avatar: "FA",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }, [current])

  const goNext = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [goNext, isPaused])

  const t = testimonials[current]

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Quem já usa recomenda
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas que transformaram suas operações com a MaviCompany
          </p>
        </motion.div>

        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative min-h-[280px] md:min-h-[240px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (dir: number) => ({ x: dir * 80, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (dir: number) => ({ x: dir * -80, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center"
              >
                <div className="p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-balance">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-sm font-bold text-primary">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              type="button"
              onClick={goPrev}
              className="p-2 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="p-2 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
