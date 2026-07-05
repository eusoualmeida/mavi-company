"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { useModal } from "./modal-provider";

export function CTA() {
  const { openModal } = useModal();

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="p-8 md:p-12 rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
              Pronto para estruturar sua empresa com IA?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
              A conversa começa por um diagnóstico. Sem compromisso, com honestidade sobre o que faz sentido no seu contexto.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold group"
              onClick={() => openModal("diagnostic")}
            >
              <Rocket className="mr-2 h-5 w-5" />
              Solicitar diagnóstico
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
