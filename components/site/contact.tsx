"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  setLoading(true);

  try {
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      toast({
        title: "✅ Message Sent!",
        description: "We will contact you shortly.",
      });
      form.reset();
    } else {
      toast({
        title: "❌ Failed to Send",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  } catch (err) {
    toast({
      title: "❌ Error",
      description: "Please try again.",
      variant: "destructive",
    });
  } finally {
    setLoading(false);
  }
}


  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-8 px-4 py-12 md:grid-cols-2 md:py-20">
        <div>
          <h2 className="text-balance text-2xl font-semibold md:text-3xl">Ready to Maximize Your Earnings?</h2>
          <p className="mt-3 text-foreground/90">Tell us what you’re looking for and we’ll get back to you promptly.</p>
          <ul className="mt-6 space-y-2 text-sm opacity-90">
            <li>
              Phone: <span className="font-medium">(+1) 689-314-8347</span>
            </li>
            <li>
              Email: <span className="font-medium">prioritydispatch4u@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-card p-6 text-card-foreground">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" required placeholder="(555) 123-4567" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" name="email" required placeholder="you@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={4} placeholder={"I'm interested in..."} />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-accent-foreground hover:opacity-90"
            >
              {loading ? "Sending..." : "Send Request"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
