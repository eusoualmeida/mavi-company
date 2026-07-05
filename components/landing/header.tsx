"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useModal } from "./modal-provider"

const navItems = [
  { label: "Tese", id: "tese" },
  { label: "Pilares", id: "pilares" },
  { label: "Como Funciona", id: "como-funciona" },
  { label: "Para Quem", id: "para-quem" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openModal } = useModal()

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrolledOffset = scrolled ? 64 : 80

  function handleScrollTo(e: React.MouseEvent<HTMLAnchorElement>, targetId: string) {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - scrolledOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/10"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 md:h-16" : "h-16 md:h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/mavi-logo.jpeg"
              alt="MaviCompany"
              className={`w-auto transition-all duration-300 ${
                scrolled ? "h-6 md:h-8" : "h-8 md:h-10"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className="relative text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/cases"
              className="relative text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer after:absolute after:left-0 after:bottom-[-2px] after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Cases
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => openModal("diagnostic")}
            >
              Solicitar diagnóstico
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScrollTo(e, item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <Link
                href="/cases"
                onClick={() => setIsMenuOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2 cursor-pointer"
              >
                Cases
              </Link>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2"
                onClick={() => {
                  openModal("diagnostic")
                  setIsMenuOpen(false)
                }}
              >
                Solicitar diagnóstico
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
