import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Contact Us | Generator Repair Services Gauteng',
  description: 'Contact Generator Repair Services for expert generator repairs in Gauteng. Call 060 316 0484 for 24/7 emergency service. Free quotes available.',
  keywords: 'contact generator repair, generator service Gauteng, emergency generator repair contact, generator repairs phone number',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Hero Section */}
      <section className="bg-card py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Get in touch for expert generator repair services across Gauteng
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Get In Touch</h2>
              <p className="mt-4 text-muted-foreground">
                Our team is ready to help with all your generator repair needs. Contact us for a free assessment and quote.
              </p>

              <div className="mt-8 space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <Link href="tel:0603160484" className="mt-1 text-lg text-primary hover:underline">
                      060 316 0484
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <Link 
                      href="https://wa.me/27603160484?text=Hi%2C%20I%20need%20help%20with%20generator%20repairs."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-lg text-primary hover:underline"
                    >
                      060 316 0484
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">Quick responses via WhatsApp</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <Link href="mailto:info@generatorrepairservices.co.za" className="mt-1 text-primary hover:underline">
                      info@generatorrepairservices.co.za
                    </Link>
                    <p className="mt-1 text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Service Area</h3>
                    <p className="mt-1 text-muted-foreground">
                      Gauteng Province, South Africa
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Johannesburg, Pretoria, and all surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-foreground">Business Hours</h3>
                <div className="mt-4 space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>07:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>08:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed (Emergency only)</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-primary">
                  24/7 Emergency service available - call anytime for urgent repairs
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-xl font-bold text-foreground">Request a Quote</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form className="mt-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="generator-type" className="block text-sm font-medium text-foreground">
                    Generator Type/Brand
                  </label>
                  <input
                    type="text"
                    id="generator-type"
                    name="generator-type"
                    className="mt-1 block w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. Cummins 20kVA"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground">
                    Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    required
                    className="mt-1 block w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="e.g. Sandton, Johannesburg"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground">
                    Describe the Issue *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-1 block w-full rounded-md border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Please describe your generator problem or the service you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-primary px-4 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Send Enquiry
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Or call us directly at{' '}
                  <Link href="tel:0603160484" className="text-primary hover:underline">
                    060 316 0484
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="bg-primary py-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground">
            Generator Emergency?
          </h2>
          <p className="mt-2 text-primary-foreground/90">
            Our emergency repair team is available 24/7 across Gauteng
          </p>
          <Link
            href="tel:0603160484"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-background/90"
          >
            Call Now: 060 316 0484
          </Link>
        </div>
      </section>
    </main>
  )
}
