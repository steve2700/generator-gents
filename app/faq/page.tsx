import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FAQSchema } from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Generator Repair FAQ Gauteng | Cost, Service & Emergency Questions Answered',
  description:
    'Answers to the most common questions about generator repairs, servicing costs, emergency callouts and maintenance in Gauteng. From our certified technicians. Call 060 316 0484.',
  keywords: [
    'generator repair FAQ Gauteng',
    'how much does generator repair cost South Africa',
    'generator service cost Gauteng',
    'emergency generator repair Gauteng',
    'generator maintenance questions',
    'generator not starting Gauteng',
    'load bank testing Gauteng',
    'generator repair warranty South Africa',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/faq',
  },
  openGraph: {
    title: 'Generator Repair FAQ Gauteng | Cost, Service & Emergency Questions',
    description: 'Common questions about generator repairs, costs and maintenance answered by our certified Gauteng technicians.',
    url: 'https://www.generatorrepairservices.co.za/faq',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: 'How much does generator repair cost in South Africa?',
    answer:
      'Generator repair costs depend on the fault, the brand and the parts required. Minor repairs such as oil changes, filter replacements or battery swaps typically range from R500–R1,500. Moderate repairs including AVR replacement, fuel system cleaning or control panel work generally cost R3,000–R8,000. Major overhauls, alternator rewinds or engine rebuilds can exceed R15,000. We provide a written quote before any work begins — no surprises.',
    category: 'Costs & Pricing',
  },
  {
    question: 'Do you offer emergency generator repair services?',
    answer:
      'Yes. We provide same-day emergency callouts across all of Gauteng. Our response team is deployed province-wide and most callouts receive an on-site technician within 2–4 hours of your call. We prioritise businesses, essential services and properties with medical or security dependencies.',
    category: 'Emergency Service',
  },
  {
    question: 'How often should I service my generator?',
    answer:
      'We recommend servicing every 200–250 running hours or at minimum once per year — whichever comes first. For standby generators used regularly during loadshedding, quarterly inspections are advisable. Regular servicing prevents expensive breakdowns, extends equipment lifespan and ensures the generator performs to its rated capacity when you need it.',
    category: 'Maintenance',
  },
  {
    question: 'What generator brands do you repair?',
    answer:
      'We repair all major generator brands including Cummins, Caterpillar, Perkins, FG Wilson, Deutz, Volvo, John Deere, SDMO, Kipor, Ryobi, Honda, Yamaha and Atlas Copco. Our technicians are factory-trained and equipped to work on both diesel and petrol generators of all sizes, from small residential units to large industrial standby systems.',
    category: 'Brands & Types',
  },
  {
    question: 'Can you repair my generator on-site?',
    answer:
      'Yes. Our mobile workshops are fully equipped with diagnostic tools and common spare parts. The vast majority of faults — including AVR replacement, fuel system repairs, control panel work, battery replacement and general servicing — are resolved on-site on the first visit. Major repairs requiring specialist workshop equipment, such as alternator rewinding, are handled at our facility.',
    category: 'On-Site Service',
  },
  {
    question: 'What areas in Gauteng do you cover?',
    answer:
      'We cover the entire Gauteng province: Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg, Benoni, Germiston, Alberton, Edenvale, Krugersdorp, Springs, Soweto, Fourways and Vereeniging — and all surrounding suburbs and industrial areas.',
    category: 'Service Areas',
  },
  {
    question: 'Do your repairs come with a warranty?',
    answer:
      'Yes. All repairs are backed by a minimum 3-month workmanship warranty. Parts installed carry the relevant manufacturer warranty. If a fault we repaired recurs within the warranty period, we return and resolve it at no charge — no questions asked.',
    category: 'Warranty',
  },
  {
    question: 'Why is my generator not starting?',
    answer:
      'The most common causes are: a flat or failed battery, fuel issues (empty tank, stale or contaminated diesel, clogged fuel filters), a faulty starter motor, glow plug failure (diesel), spark plug failure (petrol), or a control panel fault preventing the auto-start sequence. Our technicians carry diagnostic equipment and common parts to resolve most starting faults on the first visit.',
    category: 'Troubleshooting',
  },
  {
    question: 'What is load bank testing and do I need it?',
    answer:
      'Load bank testing applies a controlled electrical load to your generator to verify it can deliver its full rated output under realistic conditions. It also clears wet stacking — unburned fuel deposits that build up in diesel generators that run infrequently or at low load. We recommend annual load bank testing for any critical standby system, and it is often required by insurance providers for compliance certification.',
    category: 'Testing',
  },
  {
    question: 'How long does a generator repair typically take?',
    answer:
      'Minor repairs such as battery replacement or oil changes take 1–2 hours on-site. Moderate repairs including AVR replacement or fuel system cleaning take 2–4 hours. Major repairs like alternator rewinding or engine overhauls typically require 2–5 days depending on parts availability. We give you a realistic time estimate before work begins.',
    category: 'Repair Times',
  },
  {
    question: 'Do you stock generator parts and spares?',
    answer:
      'Yes. We stock a broad range of genuine and quality-matched aftermarket parts including filters, belts, batteries, AVRs, control panels, fuel pumps, injectors and more. We can source parts for any generator brand and provide competitive pricing. Parts sourced through us come with full supplier traceability.',
    category: 'Parts & Spares',
  },
  {
    question: 'Can you install a new generator?',
    answer:
      'Yes. We provide complete installation services: site assessment, generator sizing advice, base or mounting installation, fuel tank and supply line setup, automatic or manual changeover switch wiring, full electrical connections and commissioning. All installations comply with SANS standards and local authority requirements.',
    category: 'Installation',
  },
]

// Group faqs by category for the sidebar nav
const categories = [...new Set(faqs.map((f) => f.category))]

const relatedLinks = [
  { href: '/generator-repair-cost', label: 'Full Generator Repair Cost Guide' },
  { href: '/services', label: 'All Generator Services' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/areas', label: 'Service Areas' },
  { href: '/contact', label: 'Get a Free Quote' },
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumb ── */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]} />
        </div>
      </div>

      {/* ── Page hero ── */}
      <section className="bg-[#0a0a0a] border-b border-[#c8a84b]/15">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-[#c8a84b] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Got Questions?
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 max-w-3xl">
            Frequently Asked Questions
          </h1>
          <p className="text-white/55 text-lg max-w-2xl leading-relaxed">
            Answers to the most common questions about generator repairs, servicing costs,
            emergency callouts and maintenance across Gauteng.
          </p>
        </div>
      </section>

      {/* ── Category chips ── */}
      <section className="bg-white border-b border-[#1a1a1a]/8 overflow-x-auto" aria-label="FAQ categories">
        <div className="max-w-6xl mx-auto px-6">
          <ul className="flex items-center gap-1.5 py-3 min-w-max">
            {categories.map((cat) => (
              <li key={cat}>
                <a
                  href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                  className="inline-block px-3.5 py-1.5 text-[12px] font-medium text-[#1a1a1a]/65 hover:text-[#c8a84b] hover:bg-[#f5f4f0] border border-transparent hover:border-[#c8a84b]/25 transition-colors whitespace-nowrap"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Main content: FAQs + sidebar ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 lg:gap-16 items-start">

          {/* FAQ list */}
          <div>
            {/* Group by category */}
            {categories.map((cat) => {
              const catFaqs = faqs.filter((f) => f.category === cat)
              const anchorId = cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')
              return (
                <div key={cat} id={anchorId} className="mb-12 scroll-mt-24">
                  {/* Category label */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="block w-3 h-3 bg-[#c8a84b]" aria-hidden="true" />
                    <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-[#c8a84b]">
                      {cat}
                    </h2>
                  </div>

                  <div className="space-y-0 border-t border-[#1a1a1a]/10">
                    {catFaqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group border-b border-[#1a1a1a]/10"
                      >
                        <summary className="flex items-start justify-between gap-4 py-5 cursor-pointer list-none select-none">
                          <h3 className="text-base font-bold text-[#1a1a1a] leading-snug group-open:text-[#c8a84b] transition-colors pr-2">
                            {faq.question}
                          </h3>
                          {/* Plus / minus toggle */}
                          <span className="shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center border border-[#1a1a1a]/20 group-open:border-[#c8a84b] group-open:bg-[#c8a84b] transition-colors">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="group-open:hidden">
                              <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                            </svg>
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="hidden group-open:block text-white">
                              <path d="M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                            </svg>
                          </span>
                        </summary>
                        <div className="pb-5 pr-9">
                          <p className="text-[#1a1a1a]/65 text-base leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )
            })}

            {/* Still have questions */}
            <div className="mt-4 p-7 bg-[#0a0a0a] border border-[#c8a84b]/20">
              <div className="w-8 h-0.5 bg-[#c8a84b] mb-4" />
              <h2 className="text-xl font-black text-white mb-2">
                Still Have Questions?
              </h2>
              <p className="text-white/50 text-sm leading-relaxed mb-5">
                Our technicians are happy to answer any question about your specific
                generator — call us or send a message and we will get back to you promptly.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0603160484"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  Call 060 316 0484
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold text-sm hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
                >
                  Send a Message
                </Link>
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <aside className="hidden lg:block space-y-6 sticky top-24" aria-label="Related resources">

            {/* Quick call card */}
            <div className="bg-[#b91c1c] p-6">
              <p className="text-white/70 text-xs font-bold tracking-[0.25em] uppercase mb-3">
                Emergency?
              </p>
              <p className="text-white font-black text-lg leading-snug mb-4">
                Generator down?<br />We respond fast.
              </p>
              <a
                href="tel:0603160484"
                className="flex items-center justify-center gap-2 w-full py-3 bg-white text-[#b91c1c] font-black text-base hover:bg-[#f5f4f0] transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                060 316 0484
              </a>
            </div>

            {/* Related links */}
            <div className="border border-[#1a1a1a]/10 bg-[#f5f4f0]">
              <div className="px-5 py-4 border-b border-[#1a1a1a]/10">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/40">
                  Helpful Links
                </p>
              </div>
              <ul className="divide-y divide-[#1a1a1a]/8">
                {relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center justify-between px-5 py-3.5 text-sm text-[#1a1a1a]/70 hover:text-[#c8a84b] hover:bg-white transition-colors group"
                    >
                      {link.label}
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover:opacity-100 transition-opacity text-[#c8a84b]" aria-hidden="true">
                        <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories nav */}
            <div className="border border-[#1a1a1a]/10">
              <div className="px-5 py-4 border-b border-[#1a1a1a]/10 bg-[#f5f4f0]">
                <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#1a1a1a]/40">
                  Jump to Category
                </p>
              </div>
              <ul className="divide-y divide-[#1a1a1a]/8">
                {categories.map((cat) => (
                  <li key={cat}>
                    <a
                      href={`#${cat.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`}
                      className="flex items-center gap-2.5 px-5 py-3 text-sm text-[#1a1a1a]/65 hover:text-[#c8a84b] hover:bg-[#f5f4f0] transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]/40 group-hover:bg-[#c8a84b] transition-colors shrink-0" />
                      {cat}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#0a0a0a] text-white border-t border-[#c8a84b]/10" aria-label="Contact CTA">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl md:text-2xl font-black mb-2">
                Need Generator Service in Gauteng?
              </h2>
              <p className="text-white/45 text-sm">
                Same-day callouts · All brands · All Gauteng areas
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                060 316 0484
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 text-white font-semibold text-base hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
