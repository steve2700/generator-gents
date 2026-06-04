import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'About Us | Generator Repair Services Gauteng',
  description: 'Learn about Generator Repair Services - Gauteng\'s trusted generator repair specialists with 15+ years experience. Professional, reliable service across Johannesburg, Pretoria & surrounds.',
  keywords: 'about generator repair services, generator technicians Gauteng, professional generator repairs, trusted generator service',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/about' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            About Generator Repair Services
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Gauteng&apos;s trusted generator repair specialists since 2009
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-foreground">Our Story</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Generator Repair Services was founded with a simple mission: to provide Gauteng businesses and homeowners with reliable, professional generator repair and maintenance services they can depend on.
            </p>
            <p>
              With over 15 years of experience in the industry, our team of qualified technicians has built a reputation for excellence, serving thousands of satisfied customers across Johannesburg, Pretoria, and the greater Gauteng region.
            </p>
            <p>
              We understand that when your generator fails, you need it fixed fast. That&apos;s why we offer rapid response times, transparent pricing, and quality workmanship backed by solid warranties.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-foreground text-center">Why Choose Us</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">15+ Years Experience</h3>
              <p className="mt-2 text-muted-foreground">
                Decades of hands-on experience repairing all generator brands and models, from small portable units to large industrial systems.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">24/7 Emergency Service</h3>
              <p className="mt-2 text-muted-foreground">
                Generator emergencies don&apos;t wait for business hours. Our rapid response team is available around the clock for urgent repairs.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Transparent Pricing</h3>
              <p className="mt-2 text-muted-foreground">
                No hidden fees or surprise charges. We provide detailed quotes upfront so you know exactly what to expect before any work begins.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Warranty Backed</h3>
              <p className="mt-2 text-muted-foreground">
                All repairs come with a minimum 3-month warranty. We stand behind our work and use quality parts from trusted suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-foreground">Our Expertise</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Our technicians are factory-trained and certified to work on all major generator brands including Cummins, Caterpillar, Perkins, FG Wilson, Kipor, Ryobi, Honda, Yamaha, SDMO, and Atlas Copco.
            </p>
            <p>We specialise in:</p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Complete generator repairs and rebuilds</li>
              <li>Preventive maintenance and servicing</li>
              <li>Emergency breakdown repairs</li>
              <li>AVR and control panel diagnostics</li>
              <li>Alternator testing and rewinding</li>
              <li>Fuel system repairs and cleaning</li>
              <li>Load bank testing and certification</li>
              <li>New generator installation and commissioning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold text-foreground text-center">Areas We Serve</h2>
          <p className="mt-4 text-center text-muted-foreground">
            We provide generator repair services throughout Gauteng, including:
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 md:grid-cols-4">
            {[
              'Johannesburg', 'Pretoria', 'Sandton', 'Midrand',
              'Centurion', 'Randburg', 'Roodepoort', 'Kempton Park',
              'Boksburg', 'Benoni', 'Germiston', 'Alberton',
              'Edenvale', 'Krugersdorp', 'Springs', 'Soweto',
              'Fourways', 'Vereeniging'
            ].map((area) => (
              <Link
                key={area}
                href={`/generator-repairs-${area.toLowerCase().replace(' ', '-')}`}
                className="rounded-md border border-border bg-background px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Ready to Get Your Generator Fixed?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Contact us today for a free assessment and quote.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="tel:0603160484"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Call 060 316 0484
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
