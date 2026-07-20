import React from "react"
import type { Metadata } from "next"
import { Martian_Mono, Fraunces, Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { site } from "@/lib/site"
import "./globals.css"

const martian = Martian_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-martian",
  display: "swap",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["600"],
  variable: "--font-fraunces",
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
})

const title = "MaviCompany | Automação e IA para operações com processo manual"
const description =
  "Resolvo o processo manual que suga tempo e dinheiro da sua operação. Diagnóstico, implementação de IA rodando em produção e software sob medida quando automação não basta."

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: "%s | MaviCompany" },
  description,
  keywords: [
    "automação de processos",
    "automação com IA",
    "agentes de IA para empresas",
    "consultoria em automação",
    "software sob medida",
    "diagnóstico de automação",
    "MaviCompany",
  ],
  authors: [{ name: site.founder }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    title,
    description,
    siteName: site.name,
    images: [
      { url: "/android-chrome-512x512.png", width: 512, height: 512, alt: "MaviCompany" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
}

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.legalName,
  url: site.url,
  email: site.email,
  description,
  founder: { "@type": "Person", name: site.founder },
  sameAs: [site.instagram],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: `+${site.whatsapp}`,
    availableLanguage: ["Portuguese"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${martian.variable} ${fraunces.variable} ${jakarta.variable} font-sans antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
