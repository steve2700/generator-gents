import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSchema from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Generator Repair Services Gauteng | Expert Repairs, Servicing & Maintenance',
  description:
    "Gauteng's trusted generator repair specialists. Same-day emergency callouts, all brands, diesel & petrol. Serving Johannesburg, Pretoria, Sandton, Centurion & all Gauteng areas. Call 060 316 0484.",
  keywords: [
    'generator repair Gauteng',
    'generator repairs Johannesburg',
    'generator servicing Pretoria',
    'emergency generator repair',
    'diesel generator repairs',
    'generator maintenance Gauteng',
    'generator not working Johannesburg',
    'generator repair near me',
    'industrial generator repairs Gauteng',
    'generator repairs Sandton',
  ],
  alternates: { canonical: 'https://www.generatorrepairservices.co.za' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.generatorrepairservices.co.za',
    siteName: 'Generator Repair Services',
    title: 'Generator Repair Services Gauteng | Expert Repairs & Servicing',
    description: "Gauteng's trusted generator repair specialists. Same-day emergency callouts, all brands, diesel & petrol. Call 060 316 0484.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Generator Repair Services Gauteng', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Repair Services Gauteng | Expert Repairs & Servicing',
    description: 'Same-day emergency callouts. All brands. Diesel & petrol generators. Serving all of Gauteng. Call 060 316 0484.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/generator-maintenance', label: 'Generator Maintenance' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-installation', label: 'Generator Installation' },
  { href: '/load-bank-testing', label: 'Load Testing' },
  { href: '/avr-repairs', label: 'AVR Repairs' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs' },
  { href: '/generator-rewinding', label: 'Generator Rewinding' },
]

const areas = [
  { name: 'Johannesburg', slug: 'johannesburg' },
  { name: 'Pretoria', slug: 'pretoria' },
  { name: 'Sandton', slug: 'sandton' },
  { name: 'Centurion', slug: 'centurion' },
  { name: 'Midrand', slug: 'midrand' },
  { name: 'Randburg', slug: 'randburg' },
  { name: 'Roodepoort', slug: 'roodepoort' },
  { name: 'Kempton Park', slug: 'kempton-park' },
  { name: 'Boksburg', slug: 'boksburg' },
  { name: 'Benoni', slug: 'benoni' },
  { name: 'Germiston', slug: 'germiston' },
  { name: 'Alberton', slug: 'alberton' },
  { name: 'Edenvale', slug: 'edenvale' },
  { name: 'Krugersdorp', slug: 'krugersdorp' },
  { name: 'Springs', slug: 'springs' },
  { name: 'Soweto', slug: 'soweto' },
  { name: 'Fourways', slug: 'fourways' },
  { name: 'Vereeniging', slug: 'vereeniging' },
]

const trustPillars = [
  {
    heading: 'Expert Technicians',
    body: 'Skilled. Certified. Reliable.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M18 3L5 8.5V18C5 25.18 10.74 31.9 18 33C25.26 31.9 31 25.18 31 18V8.5L18 3Z" stroke="#c8a84b" strokeWidth="1.8" fill="none"/>
        <path d="M12 18L16 22L24 14" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    heading: 'Fast Response',
    body: 'We get you back up and running.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="18" cy="18" r="5" stroke="#c8a84b" strokeWidth="1.8" fill="none"/>
        <path d="M15 4.5h6v3l2 1 2.6-1.5 4.24 4.24-1.5 2.6 1 2h3v6h-3l-1 2 1.5 2.6-4.24 4.24-2.6-1.5-2 1v3h-6v-3l-2-1-2.6 1.5L4.16 21.34l1.5-2.6-1-2h-3v-6h3l1-2-1.5-2.6L8.4 5.9l2.6 1.5 2-1V4.5Z" stroke="#c8a84b" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    heading: 'All Generator Brands',
    body: 'Diesel · Petrol · Gas',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M21 4L9 20H18L15 32L27 16H18L21 4Z" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  {
    heading: 'Quality Repairs',
    body: 'Done right. Built to last.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M23 5C20.24 5 18 7.24 18 10C18 10.9 18.24 11.74 18.66 12.46L5 26.12L9.88 31L23.54 17.34C24.26 17.76 25.1 18 26 18C28.76 18 31 15.76 31 13C31 12.1 30.76 11.26 30.34 10.54L26.88 14L22 13.12L21.12 8.24L24.58 4.78C24 4.6 23.5 5 23 5Z" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M8 28L14 22" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    heading: 'Reliable Service',
    body: 'Honest. Professional. Dependable.',
    icon: (
      <svg width="38" height="38" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 14H10L14 10H20L24 14H26" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M32 14H26L20 20L16 18L12 22L16 26L20 24L26 28H32" stroke="#c8a84b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <path d="M4 14V24H10V14H4Z" stroke="#c8a84b" strokeWidth="1.8" fill="none"/>
        <path d="M26 14V28H32V14H26Z" stroke="#c8a84b" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
  },
]

const homepageFAQs = [
  {
    question: 'How quickly can you respond to an emergency generator breakdown?',
    answer: 'We offer same-day emergency callouts across all of Gauteng. In most cases we can have a technician on-site within 2–4 hours of your call. For businesses and essential services, we prioritise response times to minimise downtime during loadshedding or power outages.',
  },
  {
    question: 'Do you service all generator brands and types?',
    answer: 'Yes. Our technicians are trained across all major brands including Cummins, Perkins, Caterpillar, Deutz, Volvo, John Deere, and many others. We work with diesel generators, petrol generators and industrial standby systems of all sizes.',
  },
  {
    question: 'What areas in Gauteng do you cover?',
    answer: 'We cover the entire Gauteng province — Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg, Benoni, Germiston, Alberton, Edenvale, Krugersdorp, Springs, Soweto, Fourways and Vereeniging.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.generatorrepairservices.co.za/#business',
      name: 'Generator Repair Services',
      description: 'Professional generator repair, servicing and maintenance across Gauteng.',
      url: 'https://www.generatorrepairservices.co.za',
      telephone: '+27603160484',
      email: 'info@generatorrepairservices.co.za',
      foundingDate: '2010',
      priceRange: '$$',
      currenciesAccepted: 'ZAR',
      paymentAccepted: 'Cash, EFT',
      areaServed: { '@type': 'State', name: 'Gauteng', containsPlace: areas.map((a) => ({ '@type': 'City', name: a.name })) },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Generator Services',
        itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.label } })),
      },
      image: 'https://www.generatorrepairservices.co.za/og-image.jpg',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.generatorrepairservices.co.za/#website',
      url: 'https://www.generatorrepairservices.co.za',
      name: 'Generator Repair Services',
      publisher: { '@id': 'https://www.generatorrepairservices.co.za/#business' },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <FAQSchema faqs={homepageFAQs} />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a0a0a] min-h-[88vh] flex flex-col" aria-label="Generator Repair Services Gauteng">

        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_generator_repair_services.png"
            alt="Professional generator technician servicing an industrial diesel generator in Gauteng"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          {/* Gradient: heavy left for text legibility, fades right to show technician */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/85 to-[#0a0a0a]/25" />
          {/* Bottom fade into trust bar */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 w-full">
            <div className="max-w-2xl">

              {/* Eyebrow label */}
              <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-6">
                Gauteng&apos;s Generator Repair Specialists
              </p>

              {/* Main headline */}
              <h1 className="font-black text-white leading-[1.0] mb-3" style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5rem)' }}>
                Power When<br />You Need It.
              </h1>
              <p className="font-black text-[#c8a84b] leading-[1.0] mb-8" style={{ fontSize: 'clamp(2.1rem, 5.5vw, 4.2rem)' }}>
                Fixed Right.<br />The First Time.
              </p>

              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-md">
                Expert generator repair, maintenance and diagnostics you can rely on —
                all brands, all sizes, across all of Gauteng.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0603160484"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                  aria-label="Call Generator Repair Services on 060 316 0484"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  Call 060 316 0484
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-[#c8a84b]/50 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust pillars — fused to bottom of hero */}
        <div className="relative z-10 border-t border-[#c8a84b]/15 bg-black/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-6 md:py-8">
            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
              {trustPillars.map((pillar) => (
                <div key={pillar.heading} className="flex flex-col items-center text-center gap-2.5">
                  <div>{pillar.icon}</div>
                  <dt className="text-white font-bold text-[11px] uppercase tracking-widest leading-tight">
                    {pillar.heading}
                  </dt>
                  <dd className="text-white/45 text-[11px] leading-snug">{pillar.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ─── SERVICES OVERVIEW ───────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10">
            Our Generator Services
          </h2>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/75 mb-6">
                Generator Repair Services is Gauteng&apos;s go-to team for everything
                generator-related. From emergency repairs that get you back online within
                hours, to scheduled maintenance that extends the life of your equipment,
                our certified technicians cover every scenario — residential, commercial
                and industrial.
              </p>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/75 mb-8">
                Our vehicles are stocked with common parts and diagnostic tools, which
                means we resolve most faults on the first visit. No call-out to assess,
                then another to fix — we arrive prepared and we get the job done.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {services.map((service) => (
                  <li key={service.href} className="border-b border-[#1a1a1a]/10 pb-2">
                    <Link href={service.href} className="text-[#1a1a1a] hover:text-[#c8a84b] transition-colors font-medium text-sm">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/generator-repair-technician.png"
                alt="Certified generator repair technician working on a diesel generator in Gauteng"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border border-[#c8a84b]/25 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white" aria-labelledby="why-us-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
            <div>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] md:sticky md:top-8">
                Why Gauteng<br />Businesses<br />Trust Us
              </h2>
              <div className="mt-6 w-12 h-1 bg-[#c8a84b]" />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Experience &amp; Certification</h3>
                <p className="text-base leading-relaxed text-[#1a1a1a]/70">
                  With over a decade in the generator repair industry, our technicians have worked on
                  virtually every make and model available in South Africa. We hold certifications across
                  major brands and continuously train on new systems — your equipment is always in expert
                  hands, not guesswork.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Response Time &amp; Emergency Availability</h3>
                <p className="text-base leading-relaxed text-[#1a1a1a]/70">
                  When your generator fails during loadshedding, waiting is not an option. Our technicians
                  are deployed across Gauteng so that most callouts receive an on-site response within
                  2–4 hours. Same-day service is standard, not a premium add-on.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">Transparent Pricing &amp; Workmanship Guarantee</h3>
                <p className="text-base leading-relaxed text-[#1a1a1a]/70">
                  You will receive a clear written assessment before a single bolt is turned. Our pricing
                  is honest, our parts are quality-sourced, and every repair is backed by a workmanship
                  guarantee. If something we fixed fails again, we come back and sort it out — no arguments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AREAS WE SERVE ──────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="areas-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Generator Repairs Across Gauteng
          </h2>
          <p className="text-lg leading-relaxed text-[#1a1a1a]/70 mb-10 max-w-3xl">
            From the corporate parks of Sandton and Midrand to the farms outside Vereeniging, we cover
            every part of Gauteng. Our mobile technicians travel to you — no drop-off required.
          </p>
          <nav aria-label="Service areas in Gauteng">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link href={`/generator-repairs-${area.slug}`} className="text-sm text-[#1a1a1a]/80 hover:text-[#c8a84b] transition-colors font-medium">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ─── EMERGENCY CTA ───────────────────────────────────────────────── */}
      <section className="bg-[#b91c1c] text-white" aria-label="Emergency generator repair callout">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-3">
                Generator Emergency?<br />We Respond Fast.
              </h2>
              <p className="text-white/80 text-lg max-w-xl">
                Do not let a generator failure disrupt your operations or leave your property without power.
                Our Gauteng-wide emergency team is ready to mobilise now.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#b91c1c] font-black text-2xl hover:bg-[#f5f4f0] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#b91c1c]"
                aria-label="Call our emergency line: 060 316 0484"
              >
                060 316 0484
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COST TEASER ─────────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white border-b border-[#1a1a1a]/10" aria-labelledby="cost-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 id="cost-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
              What Does Generator Repair Cost in Gauteng?
            </h2>
            <p className="text-base leading-relaxed text-[#1a1a1a]/70 mb-4">
              Repair costs depend on the fault, the generator brand, its age and whether parts need to be
              sourced. Minor faults such as a faulty AVR or a blocked fuel filter are typically resolved at
              significantly lower cost than a full engine overhaul or rewind. We provide honest written
              quotes before starting — no surprises.
            </p>
            <Link href="/generator-repair-cost" className="text-[#c8a84b] hover:text-[#1a1a1a] font-semibold transition-colors text-sm tracking-wide uppercase">
              Read our full generator repair cost guide
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ TEASER ──────────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-[#f5f4f0]" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-10">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl space-y-8">
            {homepageFAQs.map((faq) => (
              <div key={faq.question} className="border-b border-[#1a1a1a]/10 pb-8">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-3">{faq.question}</h3>
                <p className="text-base leading-relaxed text-[#1a1a1a]/70">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/faq" className="text-sm font-semibold tracking-wide uppercase text-[#c8a84b] hover:text-[#1a1a1a] transition-colors">
              View all frequently asked questions
            </Link>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
