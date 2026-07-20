import React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type Variant = "primary" | "secondary" | "onIndigo"

const base =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold " +
  "min-h-11 px-6 py-3 text-[15px] transition-all duration-[220ms] [transition-timing-function:var(--ease-editorial)] group"

const variants: Record<Variant, string> = {
  primary: "bg-orange text-cream-2 hover:brightness-105 hover:-translate-y-0.5 shadow-editorial",
  secondary: "border border-line text-indigo bg-transparent hover:bg-peach hover:-translate-y-0.5",
  onIndigo: "bg-orange text-cream-2 hover:brightness-110 hover:-translate-y-0.5",
}

type Props = {
  href: string
  children: React.ReactNode
  variant?: Variant
  /** Seta que desliza no hover. */
  arrow?: boolean
  external?: boolean
  className?: string
}

export function ActionButton({
  href,
  children,
  variant = "primary",
  arrow = true,
  external = false,
  className = "",
}: Props) {
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="h-4 w-4 shrink-0 transition-transform duration-[220ms] [transition-timing-function:var(--ease-editorial)] group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  )

  const cls = `${base} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  )
}
