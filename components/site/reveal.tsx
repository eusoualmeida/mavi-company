"use client"

import React, { useEffect, useRef, useState } from "react"

type RevealProps = {
  children: React.ReactNode
  /** Atraso do stagger, em ms. */
  delay?: number
  className?: string
}

/**
 * Entrada em cena via IntersectionObserver (fade + translateY).
 * O CSS em globals.css já zera o efeito sob prefers-reduced-motion.
 */
export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setShown(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
