import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FAQSchema } from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'FAQ | Generator Repair Services Gauteng',
  description: 'Frequently asked questions about generator repairs, servicing, maintenance costs, and emergency services in Gauteng. Get answers from our expert technicians.',
  keywords: 'generator repair FAQ, generator service questions, generator maintenance Gauteng, generator cost questions',
}

const faqs = [
  {
    question: 'How much does generator repair cost in South Africa?',
    answer: 'Generator repair costs vary based on the issue. Minor repairs like oil changes or filter replacements range from R500-R1,500. Major repairs such as AVR replacement, control panel repairs, or alternator rewinding can cost R3,000-R15,000+. We provide free diagnostic assessments and transparent quotes before any work begins.'
  },
  {
    question: 'Do you offer emergency generator repair services?',
    answer: 'Yes, we provide 24/7 emergency generator repair services across Gauteng. Our rapid response team can typically reach you within 1-2 hours in Johannesburg, Pretoria, and surrounding areas. Emergency callout fees apply outside normal business hours.'
  },
  {
    question: 'How often should I service my generator?',
    answer: 'We recommend servicing your generator every 200-250 running hours or at least once a year, whichever comes first. For standby generators used during load shedding, quarterly inspections are advisable. Regular servicing prevents costly breakdowns and extends your generator lifespan.'
  },
  {
    question: 'What brands of generators do you repair?',
    answer: 'We repair all major generator brands including Cummins, Caterpillar, Perkins, FG Wilson, Kipor, Ryobi, Honda, Yamaha, SDMO, Atlas Copco, and Chinese imports. Our technicians are trained to work on both diesel and petrol generators of all sizes.'
  },
  {
    question: 'Can you repair my generator on-site?',
    answer: 'Yes, we offer on-site generator repairs for most issues. Our mobile workshops are fully equipped with diagnostic tools and common spare parts. For major repairs requiring specialized equipment, we may need to transport your generator to our workshop.'
  },
  {
    question: 'What areas do you cover for generator repairs?',
    answer: 'We cover all of Gauteng including Johannesburg, Pretoria, Sandton, Midrand, Centurion, Randburg, Roodepoort, Kempton Park, Boksburg, Benoni, Germiston, Alberton, Edenvale, Krugersdorp, Springs, Soweto, Fourways, and Vereeniging.'
  },
  {
    question: 'Do you provide warranties on repairs?',
    answer: 'Yes, all our repairs come with a minimum 3-month warranty on parts and labour. New parts installed carry the manufacturer warranty. We stand behind our work and will address any issues that arise from our repairs at no additional cost.'
  },
  {
    question: 'Why is my generator not starting?',
    answer: 'Common reasons include: dead battery, fuel issues (empty tank, stale fuel, clogged filters), faulty starter motor, spark plug problems (petrol generators), glow plug issues (diesel generators), or control panel faults. Our technicians can diagnose and fix all starting problems.'
  },
  {
    question: 'What is load bank testing and do I need it?',
    answer: 'Load bank testing simulates real electrical loads to verify your generator can perform at its rated capacity. It&apos;s essential for standby generators that run infrequently, as it removes carbon buildup, tests all components under stress, and ensures reliability when you need it most. We recommend annual load bank testing for critical backup systems.'
  },
  {
    question: 'How long does a typical generator repair take?',
    answer: 'Simple repairs like oil changes or battery replacement take 1-2 hours. Moderate repairs such as fuel system cleaning or AVR replacement take 2-4 hours. Major repairs like alternator rewinding or engine overhauls may take 2-5 days depending on parts availability.'
  },
  {
    question: 'Do you sell generator parts and spares?',
    answer: 'Yes, we stock a wide range of genuine and quality aftermarket parts including filters, belts, batteries, AVRs, control panels, fuel pumps, injectors, and more. We can source parts for any generator brand and provide competitive pricing.'
  },
  {
    question: 'Can you help with generator installation?',
    answer: 'Absolutely. We provide complete generator installation services including site assessment, electrical connections, changeover switch installation, fuel system setup, and commissioning. We ensure your generator is installed safely and complies with all regulations.'
  },
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <main className="min-h-screen bg-background">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'FAQ', href: '/faq' },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Get answers to common questions about generator repairs, servicing, and maintenance in Gauteng.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="rounded-lg border border-border bg-card p-6">
                  <h2 className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our expert technicians are ready to help. Contact us for a free consultation.
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
                className="inline-flex items-center justify-center rounded-md border border-border bg-background px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-card"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
