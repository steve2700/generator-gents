import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Emergency Generator Repair Gauteng | Same-Day Callouts 24/7',
  description:
    'Emergency generator repair and same-day callouts across Gauteng. Generator down during loadshedding? Technicians dispatched fast with parts on board. SANS compliant. Call 060 316 0484 now.',
  keywords: [
    'emergency generator repair Gauteng',
    'emergency generator repair Johannesburg',
    'same day generator repair Gauteng',
    'generator breakdown Gauteng',
    'generator not starting Gauteng',
    'generator fault Gauteng',
    'emergency generator callout Johannesburg',
    'generator repair during loadshedding',
    'after hours generator repair Gauteng',
    '24 hour generator repair Gauteng',
    'generator technician same day Gauteng',
    'standby generator failure Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/emergency-generator-repair',
  },
  openGraph: {
    title: 'Emergency Generator Repair Gauteng | Same-Day Callouts 24/7',
    description:
      'Generator down during loadshedding? Emergency callouts across all of Gauteng. Technicians dispatched fast with diagnostic equipment and parts on board. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/emergency-generator-repair',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const responseSteps = [
  {
    step: '01',
    title: 'Call Our Emergency Line',
    desc: 'Reach us on 060 316 0484. We take your details, assess the urgency of your situation, and confirm a technician is on the way.',
  },
  {
    step: '02',
    title: 'Technician Dispatched',
    desc: 'A technician heads to you with diagnostic equipment and a comprehensive stock of common parts, sensors, batteries, belts, and filters.',
  },
  {
    step: '03',
    title: 'On-Site Diagnosis',
    desc: 'We diagnose the fault fully before quoting. You get a clear explanation of what failed, why it failed, and exactly what the repair costs.',
  },
  {
    step: '04',
    title: 'Repair & Restore Power',
    desc: 'Most common failures are resolved in a single visit. We restore your generator to full operation and run a functional test before leaving.',
  },
]

const faultTypes = [
  {
    num: '01',
    title: 'Generator fails to start',
    body: 'Flat starter battery, faulty solenoid, flooded engine, low oil shutdown, control board fault — we diagnose and repair the root cause on-site.',
  },
  {
    num: '02',
    title: 'Generator starts but trips off',
    body: 'Overload conditions, coolant temperature faults, low oil pressure, AVR failure, or governor problems causing shutdown under load.',
  },
  {
    num: '03',
    title: 'No output voltage',
    body: 'AVR failure, excitation winding faults, or control panel issues resulting in a running generator that produces no usable power.',
  },
  {
    num: '04',
    title: 'Fuel system failure',
    body: 'Blocked fuel filters, contaminated diesel, failed lift pump, or air in the fuel system preventing the engine from sustaining operation.',
  },
  {
    num: '05',
    title: 'Control panel fault codes',
    body: 'AMF and ATS controller faults including sensor alarms, communication errors, and configuration issues preventing automatic operation.',
  },
  {
    num: '06',
    title: 'Overheating & coolant faults',
    body: 'Blocked radiators, coolant leaks, failed thermostats, and low coolant levels causing high-temperature shutdowns under load.',
  },
]

const relatedServices = [
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'Full repair service' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'AMF / ATS controllers' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs', desc: 'Fuel lines & tanks' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Prevent the next failure' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function EmergencyGeneratorRepairPage() {
  return (
    <>
      <ServiceSchema
        name="Emergency Generator Repair"
        description="Emergency generator repair and same-day callouts across Gauteng. Technicians dispatched with diagnostic equipment and parts on board. Fast response when your generator fails during loadshedding or a critical outage."
        url="/emergency-generator-repair"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Emergency Callouts' },
            ]}
          />
        </div>
      </div>

      {/* ── Urgent Banner ── */}
      <div className="bg-[#b91c1c] text-white py-3.5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <p className="text-sm md:text-base font-semibold tracking-wide">
            Generator emergency? Technicians are on standby —
          </p>
          <a
            href="tel:0603160484"
            className="text-sm md:text-base font-black underline underline-offset-2 hover:no-underline"
          >
            Call 060 316 0484 now
          </a>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/emergency-generator-repair.png"
            alt="Emergency generator repair technician diagnosing a failed generator on-site in Gauteng"
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
              Emergency Callouts · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Emergency Generator Repair.<br />
            <span className="text-[#c8a84b]">Same-Day Response, Gauteng-Wide.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            When your generator fails during loadshedding or a critical outage, every minute of
            downtime has a cost. We dispatch technicians fast — with diagnostic equipment and parts
            on board — to get your power restored the same day.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Same-day response', 'Parts carried on-site', 'Upfront diagnosis & pricing', 'All generator makes and models'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
                <span className="text-white/65 text-sm">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0603160484"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
            >
              Call 060 316 0484
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

      {/* ── How We Respond ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="response-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">How It Works</p>
            <h2 id="response-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              From Your Call to Power Restored
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
            {responseSteps.map((item) => (
              <div key={item.step} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.step}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy + fault types ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">

            {/* Left — body copy */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">The Service</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Fast Emergency Response Across All of Gauteng
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  A generator failure during loadshedding or a critical power outage is not a
                  scheduled problem. Generator Repair Services provides emergency callout response
                  across all of Gauteng, with technicians available to respond the same day in most
                  cases. We understand that downtime is not just an inconvenience — for businesses,
                  it carries a direct financial cost with every minute that passes.
                </p>
                <p>
                  Our emergency technicians arrive equipped to handle the most common generator
                  failures without needing to return for parts. Each vehicle carries diagnostic
                  equipment, starter batteries, common sensors and switches, belts, fuel filters,
                  oil, and other frequently needed components. This preparation means the majority
                  of emergency repairs are completed during the first visit.
                </p>
                <p>
                  We operate across a broad range of generator types and makes — diesel standby
                  generators for commercial, industrial, and residential properties. Whether the
                  fault lies in the engine, alternator, fuel system, control panel, or electrical
                  connections, our technicians have the experience to diagnose it correctly and
                  restore operation quickly.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-10 relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/emergency-generator-callout.png"
                  alt="Generator Repair Services technician on emergency callout diagnosing a failed standby generator at a commercial property in Gauteng"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent px-5 py-4">
                  <p className="text-white/80 text-xs">Emergency callout — same-day response across Gauteng</p>
                </div>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70 mt-8">
                <p>
                  Before any repair begins, we provide a full upfront diagnosis. You receive a
                  clear explanation of what failed, what caused the fault, and exactly what the
                  repair will cost. There are no surprise invoices. If a required part is not
                  on the vehicle, we communicate that immediately and source it as fast as possible
                  to minimise your total downtime.
                </p>
                <p>
                  Critical operations — data centres, medical facilities, cold chain logistics,
                  retail operations, and manufacturing plants — receive priority assessment when
                  they call. We recognise that different facilities have different consequences
                  from extended downtime, and we allocate our resources to reflect that reality.
                </p>
              </div>
            </div>

            {/* Right — fault types */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Common Fault Types</p>
              {faultTypes.map((item, i) => (
                <div key={item.num} className={`flex gap-5 py-5 ${i < faultTypes.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}>
                  <span className="text-[#c8a84b]/40 font-black text-[22px] leading-none w-8 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[#0a0a0a] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">Generator down right now?</p>
                <p className="text-white/50 text-sm mb-4">Call our emergency line for same-day response.</p>
                <a
                  href="tel:0603160484"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  060 316 0484
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect — image break ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="expect-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image 2 */}
            <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
              <Image
                src="/images/generator-repair-on-site.png"
                alt="Generator Repair Services technician testing a commercial generator after emergency repair in Johannesburg"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">What to Expect</p>
              <h2 id="expect-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Honest Diagnosis. No Surprises.
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base leading-relaxed text-[#1a1a1a]/70">
                <p>
                  When our technician arrives, the first step is always a full diagnostic assessment.
                  We do not quote before we understand the fault. This means you get an accurate
                  repair cost based on what is actually wrong — not a guess.
                </p>
                <p>
                  Once you approve the quote, repair work begins immediately. We keep you informed
                  throughout and confirm the generator is running correctly before leaving your site.
                  A post-repair functional test under realistic load conditions is part of every
                  emergency callout.
                </p>
                <p>
                  If the fault requires parts outside our stock, we source them with urgency and
                  advise on the fastest available timeline. In some cases, a temporary interim
                  solution can be arranged while waiting on parts. We keep the communication
                  clear so you can plan accordingly.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ['Upfront pricing', 'No quote without full diagnosis'],
                  ['Post-repair load test', 'Confirmed working before we leave'],
                  ['All makes & models', 'Diesel standby generators'],
                  ['Parts on board', 'Most repairs in one visit'],
                ].map(([title, sub]) => (
                  <div key={title} className="p-4 bg-white border border-[#1a1a1a]/8">
                    <p className="font-bold text-[#0a0a0a] text-sm mb-0.5">{title}</p>
                    <p className="text-xs text-[#1a1a1a]/50">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage ── */}
      <section className="py-12 bg-white border-t border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
            <p className="text-[#1a1a1a]/70 text-sm leading-relaxed">
              <strong className="text-[#0a0a0a] font-bold">Service coverage:</strong>{' '}
              Emergency generator repair callouts are available across all Gauteng areas including
              Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton
              Park, Boksburg, Benoni, Germiston, Alberton, Fourways, and surrounding regions.{' '}
              <Link href="/areas" className="text-[#c8a84b] hover:text-[#0a0a0a] font-semibold transition-colors">
                View all service areas →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Related ── */}
      <section className="py-14 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="related-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="related-heading" className="text-lg font-bold text-[#0a0a0a] mb-6">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group p-4 bg-white border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors"
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Generator Down? Call Now.</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Our emergency team is ready to respond. Same-day service across Gauteng — from
                Johannesburg and Pretoria to Centurion, Midrand, and beyond.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:0603160484"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
              >
                060 316 0484
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
