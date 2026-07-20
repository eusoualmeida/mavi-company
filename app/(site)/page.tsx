import { Hero } from "@/components/site/hero"
import { Steps } from "@/components/site/steps"
import { ServiceIndex } from "@/components/site/service-index"
import { Founder } from "@/components/site/founder"
import { Faq } from "@/components/site/faq"
import { Cta } from "@/components/site/cta"
import { faq } from "@/lib/site"

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Steps />
      <ServiceIndex />
      <Founder />
      <Faq />
      <Cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </>
  )
}
