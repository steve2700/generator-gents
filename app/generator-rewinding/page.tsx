import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumbs from '@/components/breadcrumbs'
import ServiceSchema from '@/components/service-schema'

/* ─────────────────────────────────────────
   SEO — Advanced
───────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Generator Rewinding Gauteng | Alternator & Stator Rewinding Service',
  description:
    'Generator alternator rewinding services across Gauteng. Insulation breakdown, overheating damage, voltage faults — professional rewinding to factory specification. Call 076 347 3736.',
  keywords: [
    'generator rewinding Gauteng',
    'alternator rewinding Gauteng',
    'generator stator rewinding Johannesburg',
    'generator winding repair Gauteng',
    'generator alternator repair Gauteng',
    'generator insulation failure repair Gauteng',
    'generator rewinding cost Gauteng',
    'alternator rewind vs replace Gauteng',
    'generator winding burnout repair Gauteng',
    'generator rotor rewinding Gauteng',
    'generator excitation winding repair Gauteng',
    'generator alternator overhaul Gauteng',
  ],
  alternates: {
    canonical: 'https://www.generatorgents.co.za/generator-rewinding',
  },
  openGraph: {
    title: 'Generator Rewinding Gauteng | Alternator & Stator Rewinding Service',
    description:
      'Generator alternator rewinding across Gauteng. Insulation breakdown, thermal damage, winding faults — rewound to factory spec at a fraction of replacement cost. Call 076 347 3736.',
    url: 'https://www.generatorgents.co.za/generator-rewinding',
    type: 'website',
  },
}

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const symptoms = [
  {
    step: '01',
    title: 'No or low output voltage',
    desc: 'Engine runs normally but the alternator produces no voltage or significantly reduced voltage. Stator winding open circuit or partial winding failure.',
  },
  {
    step: '02',
    title: 'Insulation resistance failure',
    desc: 'Megger testing reveals insulation resistance below acceptable limits — a reliable early indicator of winding degradation before catastrophic failure occurs.',
  },
  {
    step: '03',
    title: 'Burning smell or visible damage',
    desc: 'Burnt insulation odour, discolouration of windings, or visible scorching inside the alternator housing. Often follows an overload event or sustained overheating.',
  },
  {
    step: '04',
    title: 'Reduced power output',
    desc: 'Generator output falls short of its rated kVA. Partial winding failure causes the alternator to produce less than its design capacity under full load.',
  },
]

const rewindProcess = [
  {
    num: '01',
    title: 'Assessment & viability testing',
    body: 'Insulation resistance, winding resistance, and visual inspection determine whether rewinding is viable and cost-effective against the value of a replacement alternator.',
  },
  {
    num: '02',
    title: 'Strip & core inspection',
    body: 'Old windings are stripped and the core is cleaned and inspected for physical damage, lamination faults, or slot damage that would affect the rewound unit\'s performance.',
  },
  {
    num: '03',
    title: 'Rewinding to specification',
    body: 'New coils are wound using quality enamelled copper wire to original manufacturer specification — correct gauge, insulation class, winding pattern, and connection configuration.',
  },
  {
    num: '04',
    title: 'Vacuum impregnation & curing',
    body: 'Completed windings are vacuum impregnated with varnish and oven-cured, providing long-term protection against moisture, contamination, and thermal stress.',
  },
  {
    num: '05',
    title: 'Testing & load verification',
    body: 'Insulation resistance, winding resistance, high-potential testing, and a full load test confirm the rewound unit meets original output specifications before return to service.',
  },
]

const relatedServices = [
  { href: '/avr-repairs', label: 'AVR & Voltage Repairs', desc: 'Stable power output' },
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'Full repair service' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'AMF / ATS controllers' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day response' },
]

/* ─────────────────────────────────────────
   Page
───────────────────────────────────────── */
export default function GeneratorRewindingPage() {
  return (
    <>
      <ServiceSchema
        name="Generator Rewinding"
        description="Generator alternator rewinding services across Gauteng. Professional rewinding to factory specifications for stator, rotor, and excitation windings — at a fraction of replacement cost."
        url="/generator-rewinding"
      />

      {/* Breadcrumb */}
      <div className="bg-[#f5f4f0] border-b border-[#1a1a1a]/8">
        <div className="max-w-6xl mx-auto px-6">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: 'Generator Rewinding' },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/alternator-rewinding-workshop.png"
            alt="Generator alternator rewinding service in Gauteng — stator and rotor windings to factory specification"
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
              Generator Rewinding · Gauteng
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6 max-w-3xl">
            Generator Rewinding.<br />
            <span className="text-[#c8a84b]">Restored to Factory Specification.</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            When generator windings fail due to insulation breakdown, overheating, or electrical
            damage, rewinding restores full output at a fraction of the cost of a replacement
            alternator. Professional workshop service across Gauteng.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
            {['Stator & rotor rewinding', 'Wound to original spec', 'Vacuum varnish impregnation', 'Full load test before return'].map((t) => (
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

      {/* ── Symptoms grid ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="symptoms-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Signs of Winding Failure</p>
            <h2 id="symptoms-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a]">
              When Does a Generator Need Rewinding?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]/10">
            {symptoms.map((item) => (
              <div key={item.step} className="bg-[#f5f4f0] p-6 hover:bg-white transition-colors group">
                <span className="text-[#c8a84b]/40 font-black text-[28px] leading-none block mb-3">{item.step}</span>
                <h3 className="font-bold text-[#0a0a0a] mb-2 group-hover:text-[#c8a84b] transition-colors">{item.title}</h3>
                <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Body copy + process sidebar ── */}
      <section className="py-16 md:py-20 bg-white" aria-labelledby="detail-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">

            {/* Left — body copy */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">The Service</p>
              <h2 id="detail-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Professional Alternator Rewinding Across Gauteng
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70">
                <p>
                  Generator winding failures are caused by thermal stress, moisture ingress,
                  voltage spikes, mechanical vibration, or gradual insulation degradation over
                  years of service. When windings fail, the common assumption is that the entire
                  alternator requires replacement — a significant cost, particularly on larger
                  industrial generator sets. In many cases, professional rewinding restores the
                  alternator to full factory specification at a fraction of that cost.
                </p>
                <p>
                  Generator Gents provides alternator rewinding services across Gauteng,
                  covering stator windings, rotor windings, and excitation windings across all
                  major alternator brands — Stamford, Leroy Somer, Mecc Alte, Marathon, and
                  others. Before any rewinding work is undertaken, we assess the unit thoroughly
                  to confirm that rewinding is both viable and cost-effective for your specific
                  alternator. Not every winding failure justifies rewinding, and we provide
                  an honest assessment before any cost is committed.
                </p>
                <p>
                  Our rewinding process follows original manufacturer specifications in every
                  respect — wire gauge, insulation class, winding pattern, and connection
                  configuration. Deviation from specification produces an alternator that either
                  underperforms or runs hot, reducing service life. The core is cleaned and
                  inspected for lamination faults and slot damage before new windings are
                  installed, ensuring the foundation is sound before work begins.
                </p>
              </div>

              {/* Image 1 */}
              <div className="mt-10 relative aspect-[16/9] overflow-hidden">
                <Image
                  src="/images/alternator-rewinding-workshop.png"
                  alt="Generator alternator stator rewinding in workshop — enamelled copper wire wound to factory specification in Gauteng"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a]/70 to-transparent px-5 py-4">
                  <p className="text-white/80 text-xs">Workshop rewinding — wound to original manufacturer specification</p>
                </div>
              </div>

              <div className="space-y-5 text-base md:text-lg leading-relaxed text-[#1a1a1a]/70 mt-8">
                <p>
                  Once wound, every unit is vacuum impregnated with varnish and oven-cured.
                  This process fills all voids in the winding and provides long-term protection
                  against moisture ingress, contamination, and thermal stress — the same causes
                  that led to the original failure. Skipping this step leaves rewound windings
                  vulnerable to the same failure modes within a short period.
                </p>
                <p>
                  Testing after rewinding is comprehensive. Insulation resistance, winding
                  resistance, and high-potential testing are completed before the unit is
                  reassembled. After reassembly, a full load test confirms the alternator
                  meets its original rated output specification. The unit is not returned to
                  service until every test is passed.
                </p>
              </div>
            </div>

            {/* Right — process */}
            <div>
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-5">The Rewinding Process</p>
              {rewindProcess.map((item, i) => (
                <div key={item.num} className={`flex gap-5 py-5 ${i < rewindProcess.length - 1 ? 'border-b border-[#1a1a1a]/8' : ''}`}>
                  <span className="text-[#c8a84b]/40 font-black text-[22px] leading-none w-8 shrink-0">{item.num}</span>
                  <div>
                    <h3 className="font-bold text-[#0a0a0a] mb-1.5">{item.title}</h3>
                    <p className="text-sm text-[#1a1a1a]/60 leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 p-5 bg-[#0a0a0a]">
                <p className="text-white font-bold mb-1">Winding failure on your generator?</p>
                <p className="text-white/50 text-sm mb-4">Call to discuss rewinding options and get an assessment.</p>
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

      {/* ── Rewind vs replace + image break ── */}
      <section className="py-16 md:py-20 bg-[#f5f4f0]" aria-labelledby="value-heading">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image 2 */}
            <div className="relative aspect-[4/3] overflow-hidden order-2 md:order-1">
              <Image
                src="/images/Generator-Rewinding-Repair-Services.webp"
                alt="Rewound generator alternator undergoing insulation resistance and load testing before return to service in Gauteng"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 md:order-2">
              <p className="text-[#c8a84b] text-[11px] font-bold tracking-[0.35em] uppercase mb-2">Rewind vs Replace</p>
              <h2 id="value-heading" className="text-2xl md:text-3xl font-black text-[#0a0a0a] mb-6">
                Rewinding Is Often the More Economical Choice
              </h2>
              <div className="w-10 h-0.5 bg-[#c8a84b] mb-8" />
              <div className="space-y-5 text-base leading-relaxed text-[#1a1a1a]/70">
                <p>
                  On larger generator sets, alternator replacement is a major cost. A quality
                  rewind — done correctly to original specification — delivers the same service
                  life as a new unit while costing significantly less. For industrial and
                  commercial generators where downtime has a direct financial impact, rewinding
                  also offers faster turnaround than sourcing and fitting a replacement alternator,
                  particularly for less common makes and frame sizes.
                </p>
                <p>
                  We assess each unit honestly. Where the core is damaged, where the alternator
                  is beyond economic repair, or where a replacement unit represents better value
                  for the customer's situation, we say so. The assessment is provided before any
                  commitment to rewinding costs.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ['All alternator makes', 'Stamford, Leroy Somer, Mecc Alte & more'],
                  ['Honest assessment first', 'Viability confirmed before cost committed'],
                  ['Factory specification', 'Wire gauge, class & pattern matched'],
                  ['Warranted workmanship', 'Covered against materials & labour defects'],
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
              Generator rewinding services are available across all Gauteng areas including
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
              <h2 className="text-2xl md:text-3xl font-black mb-3">Need Generator Rewinding?</h2>
              <p className="text-white/55 text-base leading-relaxed">
                Call to discuss rewinding options for your alternator. We assess viability
                honestly before any cost is committed — across all of Gauteng.
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
