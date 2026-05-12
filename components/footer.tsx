import Link from "next/link"
import { Droplets } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Droplets className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">Farm-Guard Aquatics</span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link
              href="#what-is-farmguard"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/support"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Support
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Farm-Guard Aquatics. All rights reserved.</p>
          <p className="mt-1">
            Growing the future of sustainable aquaculture, one tote at a time.
          </p>
        </div>
      </div>
    </footer>
  )
}
