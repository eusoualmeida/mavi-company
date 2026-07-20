"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ActionButton } from "./button"
import { nav, site, whatsappUrl } from "@/lib/site"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Trava o scroll do body enquanto o menu full-screen está aberto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/85 backdrop-blur-md border-b border-line" : "bg-cream border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 md:h-20 md:px-8">
        <Link
          href="/"
          className="font-disp text-[15px] font-bold tracking-[-0.03em] text-indigo md:text-base"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="text-orange">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-warm transition-colors duration-200 hover:text-indigo"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ActionButton href={whatsappUrl()} external className="px-5 py-2.5 text-sm">
            Falar sobre meu processo
          </ActionButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center text-indigo md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu mobile full-screen indigo */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 bg-indigo md:hidden">
          <nav
            className="flex h-full flex-col gap-1 overflow-y-auto px-5 pb-24 pt-8"
            aria-label="Menu mobile"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-disp border-b border-white/10 py-5 text-2xl font-bold tracking-[-0.02em] text-cream"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-8">
              <ActionButton
                href={whatsappUrl()}
                external
                variant="onIndigo"
                className="w-full"
              >
                Falar sobre meu processo
              </ActionButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
