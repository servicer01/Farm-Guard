"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Questions about Farm-Guard? Ready to scale your operation? 
            Our team is here to help you find the right solution.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-secondary-foreground">
                Contact Information
              </h3>
              <p className="mt-2 text-muted-foreground">
                Reach out directly or fill out the form and we&apos;ll get back to you 
                within one business day.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-secondary-foreground">Email</p>
                  <a
                    href="mailto:support@farm-guard.org"
                    className="text-muted-foreground hover:text-primary"
                  >
                    support@farm-guard.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-secondary-foreground">Phone</p>
                  <a
                    href="tel:+18005551234"
                    className="text-muted-foreground hover:text-primary"
                  >
                    1-800-555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-secondary-foreground">Headquarters</p>
                  <p className="text-muted-foreground">
                    1234 Old Highway
                    <br />
                    Reeds Spring, Mo. 65737
                  </p>
                </div>
              </div>
            </div>

            {/* Support Hours */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h4 className="font-semibold text-card-foreground">Support Hours</h4>
              <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                <p>Monday – Friday: 8:00 AM – 6:00 PM CST</p>
                <p>Saturday: 9:00 AM – 1:00 PM CST</p>
                <p>Sunday: Closed</p>
              </div>
              <p className="mt-4 text-sm text-primary">
                Commercial customers: 24/7 emergency line available
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
            {formSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Send className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-card-foreground">
                  Message Sent!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setFormSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="operation">Operation Size</Label>
                  <select
                    id="operation"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="">Select your operation size</option>
                    <option value="hobby">Hobby (1–4 totes)</option>
                    <option value="family">Family Farm (4–25 totes)</option>
                    <option value="commercial">Commercial (25+ totes)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your aquaculture operation and how we can help..."
                    rows={4}
                    required
                    className="bg-background"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
