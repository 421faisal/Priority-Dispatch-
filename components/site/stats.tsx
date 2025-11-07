import { Truck, Clock, TrendingUp, ShieldCheck, FileText, Fuel, Headset, BadgeCheck, MapPinned } from "lucide-react"
import Reveal from "@/components/site/reveal"

export function Stats() {
  const stats = [
    { value: "98%", label: "Load Success Rate", icon: Truck },
    { value: "24/7", label: "Support Availability", icon: Clock },
    { value: "+100%", label: "Carrier Profitability", icon: TrendingUp },
  ]

  const offers = [
    {
      icon: Headset,
      title: "Dedicated Dispatcher",
      desc: "One point of contact who learns your lanes, prefs, and weekly targets.",
    },
    {
      icon: MapPinned,
      title: "Smart Lane Planning",
      desc: "AI lane intelligence to minimize deadhead and maximize rate-per-mile.",
    },
    {
      icon: ShieldCheck,
      title: "Broker Compliance",
      desc: "MC/authority checks, carrier packets, and rate-conf verification.",
    },
    { icon: FileText, title: "Paperwork & Billing", desc: "RCs, PODs, invoicing, detention/TONU—handled end-to-end." },
    {
      icon: Fuel,
      title: "Fuel Optimization",
      desc: "Routes that reduce idle time and improve MPG on your preferred corridors.",
    },
    {
      icon: BadgeCheck,
      title: "Claims & Detention",
      desc: "Proactive detention negotiation and documentation for faster payouts.",
    },
  ]

  return (
    <section id="why" className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Reveal>
          <h2 className="text-balance text-center text-2xl font-semibold md:text-3xl">Why Choose Us</h2>
        </Reveal>
        <Reveal className="mx-auto mt-2 max-w-2xl">
          <p className="text-center text-foreground/70">
            Data-backed performance, dependable communication, and relentless focus on your bottom line.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delayMs={100 * i}>
              <div className="rounded-lg border border-border bg-card p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="flex items-center justify-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div className="text-3xl font-bold text-primary">{s.value}</div>
                </div>
                <div className="mt-2 text-center text-sm text-foreground/70">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <h3 className="text-center text-xl font-semibold md:text-2xl">What We Offer</h3>
        </Reveal>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.title} delayMs={80 * i}>
              <div className="group rounded-lg border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-md bg-accent text-accent-foreground">
                    <o.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <div className="font-medium">{o.title}</div>
                    <p className="mt-1 text-sm text-foreground/70">{o.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
