import WaitlistForm from "@/components/waitlist-form"

const FEATURES = ["24/7 Tank Monitoring", "Mesh Network Alerts", "Solar Powered"]

export default function Home() {
  return (
    <div
      className="min-h-screen relative overflow-hidden flex flex-col"
      style={{ background: "#0A0A0A", color: "#ffffff" }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 fg-grid-bg pointer-events-none" />

      {/* Radial green glow at top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% -5%, rgba(107,191,62,0.1) 0%, transparent 65%)",
        }}
      />

      {/* ── Main content ────────────────────────────────────────── */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 py-16 text-center">

        {/* Shield + Wordmark */}
        <div
          className="flex flex-col items-center gap-4 mb-2 fg-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          {/* Shield SVG */}
          <div className="fg-glow-pulse">
            <svg
              width="76"
              height="88"
              viewBox="0 0 76 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Shield body */}
              <path
                d="M38 4L6 16V42C6 62 20 77 38 84C56 77 70 62 70 42V16L38 4Z"
                fill="#1C3D0E"
                stroke="#6BBF3E"
                strokeWidth="2"
              />
              {/* Inner shield highlight */}
              <path
                d="M38 12L12 22V42C12 58 23 70 38 76C53 70 64 58 64 42V22L38 12Z"
                fill="rgba(107,191,62,0.07)"
              />
              {/* Signal dot */}
              <circle cx="38" cy="54" r="4.5" fill="#8FD44E" />
              {/* Inner arc */}
              <path
                d="M27 44C27 44 29.5 39.5 38 39.5C46.5 39.5 49 44 49 44"
                stroke="#8FD44E"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Outer arc */}
              <path
                d="M19 37C19 37 24.5 30 38 30C51.5 30 57 37 57 37"
                stroke="#6BBF3E"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* Wordmark */}
          <h1
            className="leading-none tracking-widest"
            style={{
              fontFamily:
                "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(3.5rem, 10vw, 7rem)",
              color: "#FFFFFF",
              letterSpacing: "0.12em",
            }}
          >
            FARM-GUARD
            <span style={{ color: "#6BBF3E" }}>™</span>
          </h1>

          {/* Tagline */}
          <p
            className="fg-glow-pulse tracking-[0.32em]"
            style={{
              fontFamily:
                "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.85rem, 2.2vw, 1.15rem)",
              color: "#8FD44E",
            }}
          >
            PROTECT. MONITOR. GROW.
          </p>
        </div>

        {/* Green gradient divider */}
        <div
          className="w-32 h-px my-8 fg-fade-up"
          style={{
            background: "linear-gradient(90deg, transparent, #6BBF3E, transparent)",
            animationDelay: "0.2s",
          }}
        />

        {/* "Coming Soon" badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 fg-fade-up"
          style={{
            background: "rgba(107, 191, 62, 0.07)",
            borderColor: "rgba(107, 191, 62, 0.35)",
            animationDelay: "0.3s",
          }}
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#8FD44E" }}
          />
          <span
            style={{
              fontFamily:
                "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              color: "#8FD44E",
            }}
          >
            LAUNCHING 2026
          </span>
        </div>

        {/* Hero headline */}
        <h2
          className="max-w-3xl leading-tight mb-4 fg-fade-up"
          style={{
            fontFamily:
              "var(--font-barlow-condensed), 'Barlow Condensed', 'Arial Narrow', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5.5vw, 3.6rem)",
            color: "#FFFFFF",
            animationDelay: "0.38s",
          }}
        >
          AI-Advised Aquaculture Monitoring is Coming
        </h2>

        {/* Subheadline */}
        <p
          className="max-w-lg mb-9 fg-fade-up"
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "clamp(1rem, 2.4vw, 1.15rem)",
            color: "rgba(255,255,255,0.58)",
            lineHeight: 1.65,
            animationDelay: "0.48s",
          }}
        >
          Off-grid. AI-powered. Built for farmers who can&apos;t afford downtime.
        </p>

        {/* Feature pills */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10 fg-fade-up"
          style={{ animationDelay: "0.56s" }}
        >
          {FEATURES.map((feature) => (
            <span
              key={feature}
              className="fg-pill px-4 py-2 rounded-full text-xs font-medium"
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                letterSpacing: "0.03em",
              }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Waitlist form */}
        <div
          className="w-full max-w-xl fg-fade-up"
          style={{ animationDelay: "0.64s" }}
        >
          <WaitlistForm />
        </div>

        {/* Small print */}
        <p
          className="mt-4 fg-fade-up"
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.3)",
            animationDelay: "0.72s",
          }}
        >
          No spam. First access when we launch.
        </p>
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer
        className="relative z-10 py-6 px-5"
        style={{ borderTop: "1px solid rgba(107,191,62,0.12)" }}
      >
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-xs"
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            color: "rgba(255,255,255,0.32)",
          }}
        >
          <a
            href="https://farm-guard.org"
            className="transition-colors hover:text-[#6BBF3E]"
            target="_blank"
            rel="noopener noreferrer"
          >
            farm-guard.org
          </a>
          <span
            className="hidden sm:inline"
            style={{ color: "rgba(107,191,62,0.35)" }}
          >
            |
          </span>
          <a
            href="mailto:info@farm-guard.org"
            className="transition-colors hover:text-[#6BBF3E]"
          >
            info@farm-guard.org
          </a>
          <span
            className="hidden sm:inline"
            style={{ color: "rgba(107,191,62,0.35)" }}
          >
            |
          </span>
          <span>© 2026 BGF LLC</span>
        </div>
      </footer>
    </div>
  )
}
