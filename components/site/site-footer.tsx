"use client"

import { Facebook, Linkedin, Instagram } from "lucide-react"
async function onFooterSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = {
    name: formData.get("name"),
  };

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (res.ok) {
    alert("Thank you! We will contact you soon.");
    form.reset();
  } else {
    alert("Failed to send. Please try again.");
  }
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 pt-10">
        <div className="flex flex-col items-start justify-between gap-4 rounded-md bg-primary-foreground/5 p-4 md:flex-row md:items-center md:p-5">
          <div>
            <div className="flex items-center gap-2">
              <img src="/images/logo-priority-dispatch.jpg" alt="The Priority Dispatch logo" className="h-7 w-auto" />
              <span className="text-sm font-semibold uppercase tracking-widest">Ready to Maximize Your Earnings?</span>
            </div>
            <p className="mt-1 text-xs opacity-80">Your road ahead.</p>
          </div>
          <form
            className="grid w-full grid-cols-1 gap-2 md:w-auto md:grid-cols-4 md:items-center"
           onSubmit={onFooterSubmit}

          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="h-9 rounded-md bg-primary-foreground/10 px-3 text-sm placeholder:text-primary-foreground/60 md:w-40"
              aria-label="Name"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="h-9 rounded-md bg-primary-foreground/10 px-3 text-sm placeholder:text-primary-foreground/60 md:w-40"
              aria-label="Phone"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="h-9 rounded-md bg-primary-foreground/10 px-3 text-sm placeholder:text-primary-foreground/60 md:w-56"
              aria-label="Email"
            />
            <button
              type="submit"
              className="h-9 rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src="/images/logo-priority-dispatch.jpg" alt="The Priority Dispatch logo" className="h-6 w-auto" />
            <span className="text-sm font-semibold uppercase tracking-widest">Priority Dispatch</span>
          </div>
          <p className="text-sm opacity-80">Your partner for speed, reliability, and results.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>
              <a href="#services" className="hover:opacity-80">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:opacity-80">
                About Us
              </a>
            </li>
            <li>
              <a href="#why" className="hover:opacity-80">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:opacity-80">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm opacity-90">
            <li>The Priority Dispatch</li>
            <li>804 brack st Kissimmee ,Fl 34744, USA</li>
            <li> (+1) 689-314-8347</li>
            <li>prioritydispatch4u@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Follow</h3>
          <div className="mt-3 flex items-center gap-3">
            <a
              href="#"
              aria-label="Follow on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="#"
              aria-label="Follow on LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/priority_dispatch?igsh=cmZmczdnOW1uYTJ3"
              aria-label="Follow on Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-md bg-primary-foreground/10 hover:bg-primary-foreground/15"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-xs opacity-80">
          <span>© {new Date().getFullYear()} Priority Dispatch. All rights reserved.</span>
          <div className="space-x-3">
            <a href="#" className="hover:opacity-80">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-80">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
