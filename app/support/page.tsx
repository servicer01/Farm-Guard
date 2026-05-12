import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MessageCircle, FileText, Clock, ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Support - Farm-Guard Aquatics",
  description: "Get help with your Farm-Guard aquaculture monitoring system. Contact our support team or browse our resources.",
}

const supportOptions = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours.",
    action: "support@farm-guardaquatics.com",
    href: "mailto:support@farm-guardaquatics.com",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our technical support team.",
    action: "(555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time during business hours.",
    action: "Start Chat",
    href: "#",
  },
]

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn how to set up and configure your Farm-Guard system.",
  },
  {
    title: "Sensor Calibration",
    description: "Step-by-step instructions for calibrating your monitoring sensors.",
  },
  {
    title: "Troubleshooting",
    description: "Common issues and how to resolve them quickly.",
  },
  {
    title: "API Documentation",
    description: "Integrate Farm-Guard data with your existing systems.",
  },
]

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Support Center</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We&apos;re here to help you get the most out of your Farm-Guard system.
            </p>
          </div>

          {/* Support Hours */}
          <Card className="mb-12 border-primary/20 bg-primary/5">
            <CardContent className="flex items-center gap-4 py-6">
              <Clock className="h-8 w-8 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Support Hours</p>
                <p className="text-muted-foreground">
                  Monday - Friday: 7am - 7pm EST | Saturday: 9am - 5pm EST | Emergency: 24/7
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Options */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Contact Us</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {supportOptions.map((option) => (
                <Card key={option.title} className="transition-shadow hover:shadow-md">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <option.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{option.title}</CardTitle>
                    <CardDescription>{option.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" asChild className="w-full">
                      <a href={option.href}>{option.action}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Resources */}
          <section>
            <h2 className="mb-6 text-2xl font-semibold text-foreground">Resources & Documentation</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {resources.map((resource) => (
                <Card key={resource.title} className="cursor-pointer transition-shadow hover:shadow-md">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{resource.title}</CardTitle>
                      <CardDescription className="mt-1">{resource.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
