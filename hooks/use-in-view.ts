"use client"

import { useRef } from "react"
import { useInView as useFramerInView } from "framer-motion"

export function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useFramerInView(ref, { once: true, amount: threshold })
  return { ref, isInView }
}
