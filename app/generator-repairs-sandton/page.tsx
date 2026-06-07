import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Sandton | Same-Day Service, All Sandton Areas',
  description:
    "Professional generator repairs, servicing and emergency callouts across Sandton. CBD, Bryanston, Morningside, Rivonia, Sandhurst & surrounds — mobile technicians come to you. Call 060 316 0484.",
  keywords: [
    'generator repairs Sandton',
    'generator repair Sandton CBD',
    'generator repair Bryanston',
    'generator repair Morningside',
    'generator repair Rivonia',
    'generator repair Sandhurst',
    'generator repair Benmore',
    'generator repair Gallo Manor',
    'emergency generator repair Sandton',
    'generator servicing Sandton',
    'generator maintenance Sandton',
    'generator installation Sandton',
  ],
  alternates: {
    canonical: 'https://www.generatorrepairservices.co.za/generator-repairs-sandton',
  },
  openGraph: {
    title: 'Generator Repairs Sandton | Same-Day Service, All Sandton Areas',
    description:
      'Expert generator repairs and emergency callouts across all of Sandton. Mobile technicians, same-day response. Call 060 316 0484.',
    url: 'https://www.generatorrepairservices.co.za/generator-repairs-sandton',
    type: 'website',
  },
}

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'All faults, all makes' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day response' },
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
  { href: '/generator-installation', label: 'Generator Installation', desc: 'Complete setup & commissioning' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'AMF / ATS controllers' },
  { href: '/avr-repairs', label: 'AVR & Voltage Repairs', desc: 'Stable power output' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs', desc: 'Injectors & pumps' },
  { href: '/load-bank-testing', label: 'Load Bank Testing', desc: 'Capacity verification' },
  { href: '/generator-rewinding', label: 'Generator Rewinding', desc: 'Alternator rewinding' },
]

const sandtonAreas = [
  'Sandton CBD', 'Sandhurst', 'Bryanston', 'Morningside',
  'Rivonia', 'Benmore', 'Gallo Manor', 'Parkmore',
  'Paulshof', 'Woodmead', 'Sunninghill', 'Lonehill',
  'Douglasdale', 'Witkoppen', 'Dainfern', 'Chartwell',
]

const whyPoints = [
  {
    num: '01',
    title: 'Mobile workshop — we come to you',
    body: 'Our technicians arrive at your Sandton site fully equipped. Most repairs are completed on the first visit — no towing, no drop-off, no waiting for a second appointment.',
  },
  {
    num: '02',
    title: 'Same-day emergency response',
    body: 'When your generator fails during loadshedding or a critical outage, we mobilise fast. Most Sandton callouts receive a technician within 2–4 hours of your call.',
  },
  {
    num: '03',
    title: 'All makes and sizes',
    body: 'Cummins, Perkins, Caterpillar, Deutz, Volvo — residential, commercial and large corporate standby systems serviced across the full kVA range.',
  },
  {
    num: '04',
    title: 'Upfront diagnosis, no surprises',
    body: 'We diagnose fully before quoting. You receive a clear explanation of the fault and an accurate cost before any work begins — no hidden charges.',
  },
]

const nearbyAreas = [
  { href: '/generator-repairs-johannesburg', name: 'Johannesburg' },
  { href: '/generator-repairs-randburg', name: 'Randburg' },
  { href: '/generator-repairs-midrand', name: 'Midrand' },
  { href: '/generator-repairs-fourways', name: 'Fourways' },
  { href: '/generator-repairs-centurion', name: 'Centurion' },
  { href: '/generator-repairs-pretoria', name: 'Pretoria' },
]

export default function SandtonPage() {
  return (
    <>
      <AreaSchema areaName="Sandton" url="/generator-repairs-sandton" />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Areas', href: '/areas' },
              { label: 'Sandton' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/areas/sandton.png"
            alt="Generator repair and servicing across Sandton — mobile technicians covering Sandton CBD, Bryanston, Morningside and all surrounding suburbs"
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
              Generator Repairs · Sandton
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Repairs in Sandton.<br />
            <span className="text-[#c8a84b]">Mobile Service, All Sandton Areas.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            Africa&apos;s financial capital demands absolute power reliability. Our mobile
            technicians cover all of Sandton — from the CBD and corporate parks to the
            affluent northern residential suburbs — arriving equipped to diagnose and
            repair on-site the same day.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Same-day emergency callouts', 'All generator makes & sizes', 'On-site repairs, first visit', 'ATS & remote monitoring systems'].map((t) => (
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
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
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

      {/* ── Why choose us ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Why Choose Us</p>
            <h2 id="why-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Generator Service Built for Sandton
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
            {whyPoints.map((item) => (
              <div key={item.num} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.num}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors text-sm">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy + services sidebar ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">

            {/* Left — body copy */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Sandton</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Expert Generator Service Across All of Sandton
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Sandton is Africa&apos;s financial hub — home to the Johannesburg Stock Exchange,
                  major banks, and multinational corporate headquarters. In this environment,
                  power reliability is not a preference, it is a requirement. Generator Repair
                  Services provides rapid-response generator repairs, servicing and maintenance
                  to Sandton businesses and the surrounding residential areas with the urgency
                  and professionalism the address demands.
                </p>
                <p>
                  Our coverage spans the full Sandton area — Sandton CBD, Sandhurst, Bryanston,
                  Morningside, Rivonia, Benmore, Gallo Manor, Paulshof, Woodmead, Sunninghill,
                  Lonehill and beyond. We serve corporate office parks, data centres, hospitality
                  properties, high-end residential estates and every business type in between.
                </p>
                <p>
                  High-end residential properties in Sandton frequently feature sophisticated
                  generator systems with automatic transfer switches, remote monitoring panels and
                  integrated home automation. Our technicians are experienced with these advanced
                  installations — providing both routine maintenance and complex fault diagnosis
                  for premium generator setups.
                </p>
                <p>
                  For Sandton businesses on maintenance contracts, we track service intervals,
                  dispatch proactively and provide full compliance documentation. For emergency
                  callouts, we prioritise response and arrive prepared — diagnosis and repair in
                  one visit wherever possible. No Sandton client should face extended downtime
                  waiting for a second technician appointment.
                </p>
              </div>

              {/* Suburbs coverage */}
              <div className="mt-10 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Suburbs Covered</p>
                <div className="flex flex-wrap gap-2">
                  {sandtonAreas.map((area) => (
                    <span key={area} className="px-3 py-1.5 bg-white border border-[#1a1a1a]/10 text-[#1a1a1a]/70 text-xs font-medium">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — services */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Services in Sandton</p>
              {services.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between gap-4 py-4 group hover:text-[#c8a84b] transition-colors ${i < services.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}
                >
                  <div>
                    <p className="font-bold text-[#0a0a0a] text-sm group-hover:text-[#c8a84b] transition-colors">{item.label}</p>
                    <p className="text-xs text-[#1a1a1a]/50 mt-0.5">{item.desc}</p>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-[#c8a84b]/40 group-hover:text-[#c8a84b] transition-colors" aria-hidden="true">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}

              <div className="mt-6 p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">Generator problem in Sandton?</p>
                <p className="text-white/50 text-sm mb-4">Call now for same-day service across all Sandton areas.</p>
                <a
                  href="tel:0603160484"
                  className="flex items-center justify-center w-full py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  060 316 0484
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Nearby areas ── */}
      <section className="py-12 bg-[#f5f4f0] border-t border-[#1a1a1a]/8" aria-labelledby="nearby-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="nearby-heading" className="text-lg font-bold text-[#0a0a0a] mb-6">Nearby Service Areas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="group p-4 bg-white border border-[#1a1a1a]/8 hover:border-[#c8a84b]/40 transition-colors text-center"
              >
                <p className="font-bold text-sm text-[#0a0a0a] group-hover:text-[#c8a84b] transition-colors">{area.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-4 text-right">
            <Link href="/areas" className="text-[#c8a84b] text-sm font-semibold hover:text-[#0a0a0a] transition-colors">
              View all Gauteng areas →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] text-white" aria-label="Call to action">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Service in Sandton?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Emergency or planned, we cover all of Sandton. Call now for a same-day
                callout or to schedule a service visit at your location.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a href="tel:0603160484" className="inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors">
                060 316 0484
              </a>
              <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-semibold hover:border-[#c8a84b] hover:text-[#c8a84b] transition-colors">
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
