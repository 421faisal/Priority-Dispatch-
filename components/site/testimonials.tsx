import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"
import Reveal from "@/components/site/reveal"

const items = [
  {
    image: "/images/reviewers/mika-s.jpg",
    quote: "Priority Dispatch keeps my schedule full and my revenue steady. Best rates I’ve seen.",
    author: "Mika S., Owner-Operator",
    rating: 5,
  },
  {
    image: "/images/reviewers/carlos-r.jpg",
    quote: "True 24/7 support. They handled everything from booking to paperwork flawlessly.",
    author: "Carlos R., Fleet Manager",
    rating: 5,
  },
  {
    image: "/images/reviewers/amira-k.jpg",
    quote: "Transparent, professional, and fast. I never worry about deadhead miles anymore.",
    author: "Amira K., Carrier",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <Reveal>
          <h2 className="text-balance text-center text-2xl font-semibold md:text-3xl">What Carriers Say</h2>
        </Reveal>
        <Reveal className="mx-auto mt-2 max-w-2xl">
          <p className="text-center text-foreground/70">Real feedback from carriers who rely on us for results.</p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((t, idx) => (
            <Reveal key={idx} delayMs={100 * idx}>
              <Card className="border-border transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={t.image || "/placeholder.svg"} alt={`${t.author} headshot`} />
                      <AvatarFallback>
                        {t.author.split(" ")[0]?.[0]}
                        {t.author.split(" ")[1]?.[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex items-center gap-2">
                      <Quote className="h-5 w-5 text-primary" aria-hidden />
                      <div className="flex" aria-label={`${t.rating} out of 5 stars`}>
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="font-medium leading-relaxed">
                    {'"'}
                    {t.quote}
                    {'"'}
                  </p>
                  <span className="block text-sm text-foreground/70">{t.author}</span>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
