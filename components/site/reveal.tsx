"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"
import type { JSX } from "react"

type RevealProps = {
  children: React.ReactNode
  className?: string
  as?: keyof JSX.IntrinsicElements
  delayMs?: number
  once?: boolean
}

export default function Reveal({ children, className, as: Tag = "div", delayMs = 0, once = true }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [delayMs, once])

  return (
    <Tag
      ref={ref as any}
      className={cn(
        // motion-safe ensures users with reduced motion won't see large animations
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        "motion-safe:[transform:translateY(var(--y,0))] motion-safe:[opacity:var(--o,1)]",
        visible ? "motion-safe:[--y:0] motion-safe:[--o:1]" : "motion-safe:[--y:12px] motion-safe:[--o:0]",
        className,
      )}
    >
      {children}
    </Tag>
  )
}
