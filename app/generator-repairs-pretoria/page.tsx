import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import AreaSchema from '@/components/area-schema'

export const metadata: Metadata = {
  title: 'Generator Repairs Pretoria | Same-Day Service, All PTA Areas',
  description:
    'Professional generator repairs, servicing and emergency callouts across Pretoria. Hatfield, Menlyn, Brooklyn, Waterkloof, Lynnwood — mobile technicians come to you. Call 076 347 3736.',
  keywords: [
    'generator repairs Pretoria',
    'generator repair Pretoria',
    'generator repair Hatfield',
    'generator repair Menlyn',
    'generator repair Brooklyn Pretoria',
    'generator repair Waterkloof',
    'generator repair Lynnwood',
    'emergency generator repair Pretoria',
    'generator servicing Pretoria',
    'generator maintenance Pretoria',
  ],
  alternates: {
    canonical: 'https://www.generatorgents.co.za/generator-repairs-pretoria',
  },
  openGraph: {
    title: 'Generator Repairs Pretoria | Same-Day Service, All PTA Areas',
    description:
      'Expert generator repairs and emergency callouts across Pretoria. Mobile technicians, same-day response. Call 076 347 3736.',
    url: 'https://www.generatorgents.co.za/generator-repairs-pretoria',
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

const pretoriaAreas = [
  'Hatfield', 'Menlyn', 'Brooklyn', 'Waterkloof', 'Lynnwood',
  'Arcadia', 'Sunnyside', 'Pretoria CBD', 'Montana', 'Pretoria North',
  'Pretoria West', 'Garsfontein', 'Faerie Glen', 'Moreleta Park', 'Die Wilgers',
  'Silverton', 'Mamelodi', 'Atteridgeville', 'Gezina', 'Queenswood',
]

const whyPoints = [
  {
    num: '01',
    title: 'Mobile workshop — we come to you',
    body: 'Our technicians arrive at your Pretoria site fully equipped. Most repairs are completed on the first visit — government facilities, offices, embassies, or residential.',
  },
  {
    num: '02',
    title: 'Same-day emergency response',
    body: 'When your generator fails during loadshedding or a critical outage, we mobilise fast. Most Pretoria callouts receive a technician within 2–4 hours.',
  },
  {
    num: '03',
    title: 'Government & corporate expertise',
    body: 'Government departments, embassies, and corporate headquarters have strict uptime requirements. Our maintenance contracts are designed for exactly these critical installations.',
  },
  {
    num: '04',
    title: 'Upfront diagnosis, no surprises',
    body: 'We diagnose fully before quoting. You receive a clear explanation of the fault and an accurate repair cost before any work begins.',
  },
]

const nearbyAreas = [
  { href: '/generator-repairs-centurion', name: 'Centurion' },
  { href: '/generator-repairs-midrand', name: 'Midrand' },
  { href: '/generator-repairs-fourways', name: 'Fourways' },
  { href: '/generator-repairs-sandton', name: 'Sandton' },
  { href: '/generator-repairs-johannesburg', name: 'Johannesburg' },
  { href: '/generator-repairs-krugersdorp', name: 'Krugersdorp' },
]

export default function PretoriaPage() {
  return (
    <>
      <AreaSchema areaName="Pretoria" url="/generator-repairs-pretoria" />

      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Areas', href: '/areas' },
              { label: 'Pretoria' },
            ]}
          />
        </div>
      </div>

      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/generator-repair-services-technicians.webp"
            alt="Generator repair and servicing across Pretoria — mobile technicians covering all PTA suburbs and the CBD"
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
              Generator Repairs · Pretoria
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Repairs in Pretoria.<br />
            <span className="text-[#c8a84b]">Mobile Service, All PTA Areas.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            From Hatfield and Menlyn through to Brooklyn, Waterkloof, Montana, and Pretoria West —
            our mobile technicians cover all of Pretoria, arriving equipped to diagnose
            and repair on-site the same day.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Same-day emergency callouts', 'All generator makes & sizes', 'Government & corporate service', 'On-site repairs, first visit'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <span className="block w-1.5 h-1.5 rounded-full bg-[#c8a84b]" />
                <span className="text-white/65 text-sm">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+27763473736"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#b91c1c] text-white font-black text-base hover:bg-red-800 transition-colors"
            >
              Call 076 347 3736
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

      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="why-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Why Choose Us</p>
            <h2 id="why-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              Generator Service Built for Pretoria
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
            {whyPoints.map((item) => (
              <div key={item.num} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.num}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Pretoria</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Expert Generator Service Across All of Pretoria
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  As South Africa's administrative capital, Pretoria hosts government departments,
                  foreign embassies, major corporate headquarters, and some of the country's most
                  critical institutions — none of which can tolerate extended power disruptions.
                  Generator Gents provides comprehensive generator repair, servicing,
                  and maintenance across all of Pretoria, with the response speed and technical
                  depth the city demands.
                </p>
                <p>
                  Our coverage spans the full Pretoria area. From Hatfield and Menlyn in the east,
                  through Brooklyn, Waterkloof, and Arcadia, across Pretoria CBD and Sunnyside,
                  and out to Montana in the north and Pretoria West. We service generators at
                  government facilities, embassies, corporate office parks, hospitals, schools,
                  and residential estates — with equal professionalism across all sectors.
                </p>
                <p>
                  Emergency callouts across Pretoria receive priority response. When your generator
                  fails during loadshedding or an unplanned outage, we assess the situation on the
                  call and dispatch accordingly. Our technicians carry diagnostic equipment and a
                  comprehensive parts inventory — meaning most faults are identified and resolved
                  in a single visit without return trips for parts.
                </p>
                <p>
                  For critical installations and businesses with strict uptime requirements,
                  we offer proactive maintenance contracts that prevent failures rather than
                  simply responding to them. Scheduled servicing at the correct intervals,
                  combined with regular load bank testing, ensures your generator is ready
                  to carry full load the moment it is needed.
                </p>
              </div>

              <div className="mt-10 p-6 bg-[#f5f4f0] border-l-2 border-[#c8a84b]">
                <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-3">Areas Covered</p>
                <div className="flex flex-wrap gap-2">
                  {pretoriaAreas.map((area) => (
                    <span
                      key={area}
                      className="px-3 py-1.5 bg-white border border-[#1a1a1a]/10 text-[#1a1a1a]/70 text-xs font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">Services in Pretoria</p>
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
                <p className="text-white font-bold mb-1">Generator problem in Pretoria?</p>
                <p className="text-white/50 text-sm mb-4">Call now for same-day service across all PTA areas.</p>
                <a
                  href="tel:+27763473736"
                  className="flex items-center justify-center w-full py-3 bg-[#b91c1c] text-white font-bold text-sm hover:bg-red-800 transition-colors"
                >
                  076 347 3736
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-[#0a0a0a] text-white" aria-label="Call to action">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Service in Pretoria?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Emergency or planned, we cover all of Pretoria. Call now for a
                same-day callout or to schedule a service visit at your location.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:+27763473736"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#b91c1c] text-white font-black text-lg hover:bg-red-800 transition-colors"
              >
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
