import { Button } from "@/components/ui/button"
import Reveal from "@/components/site/reveal"

export function Hero() {
  return (
    <section id="home" className="bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {/* background image */}
          <img
            src="/images/hero-truck.jpg"
            alt="Modern semi-truck on a highway at dawn"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* navy-tinted overlay for readability */}
          <div className="absolute inset-0 bg-primary/70" aria-hidden />
          <div className="relative px-6 py-20 text-primary-foreground md:px-10 md:py-36">
            <Reveal>
              <div className="max-w-2xl">
                <h1 className="text-balance text-4xl font-extrabold leading-tight md:text-6xl">
                  THE PRIORITY DISPATCH
                </h1>
                <p className="mt-4 text-pretty text-base opacity-95 md:text-lg">
                  Your Road to Reliable Revenue. Speed, Reliability, Results.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#contact">
                    <Button size="lg" className="bg-accent text-accent-foreground transition-opacity hover:opacity-90">
                      Request a Quote
                    </Button>
                  </a>
                  <a href="#services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-accent bg-transparent text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                    >
                      View Services
                    </Button>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
