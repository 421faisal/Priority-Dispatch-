import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"

const items = [
  {
    image: "/images/services/dispatch.jpg",
    title: "Dispatching",
    desc: "Fast, high-paying load booking with proactive lane scouting and smart, fuel-saving route optimization.",
    bullets: ["Daily load opportunities", "Broker vetting", "Rate confirmations"],
  },
  {
    image: "/images/services/carrier-support.jpg",
    title: "Carrier Support",
    desc: "24/7 assistance for drivers and fleets. We handle calls, paperwork, and compliance so you can drive.",
    bullets: ["24/7 phone + email", "Setups & paperwork", "Detention negotiation"],
  },
  {
    image: "/images/services/load-management.jpg",
    title: "Load Management",
    desc: "Complete back-office: invoicing, detention claims, POD audits, and collections tracking.",
    bullets: ["Clean invoicing", "POD & BOL audits", "Claims + collections"],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Reveal>
          <h2 className="text-balance text-center text-2xl font-semibold md:text-3xl">Our Services</h2>
        </Reveal>
        <Reveal className="mx-auto mt-2 max-w-2xl">
          <p className="text-center text-foreground/70">
            Sleek, efficient, and focused solutions tailored to keep your wheels turning profitably.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map(({ image, title, desc, bullets }, i) => (
            <Reveal key={title} delayMs={100 * i}>
              <Card className="group border-border shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <div className="relative h-44 w-full overflow-hidden rounded-t-lg md:h-48">
                  <img
                    src={image || "/placeholder.svg?height=180&width=320&query=service%20thumbnail"}
                    alt={`${title} thumbnail`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <CardHeader className="flex flex-col items-start gap-3">
                  <CardTitle className="text-lg">{title}</CardTitle>
                  <p className="text-foreground/80">{desc}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="mt-2 grid gap-2 text-sm text-foreground/80">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                        {b}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 flex justify-center" delayMs={150}>
          <a href="#services-details">
            <Button className="bg-accent text-accent-foreground hover:opacity-90">View Detailed Services</Button>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
