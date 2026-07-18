import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQSchema from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Generator Gents Gauteng | Generator Repairs, Servicing & Maintenance',
  description:
    "Generator Gents: Power. Precision. Professionalism. Gauteng's trusted generator repair specialists. Same-day emergency callouts, all brands, diesel & petrol. Serving Johannesburg, Pretoria, Sandton, Centurion & all Gauteng areas. Call 076 347 3736.",
  keywords: [
    'Generator Gents',
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
  alternates: { canonical: 'https://www.generatorgents.co.za' },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://www.generatorgents.co.za',
    siteName: 'Generator Gents',
    title: 'Generator Gents Gauteng | Power. Precision. Professionalism.',
    description: "Gauteng's trusted generator repair specialists. Same-day emergency callouts, all brands, diesel & petrol. Call 076 347 3736.",
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Generator Gents Gauteng', type: 'image/jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Gents Gauteng | Power. Precision. Professionalism.',
    description: 'Same-day emergency callouts. All brands. Diesel & petrol generators. Serving all of Gauteng. Call 076 347 3736.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const PHONE_DISPLAY = '076 347 3736'
const PHONE_TEL = '+27763473736'

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'All faults diagnosed & fixed' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day, province-wide' },
  { href: '/generator-installation', label: 'Generator Installation', desc: 'Full setup & commissioning' },
  { href: '/load-bank-testing', label: 'Load Bank Testing', desc: 'Capacity verification' },
  { href: '/avr-repairs', label: 'AVR Repairs', desc: 'Stable voltage output' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'Controllers & relays' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs', desc: 'Injectors & fuel pumps' },
  { href: '/generator-rewinding', label: 'Generator Rewinding', desc: 'Alternator rewinding' },
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
  { heading: 'Expert Technicians', body: 'Skilled. Certified. Reliable.' },
  { heading: 'Fast Response', body: 'Up and running, sooner.' },
  { heading: 'All Generator Brands', body: 'Diesel · Petrol · Gas' },
  { heading: 'Quality Repairs', body: 'Done right. Built to last.' },
  { heading: 'Honest Service', body: 'Clear quotes. No surprises.' },
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
    answer: 'We cover the entire Gauteng province: Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg, Benoni, Germiston, Alberton, Edenvale, Krugersdorp, Springs, Soweto, Fourways and Vereeniging.',
  },
]

const whyReasons = [
  {
    num: '01',
    title: 'Certified Across All Major Brands',
    body: 'Factory certifications for Cummins, Perkins, Caterpillar, Deutz, Volvo and more. When we open your generator, we know it, with no learning on your time and your budget.',
  },
  {
    num: '02',
    title: 'Same-Day Emergency Response',
    body: 'Generator down during loadshedding? We deploy province-wide. Most Gauteng callouts receive an on-site technician within 2–4 hours. Same-day service is standard, not a premium.',
  },
  {
    num: '03',
    title: 'First-Visit Resolution',
    body: 'Our vehicles carry diagnostic equipment and a comprehensive stock of common parts. We arrive prepared and we complete the work. No second appointment needed.',
  },
  {
    num: '04',
    title: 'Written Quote Before Any Work',
    body: 'A clear written assessment of the fault and the cost to fix it before a single bolt is turned. No hidden fees, no scope creep, no surprises on the invoice.',
  },
  {
    num: '05',
    title: 'Workmanship Guarantee',
    body: 'Every repair is backed by a workmanship guarantee. If something we fixed fails again within the warranty period, we return and resolve it. No arguments, no charge.',
  },
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://www.generatorgents.co.za/#business',
      name: 'Generator Gents',
      slogan: 'Power. Precision. Professionalism.',
      description: 'Generator Gents: expert generator repair, servicing and maintenance across Gauteng.',
      url: 'https://www.generatorgents.co.za',
      telephone: '+27763473736',
      email: 'info@generatorgents.co.za',
      foundingDate: '2009',
      priceRange: '$$',
      currenciesAccepted: 'ZAR',
      paymentAccepted: 'Cash, EFT',
      areaServed: { '@type': 'State', name: 'Gauteng', containsPlace: areas.map((a) => ({ '@type': 'City', name: a.name })) },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Generator Services',
        itemListElement: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.label } })),
      },
      image: 'https://www.generatorgents.co.za/og-image.jpg',
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.generatorgents.co.za/#website',
      url: 'https://www.generatorgents.co.za',
      name: 'Generator Gents',
      publisher: { '@id': 'https://www.generatorgents.co.za/#business' },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <FAQSchema faqs={homepageFAQs} />

      {/* ===================================================================
          HERO - editorial, dark, heavy type
      =================================================================== */}
      <section
        className="relative overflow-hidden bg-[#0a0a0a] min-h-[74vh] flex flex-col"
        aria-label="Generator Gents, generator repair specialists in Gauteng"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generator-gents-hero.png"
            alt="Industrial diesel generator in a Generator Gents workshop, Gauteng"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-center"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/40" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 w-full">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <p className="text-[#c8a84b] text-xs font-bold tracking-[0.45em] uppercase">
                  Generator Gents Installation & Repairs, South Africa
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center gap-1.5 text-white/50 hover:text-[#c8a84b] text-xs font-semibold tracking-wide transition-colors"
                >
                  Call {PHONE_DISPLAY} Now
                </a>
              </div>
              <div className="w-16 h-[3px] bg-[#c8a84b] mb-6" />
              <h1
                className="font-black text-white tracking-tight leading-[0.95] mb-6"
                style={{ fontSize: 'clamp(2.1rem, 5vw, 4.2rem)' }}
              >
                Power.<br />
                <span className="text-[#c8a84b]">Precision.</span><br />
                Professionalism.
              </h1>
              <p className="text-white/65 text-base md:text-lg leading-relaxed mb-8 max-w-xl text-pretty">
                Expert generator repair, maintenance and diagnostics across Gauteng
                and its outskirts, all brands, all sizes, fixed right the first time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center px-9 py-4 bg-[#b91c1c] text-white font-black text-lg tracking-wide hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
                  aria-label={`Call Generator Gents on ${PHONE_DISPLAY}`}
                >
                  Call {PHONE_DISPLAY}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-9 py-4 border border-[#c8a84b]/50 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust pillars - text only */}
        <div className="relative z-10 border-t border-[#c8a84b]/15 bg-black/60 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-6 py-7 md:py-9">
            <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {trustPillars.map((pillar) => (
                <div key={pillar.heading} className="border-l-2 border-[#c8a84b]/40 pl-4">
                  <dt className="text-white font-bold text-[12px] uppercase tracking-widest leading-tight mb-1">{pillar.heading}</dt>
                  <dd className="text-white/45 text-[12px] leading-snug">{pillar.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===================================================================
          SERVICES - clean text-only grid
      =================================================================== */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">What We Do</p>
              <h2 id="services-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight leading-[0.95] text-balance">
                Every Generator Service,<br />Under One Roof
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-[#1a1a1a]/45 hover:text-[#c8a84b] transition-colors shrink-0"
            >
              View all services
            </Link>
          </div>

          {/* Service tile grid - text only */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-px bg-[#1a1a1a]/10">
            {services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white hover:bg-[#0a0a0a] transition-colors duration-300 p-7 md:p-8 flex items-start gap-5"
              >
                <span className="text-[#c8a84b]/35 font-black text-2xl leading-none group-hover:text-[#c8a84b] transition-colors shrink-0 w-10">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-black text-lg text-[#1a1a1a] group-hover:text-white transition-colors leading-snug mb-1">
                    {service.label}
                  </p>
                  <p className="text-sm text-[#1a1a1a]/45 group-hover:text-white/45 transition-colors leading-snug">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================================
          WHY CHOOSE US - dark, numbered reasons + image
      =================================================================== */}
      <section className="bg-[#0a0a0a]" aria-labelledby="why-us-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-0">

            {/* Left: image - full height (image 2 of 2) */}
            <div className="relative min-h-[460px] lg:min-h-full overflow-hidden">
              <Image
                src="/images/generator-gents-technician.png"
                alt="Generator Gents certified technician servicing a diesel generator in Gauteng"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/70" />
              {/* Stats overlay - text only */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '15+', label: 'Years Experience' },
                    { value: '18', label: 'Gauteng Areas' },
                    { value: '2–4hr', label: 'Emergency Response' },
                    { value: '100%', label: 'Work Guaranteed' },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#0a0a0a]/70 backdrop-blur-sm px-4 py-3 border-l-2 border-[#c8a84b]">
                      <p className="text-[#c8a84b] font-black text-2xl leading-none">{s.value}</p>
                      <p className="text-white/50 text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: reasons */}
            <div className="py-16 md:py-24 px-8 md:px-12 lg:px-16">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.4em] uppercase mb-5">Why Choose Us</p>
              <h2 id="why-us-heading" className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3 text-balance">
                Why Gauteng<br />Businesses Trust Us
              </h2>
              <div className="w-12 h-[3px] bg-[#c8a84b] mb-10" />

              <div className="divide-y divide-white/[0.07]">
                {whyReasons.map((item) => (
                  <div key={item.num} className="py-6 flex gap-6 group">
                    <span className="text-[#c8a84b]/30 font-black text-sm leading-none shrink-0 mt-1 group-hover:text-[#c8a84b] transition-colors w-7">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-bold text-white text-base mb-1.5 group-hover:text-[#c8a84b] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-7 py-3 border border-white/15 text-white text-sm font-semibold hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
                >
                  About Generator Gents
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3 bg-[#c8a84b] text-[#0a0a0a] text-sm font-bold hover:bg-yellow-400 transition-colors"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          AREAS - region columns, text only
      =================================================================== */}
      <section className="py-24 md:py-32 bg-[#f5f4f0]" aria-labelledby="areas-heading">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">Where We Work</p>
              <h2 id="areas-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a1a1a] tracking-tight leading-[0.95] text-balance">
                Generator Repairs<br />Across All of Gauteng
              </h2>
            </div>
            <Link
              href="/areas"
              className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-[#1a1a1a]/45 hover:text-[#c8a84b] transition-colors shrink-0"
            >
              View all areas
            </Link>
          </div>

          {/* Region columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10 mb-10">
            {[
              {
                region: 'Johannesburg & CBD',
                areas: ['Johannesburg', 'Soweto', 'Randburg', 'Roodepoort', 'Krugersdorp', 'Fourways'],
                slugs: ['johannesburg', 'soweto', 'randburg', 'roodepoort', 'krugersdorp', 'fourways'],
              },
              {
                region: 'Pretoria & North',
                areas: ['Pretoria', 'Centurion', 'Midrand', 'Sandton'],
                slugs: ['pretoria', 'centurion', 'midrand', 'sandton'],
              },
              {
                region: 'East Rand',
                areas: ['Kempton Park', 'Boksburg', 'Benoni', 'Germiston', 'Alberton', 'Edenvale', 'Springs'],
                slugs: ['kempton-park', 'boksburg', 'benoni', 'germiston', 'alberton', 'edenvale', 'springs'],
              },
              {
                region: 'South Gauteng',
                areas: ['Vereeniging'],
                slugs: ['vereeniging'],
              },
            ].map((group) => (
              <div key={group.region} className="bg-white p-7 md:p-8">
                <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#c8a84b] mb-5 pb-3 border-b border-[#1a1a1a]/8">
                  {group.region}
                </p>
                <ul className="flex flex-col gap-3">
                  {group.areas.map((area, i) => (
                    <li key={area}>
                      <Link
                        href={`/generator-repairs-${group.slugs[i]}`}
                        className="block text-sm font-medium text-[#1a1a1a]/65 hover:text-[#c8a84b] transition-colors"
                      >
                        {area}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-[#1a1a1a]/45 text-base max-w-2xl leading-relaxed">
            Our mobile technicians travel to your site across all of Gauteng,
            no drop-off required. From Sandton corporate parks to Vereeniging
            industrial zones and everywhere in between.
          </p>
        </div>
      </section>

      {/* ===================================================================
          EMERGENCY CTA - full-width red impact
      =================================================================== */}
      <section className="relative bg-[#b91c1c] text-white overflow-hidden" aria-label="Emergency generator repair callout">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)', backgroundSize: '8px 8px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-white/55 text-[11px] font-bold tracking-[0.4em] uppercase mb-4">Emergency Service</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-5 text-balance">
                Generator Down?<br />We Respond Fast.
              </h2>
              <p className="text-white/75 text-lg leading-relaxed">
                Same-day emergency callouts across all of Gauteng. Most areas receive
                a technician within 2–4 hours, arriving in a fully stocked vehicle ready to repair.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#b91c1c] font-black text-2xl tracking-wide hover:bg-[#f5f4f0] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#b91c1c]"
              >
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/emergency-generator-repair"
                className="text-white/55 text-xs hover:text-white transition-colors underline underline-offset-4"
              >
                Learn about our emergency service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          COST TEASER - text only
      =================================================================== */}
      <section className="py-24 md:py-32 bg-white" aria-labelledby="cost-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">Pricing</p>
              <h2 id="cost-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a1a1a] tracking-tight leading-[0.97] mb-6 text-balance">
                What Does Generator<br />Repair Cost in Gauteng?
              </h2>
              <div className="w-12 h-[3px] bg-[#c8a84b]" />
            </div>
            <div>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/65 mb-5">
                Repair costs vary depending on the fault, the brand, age and parts required.
                Minor issues like fuel filters or battery swaps are a fraction of the cost
                of a full engine overhaul or alternator rewind.
              </p>
              <p className="text-lg leading-relaxed text-[#1a1a1a]/65 mb-8">
                We provide honest written quotes before starting. A proper assessment,
                a clear number, then you decide. No surprise charges when the invoice arrives.
              </p>
              <Link
                href="/generator-repair-cost"
                className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-[#c8a84b] hover:text-[#1a1a1a] transition-colors"
              >
                Read our full repair cost guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          FAQ - accordion + sticky left
      =================================================================== */}
      <section className="py-24 md:py-32 bg-[#f5f4f0]" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-20 items-start">

            {/* Left sticky */}
            <div className="lg:sticky lg:top-28">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.4em] uppercase mb-4">FAQ</p>
              <h2 id="faq-heading" className="text-3xl md:text-4xl font-black text-[#1a1a1a] tracking-tight leading-tight mb-5 text-balance">
                Common Questions,<br />Straight Answers
              </h2>
              <div className="w-12 h-[3px] bg-[#c8a84b] mb-6" />
              <p className="text-[#1a1a1a]/50 text-base leading-relaxed mb-8 max-w-xs">
                Everything you need to know about generator repairs, costs and maintenance
                in Gauteng, answered by our technicians.
              </p>
              <Link
                href="/faq"
                className="inline-flex items-center px-6 py-3 bg-[#1a1a1a] text-white text-sm font-bold hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
              >
                View all FAQs
              </Link>
            </div>

            {/* Right: accordion */}
            <div className="border-t border-[#1a1a1a]/10">
              {homepageFAQs.map((faq) => (
                <details key={faq.question} className="group border-b border-[#1a1a1a]/10">
                  <summary className="flex items-start justify-between gap-4 py-6 cursor-pointer list-none select-none">
                    <h3 className="text-lg font-bold text-[#1a1a1a] leading-snug group-open:text-[#c8a84b] transition-colors pr-2">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 mt-1 text-[#c8a84b] font-black text-xl leading-none transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <div className="pb-6 pr-9">
                    <p className="text-[#1a1a1a]/60 text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          FINAL CTA STRIP
      =================================================================== */}
      <section className="bg-[#0a0a0a]" aria-label="Final call to action">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/[0.07]">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3 text-balance">
                Ready to Get Your Generator Fixed?
              </h2>
              <p className="text-white/40 text-base">
                Emergency or planned. Same-day callouts across all of Gauteng.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] text-white font-black text-base tracking-wide hover:bg-red-800 transition-colors"
              >
                Call {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/15 text-white font-semibold text-base hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Quick nav */}
          <nav aria-label="Quick links" className="flex flex-wrap gap-x-6 gap-y-2 pt-8">
            {[
              { href: '/services', label: 'All Services' },
              { href: '/areas', label: 'Service Areas' },
              { href: '/generator-repair-cost', label: 'Repair Costs' },
              { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
              { href: '/generator-maintenance', label: 'Maintenance Plans' },
              { href: '/faq', label: 'FAQ' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-white/25 hover:text-[#c8a84b] text-xs transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
