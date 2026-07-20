import React from "react"
import { Header } from "@/components/site/header"
import { Footer } from "@/components/site/footer"

/**
 * `site-scope` reescreve os tokens shadcn para o tema Editorial Mono.
 * O dashboard e o /(auth) ficam fora deste escopo e seguem no tema escuro.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-scope min-h-screen">
      <a
        href="#conteudo"
        className="bg-orange text-cream-2 sr-only rounded-pill focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">{children}</main>
      <Footer />
    </div>
  )
}
