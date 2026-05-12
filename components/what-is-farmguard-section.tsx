import { Droplets, BarChart3, Zap, Leaf } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Multi-Parameter Sensing",
    description:
      "Our sensors continuously monitor pH, temperature, dissolved oxygen, ammonia, and nitrate levels — the critical factors that determine aquatic health.",
  },
  {
    icon: BarChart3,
    title: "Historical Analytics",
    description:
      "Review trends over days, weeks, or months. Spot patterns, predict issues before they become problems, and make data-driven decisions.",
  },
  {
    icon: Zap,
    title: "Automated Responses",
    description:
      "Connect Farm-Guard to pumps, aerators, and feeders. Set rules and let the system respond automatically to maintain optimal conditions.",
  },
  {
    icon: Leaf,
    title: "Sustainable by Design",
    description:
      "Reduce waste, lower mortality rates, and grow healthier produce. Farm-Guard helps you farm responsibly while improving your bottom line.",
  },
]

export function WhatIsFarmGuardSection() {
  return (
    <section id="what-is-farmguard" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
            What Is Farm-Guard?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Farm-Guard Aquatics is a complete monitoring ecosystem designed for 
            modern aquaculture — whether you&apos;re raising fresh/salt water aquatics in IBC totes or 
            operating a multi-pond commercial farm.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative flex gap-5 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary sm:text-4xl">02</p>
            <p className="mt-1 text-sm text-muted-foreground">Active Systems</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary sm:text-4xl">99.9%</p>
            <p className="mt-1 text-sm text-muted-foreground">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary sm:text-4xl">32%</p>
            <p className="mt-1 text-sm text-muted-foreground">Avg. Yield Increase</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary sm:text-4xl">24/7</p>
            <p className="mt-1 text-sm text-muted-foreground">Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  )
}
