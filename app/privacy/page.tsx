import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Farm-Guard Aquatics",
  description: "Learn how Farm-Guard Aquatics collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-foreground">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 2024</p>

          <div className="prose prose-neutral mt-12 max-w-none dark:prose-invert">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Farm-Guard Aquatics (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our aquaculture monitoring systems and services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We collect information you provide directly to us, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Account registration information (name, email, phone number)</li>
                <li>Farm and operation details</li>
                <li>Payment and billing information</li>
                <li>Communications with our support team</li>
                <li>Sensor data from your Farm-Guard devices</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Provide, maintain, and improve our monitoring services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical alerts and updates about your systems</li>
                <li>Respond to your comments, questions, and support requests</li>
                <li>Analyze trends and usage patterns to improve our products</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">4. Data Security</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. All data 
                transmitted between your Farm-Guard devices and our servers is encrypted using 
                industry-standard protocols.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">5. Data Retention</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We retain your personal information for as long as your account is active or as needed to 
                provide you services. Sensor data is retained according to your subscription tier, with 
                options for extended historical data storage.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">6. Your Rights</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You have the right to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Export your data in a portable format</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">7. Contact Us</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-4 text-muted-foreground">
                Email: <a href="mailto:privacy@farm-guardaquatics.com" className="text-primary hover:underline">privacy@farm-guardaquatics.com</a><br />
                Address: 123 Aquaculture Way, Green Valley, CA 95945
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
