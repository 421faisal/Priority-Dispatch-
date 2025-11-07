"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

const nav = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-primary/95 text-primary-foreground shadow-md backdrop-blur-sm border-b border-border/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="#home" className="flex items-center gap-2">
          <img src="/images/logo-priority-dispatch.jpg" alt="The Priority Dispatch logo" className="h-7 w-auto" />
          <span className="text-sm font-semibold uppercase tracking-widest">Priority Dispatch</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="bg-accent text-accent-foreground hover:opacity-90">Request a Quote</Button>
          </a>
        </nav>

        <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={cn("md:hidden transition-[max-height] overflow-hidden bg-primary", open ? "max-h-96" : "max-h-0")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-2 text-sm hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)}>
            <Button className="w-full bg-accent text-accent-foreground hover:opacity-90">Request a Quote</Button>
          </a>
        </nav>
      </div>
    </header>
  )
}
