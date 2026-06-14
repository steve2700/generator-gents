import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Generator Maintenance Plans Gauteng | Scheduled Service Contracts',
  description:
    'Generator maintenance contracts and scheduled service plans across Gauteng. We track service intervals, contact you when due, and handle everything. Priority response for contract clients. Call 076 347 3736.',
  keywords: [
    'generator maintenance plan Gauteng',
    'generator service contract Gauteng',
    'generator maintenance contract Johannesburg',
    'scheduled generator maintenance Gauteng',
    'generator maintenance agreement Gauteng',
    'generator preventative maintenance Gauteng',
    'commercial generator maintenance Gauteng',
    'standby generator maintenance plan',
    'generator service plan Johannesburg',
    'generator compliance maintenance Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorgents.co.za/generator-maintenance',
  },
  openGraph: {
    title: 'Generator Maintenance Plans Gauteng | Scheduled Service Contracts',
    description:
      'Generator maintenance contracts across Gauteng. We track service intervals and handle everything. Priority callout response for contract clients. Call 076 347 3736.',
    url: 'https://www.generatorgents.co.za/generator-maintenance',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const planBenefits = [
  {
    num: '01',
    title: 'We track everything',
    desc: 'We monitor your service intervals and contact you proactively when service is due. No reminders, no missed services.',
  },
  {
    num: '02',
    title: 'Priority callout response',
    desc: 'Contract clients go to the front of the queue. Essential during loadshedding when demand for generator services peaks.',
  },
  {
    num: '03',
    title: 'Discounted rates',
    desc: 'Contract clients receive preferred rates on both scheduled services and emergency repairs — parts and labour.',
  },
  {
    num: '04',
    title: 'Full compliance documentation',
    desc: 'Complete service records, inspection reports, and compliance documentation for insurers and asset management.',
  },
  {
    num: '05',
    title: 'Proactive fault identification',
    desc: 'Every visit includes a deep inspection. Issues are flagged before they cause breakdowns, saving you emergency costs.',
  },
  {
    num: '06',
    title: 'Customised schedule',
    desc: 'Service intervals are set by running hours, calendar, or criticality — tailored to your specific equipment.',
  },
]

const suitedFor = [
  { label: 'Commercial properties', sub: 'Offices, shopping centres, warehouses' },
  { label: 'Industrial operations', sub: 'Factories, processing plants' },
  { label: 'Residential estates', sub: 'Complexes and security estates' },
  { label: 'Essential services', sub: 'Medical facilities, data centres' },
  { label: 'Construction sites', sub: 'Prime power applications' },
  { label: 'Hospitality', sub: 'Hotels, lodges, guest houses' },
]

const relatedServices = [
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/load-bank-testing', label: 'Load Bank Testing', desc: 'Capacity verification' },
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'All faults, all brands' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: '2–4 hr response' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function GeneratorMaintenancePage() {
  return (
    <>
      <ServiceSchema
        name="Generator Maintenance Plans"
        description="Scheduled generator maintenance contracts across Gauteng. Proactive maintenance, priority callout response, compliance documentation. All brands."
        url="/generator-maintenance"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Maintenance Plans' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_generator_repair_services.png"
            alt="Planned maintenance schedule for standby generators across Gauteng businesses"
            fill
            priority
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#c8a84b]" />
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase">
              Maintenance Plans · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Maintenance Plans.<br />
            <span className="text-[#c8a84b]">We Handle Everything.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            We track your service intervals, contact you when due, and handle every aspect of
            your generator's ongoing care. Businesses and property managers across Gauteng rely
            on our contracts to keep standby systems ready for loadshedding.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Priority callout response', 'Service interval tracking', 'Compliance documentation', 'Discounted rates'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6.5" stroke="#c8a84b" strokeWidth="1"/>
                  <path d="M4 7l2 2 4-4" stroke="#c8a84b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/65 text-sm">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+27763473736"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Discuss a Plan
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#c8a84b]/40 text-[#c8a84b] font-semibold text-base hover:bg-[#c8a84b] hover:text-[#0a0a0a] transition-colors"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ── Plan benefits grid ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="benefits-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">What You Get</p>
            <h2 id="benefits-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Everything Included in a Maintenance Plan
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a1a1a]/10">
            {planBenefits.map((item) => (
              <div key={item.num} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.num}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">The Service</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Maintenance Plans That Remove the Guesswork
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  For businesses and homeowners who rely on generator backup power, maintenance
                  contracts offer peace of mind and cost predictability. Generator Gents
                  provides tailored maintenance plans that ensure your generator receives proper
                  care on schedule — without you having to remember service dates or chase down
                  technicians.
                </p>
                <p>
                  Our maintenance agreements are customised to your equipment and usage. We assess
                  your generator type, age, running hours, and criticality to establish an
                  appropriate service schedule. We then track all service intervals, contact you
                  proactively when service is due, and maintain complete records of all work
                  performed.
                </p>
                <p>
                  Maintenance contract clients receive priority scheduling and preferred rates.
                  When your generator needs attention outside scheduled visits, you go to the
                  front of the queue — particularly valuable during extended loadshedding periods
                  when demand for generator services peaks across Gauteng.
                </p>
                <p>
                  Every maintenance visit includes a comprehensive inspection that goes beyond
                  basic servicing. We check for developing problems, test safety systems, verify
                  proper operation under load, and document the overall condition of your
                  equipment. Issues identified during these inspections can be addressed before
                  they cause failures, saving you from emergency repair costs and unexpected
                  downtime.
                </p>
              </div>
            </div>

            {/* Suited for + CTA */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Suited For</p>
              <div className="space-y-0 mb-6">
                {suitedFor.map((item, i) => (
                  <div key={item.label} className={`flex items-center gap-4 py-3.5 ${i < suitedFor.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}>
                    <div>
                      <p className="font-bold text-[#0a0a0a] text-sm">{item.label}</p>
                      <p className="text-xs text-[#1a1a1a]/40">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">Ready to stop worrying?</p>
                <p className="text-white/50 text-sm mb-4">
                  Call to discuss a maintenance plan tailored to your generator and usage.
                </p>
                <a
                  href="tel:+27763473736"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                  </svg>
                  076 347 3736
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="py-12 bg-[#f5f4f0] border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-white border-l-2 border-[#c8a84b]">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="shrink-0 text-[#c8a84b]" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
            </svg>
            <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
              <strong className="text-[#0a0a0a] font-bold">Service coverage:</strong>{' '}
              Maintenance plans are available for generators across all Gauteng areas including
              Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park,
              Boksburg, Benoni, Germiston, Alberton, Fourways, and surrounding regions.{' '}
              <Link href="/areas" className="text-[#c8a84b] hover:text-[#0a0a0a] font-semibold transition-colors">
                View all service areas →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="py-14 bg-white border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-lg font-bold text-[#0a0a0a] mb-6">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-4 bg-[#f5f4f0] border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors"
              >
                <p className="font-bold text-sm text-[#0a0a0a] group-hover:text-[#c8a84b] transition-colors mb-1">{s.label}</p>
                <p className="text-xs text-[#1a1a1a]/45">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Call to action">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">
                Need a Generator Maintenance Plan?
              </h2>
              <p className="text-white/55 text-base leading-relaxed">
                Contact us to discuss a maintenance agreement tailored to your generator,
                usage, and budget. We cover all of Gauteng.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+27763473736"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                076 347 3736
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold text-base hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-14 md:hidden" aria-hidden="true" />
    </>
  )
}
