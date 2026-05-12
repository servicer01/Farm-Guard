import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Hobby",
    description: "Perfect for backyard growers getting started with aquaculture.",
    capacity: "1–4 Totes",
    price: "$199",
    period: "one-time",
    features: [
      "1 multi-parameter sensor hub",
      "pH, temperature & DO monitoring",
      "Mobile app access",
      "7-day data history",
      "Email alerts",
      "Community support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Family Farm",
    description: "For serious growers scaling up their home or small farm operation.",
    capacity: "4–25 Totes",
    price: "$599",
    period: "one-time",
    monthly: "$29/mo",
    features: [
      "Up to 5 sensor hubs",
      "All Hobby features, plus:",
      "Ammonia & nitrate monitoring",
      "90-day data history",
      "SMS & push notifications",
      "Automation integration",
      "Priority email support",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Commercial Pod",
    description: "Enterprise-grade monitoring for commercial aquaculture operations.",
    capacity: "25+ Totes",
    price: "Custom",
    period: "quote",
    features: [
      "Unlimited sensor hubs",
      "All Family Farm features, plus:",
      "Multi-location dashboard",
      "Unlimited data retention",
      "API access & integrations",
      "Automated control systems",
      "Dedicated account manager",
      "On-site installation support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose Your Kit
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Select the monitoring package that matches your operation. 
            All kits include hardware, sensors, and access to the Farm-Guard platform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative flex flex-col ${
                tier.featured
                  ? "border-2 border-primary shadow-lg"
                  : "border-border"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <CardDescription className="text-sm">
                  {tier.description}
                </CardDescription>
                <p className="mt-2 inline-block rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {tier.capacity}
                </p>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  {tier.period === "one-time" && (
                    <span className="ml-2 text-sm text-muted-foreground">one-time</span>
                  )}
                  {tier.monthly && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      + {tier.monthly} platform subscription
                    </p>
                  )}
                  {tier.period === "quote" && (
                    <span className="ml-2 text-sm text-muted-foreground">contact for pricing</span>
                  )}
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={tier.featured ? "default" : "outline"}
                  asChild
                >
                  <Link href="#contact">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
