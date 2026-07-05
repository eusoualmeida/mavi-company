import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Problems } from "@/components/landing/problems"
import { Thesis } from "@/components/landing/thesis"
import { Pillars } from "@/components/landing/pillars"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Testimonials } from "@/components/landing/testimonials"
import { TargetAudience } from "@/components/landing/target-audience"
import { Founder } from "@/components/landing/founder"
import { CTA } from "@/components/landing/cta"
import { Footer } from "@/components/landing/footer"
import { ModalProvider } from "@/components/landing/modal-provider"

export default function Home() {
  return (
    <ModalProvider>
      <main className="min-h-screen bg-background scroll-smooth">
        <Header />
        <Hero />
        <Problems />
        <Thesis />
        <Pillars />
        <HowItWorks />
        <Testimonials />
        <TargetAudience />
        <Founder />
        <CTA />
        <Footer />
      </main>
    </ModalProvider>
  )
}
