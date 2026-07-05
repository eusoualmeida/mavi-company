import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://mavicompany.com.br'),
  
  title: {
    default: 'MaviCompany | Estruturação de Empresas com IA',
    template: '%s | MaviCompany'
  },

  description: 'Estruturamos empresas com IA — atendimento, vendas e processos operando de forma inteligente, previsível e escalável.',

  keywords: ['estruturação de empresas com IA', 'consultoria em IA', 'automação com IA', 'inteligência artificial', 'sistemas empresariais', 'integrações', 'MaviCompany'],

  authors: [{ name: 'MaviCompany' }],

  creator: 'MaviCompany',

  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mavicompany.com.br',
    title: 'MaviCompany | Estruturação de Empresas com IA',
    description: 'Estruturamos empresas com IA — atendimento, vendas e processos operando de forma inteligente, previsível e escalável.',
    siteName: 'MaviCompany',
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'MaviCompany Logo',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'MaviCompany | Estruturação de Empresas com IA',
    description: 'Estruturamos empresas com IA — atendimento, vendas e processos operando de forma inteligente, previsível e escalável.',
    images: ['/android-chrome-512x512.png'],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
      },
    ],
  },
  
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        {/* Preconnect para otimização */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}