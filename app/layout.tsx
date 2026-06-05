import type { Metadata } from 'next'
import { Geist, Geist_Mono, Barlow_Condensed, Inter } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Farm-Guard™ | Protect. Monitor. Grow.',
  description: "Off-grid. AI-powered aquaculture monitoring built for farmers who can't afford downtime. Join the waitlist.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🛡️</text></svg>",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${barlowCondensed.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
      </body>
    </html>
  )
}
