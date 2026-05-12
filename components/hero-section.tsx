import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Activity, Shield, Wifi } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Sustainable Aquaculture Technology
          </div>

          {/* Main Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Grow Smarter.
            <br />
            <span className="text-primary">Harvest Better.</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Farm-Guard Aquatics delivers precision monitoring for your aquaculture systems. 
            From backyard totes to commercial operations, gain real-time insights 
            that help you optimize water quality, reduce losses, and maximize yields.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="#pricing">
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
              <Link href="#what-is-farmguard">Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-semibold text-card-foreground">Real-Time Monitoring</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Track pH, temperature, dissolved oxygen, and more — 24/7.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-semibold text-card-foreground">Smart Alerts</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Instant notifications when conditions fall outside safe ranges.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <Wifi className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-4 font-semibold text-card-foreground">Cloud Connected</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Access your data anywhere via our secure dashboard and mobile app.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
