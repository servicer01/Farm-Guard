import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - Farm-Guard Aquatics",
  description: "Read the terms and conditions for using Farm-Guard Aquatics products and services.",
}

export default function TermsPage() {
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

          <h1 className="text-4xl font-bold tracking-tight text-foreground">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: January 2024</p>

          <div className="prose prose-neutral mt-12 max-w-none dark:prose-invert">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                By accessing or using Farm-Guard Aquatics products and services, you agree to be bound by 
                these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">2. Description of Services</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Farm-Guard Aquatics provides aquaculture monitoring hardware and software services, including:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Sensor devices for water quality monitoring</li>
                <li>Cloud-based data storage and analytics</li>
                <li>Mobile and web applications for system management</li>
                <li>Alert and notification services</li>
                <li>Technical support and maintenance</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">3. Account Registration</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To use our services, you must create an account and provide accurate, complete information. 
                You are responsible for maintaining the confidentiality of your account credentials and for 
                all activities that occur under your account.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">4. Subscription and Payment</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Certain services require a paid subscription. By subscribing, you agree to pay all applicable 
                fees as described at the time of purchase. Subscriptions automatically renew unless cancelled 
                before the renewal date.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Hobby Grower: One-time hardware purchase, basic cloud features included</li>
                <li>Family Farm: Hardware purchase plus monthly subscription for advanced features</li>
                <li>Commercial Pod: Custom pricing with dedicated support and SLA</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">5. Acceptable Use</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                You agree to use our services only for lawful purposes and in accordance with these Terms. 
                You agree not to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer or decompile our software</li>
                <li>Resell or redistribute our services without authorization</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">6. Hardware Warranty</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Farm-Guard hardware products are covered by a limited warranty for defects in materials and 
                workmanship. Warranty periods vary by product tier:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
                <li>Hobby Grower Kit: 1-year limited warranty</li>
                <li>Family Farm Kit: 2-year limited warranty</li>
                <li>Commercial Pod System: 3-year limited warranty with extended options</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Farm-Guard Aquatics provides monitoring tools to assist with aquaculture management but does 
                not guarantee crop yields or outcomes. We are not liable for any indirect, incidental, or 
                consequential damages arising from the use of our services, including but not limited to 
                loss of livestock, crops, or profits.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">8. Termination</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We may terminate or suspend your account at any time for violations of these Terms. Upon 
                termination, your right to use our services will immediately cease. You may export your 
                data within 30 days of account termination.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">9. Changes to Terms</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of significant 
                changes via email or through our services. Continued use of our services after changes 
                constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-foreground">10. Contact Information</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                For questions about these Terms, please contact us at:
              </p>
              <p className="mt-4 text-muted-foreground">
                Email: <a href="mailto:legal@farm-guardaquatics.com" className="text-primary hover:underline">legal@farm-guardaquatics.com</a><br />
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
