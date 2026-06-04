import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { FAQSchema } from '@/components/faq-schema'

export const metadata: Metadata = {
  title: 'Generator Repair Cost South Africa 2024 | Price Guide',
  description: 'Complete guide to generator repair costs in South Africa. From R500 minor repairs to R15,000+ major overhauls. Get transparent pricing from Generator Repair Services Gauteng.',
  keywords: 'generator repair cost South Africa, generator service price, how much to fix generator, generator repair rates Gauteng, generator maintenance cost',
}

const pricingFaqs = [
  {
    question: 'How much does a basic generator service cost?',
    answer: 'A basic generator service including oil change, filter replacement, and inspection costs between R800-R1,500 depending on generator size and oil type required.'
  },
  {
    question: 'What is the cost to repair a generator that won\'t start?',
    answer: 'Diagnosing and repairing starting issues typically costs R500-R3,000. This includes battery testing/replacement, starter motor repairs, fuel system checks, and spark/glow plug replacement.'
  },
  {
    question: 'How much does AVR replacement cost?',
    answer: 'AVR (Automatic Voltage Regulator) replacement costs R2,000-R8,000 depending on the generator brand and AVR type. Original parts cost more than aftermarket alternatives.'
  },
]

export default function GeneratorRepairCostPage() {
  return (
    <>
      <FAQSchema faqs={pricingFaqs} />
      <main className="min-h-screen bg-background">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Generator Repair Cost', href: '/generator-repair-cost' },
          ]}
        />

        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Generator Repair Cost Guide
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Transparent pricing for generator repairs in South Africa - Updated 2024
            </p>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-foreground">Generator Repair Pricing Overview</h2>
            <p className="mt-4 text-muted-foreground">
              Generator repair costs vary based on the type of repair needed, parts required, and generator size. Below is our comprehensive pricing guide to help you budget for generator repairs.
            </p>

            {/* Minor Repairs */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                Minor Repairs & Maintenance (R500 - R2,500)
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Oil & filter change</span>
                  <span className="font-medium text-primary">R500 - R1,200</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Air filter replacement</span>
                  <span className="font-medium text-primary">R200 - R600</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Spark plug replacement (petrol)</span>
                  <span className="font-medium text-primary">R150 - R400</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Battery replacement</span>
                  <span className="font-medium text-primary">R800 - R2,500</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Belt replacement</span>
                  <span className="font-medium text-primary">R400 - R1,200</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Basic service (inspection + fluids)</span>
                  <span className="font-medium text-primary">R800 - R1,500</span>
                </div>
              </div>
            </div>

            {/* Moderate Repairs */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                Moderate Repairs (R1,500 - R5,000)
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Fuel pump repair/replacement</span>
                  <span className="font-medium text-primary">R1,500 - R4,000</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Carburetor cleaning/rebuild</span>
                  <span className="font-medium text-primary">R800 - R2,000</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Starter motor repair</span>
                  <span className="font-medium text-primary">R1,200 - R3,500</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Glow plug replacement (diesel)</span>
                  <span className="font-medium text-primary">R800 - R2,500</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Cooling system repair</span>
                  <span className="font-medium text-primary">R1,500 - R4,500</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Exhaust system repair</span>
                  <span className="font-medium text-primary">R1,000 - R3,000</span>
                </div>
              </div>
            </div>

            {/* Major Repairs */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                Major Repairs (R3,000 - R15,000+)
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">AVR replacement</span>
                  <span className="font-medium text-primary">R2,000 - R8,000</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Control panel repair</span>
                  <span className="font-medium text-primary">R3,000 - R12,000</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Injector replacement (diesel)</span>
                  <span className="font-medium text-primary">R2,500 - R8,000</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Alternator rewinding</span>
                  <span className="font-medium text-primary">R5,000 - R15,000+</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Engine overhaul</span>
                  <span className="font-medium text-primary">R8,000 - R25,000+</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Complete rebuild</span>
                  <span className="font-medium text-primary">R15,000 - R50,000+</span>
                </div>
              </div>
            </div>

            {/* Service Fees */}
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                Service & Callout Fees
              </h3>
              <div className="mt-4 space-y-3">
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Diagnostic assessment</span>
                  <span className="font-medium text-primary">FREE with repair</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Standard callout (business hours)</span>
                  <span className="font-medium text-primary">R350 - R600</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Emergency callout (after hours)</span>
                  <span className="font-medium text-primary">R600 - R1,200</span>
                </div>
                <div className="flex justify-between rounded-md bg-card p-4">
                  <span className="text-foreground">Load bank testing</span>
                  <span className="font-medium text-primary">R2,500 - R5,000</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-10 rounded-lg border border-primary/30 bg-primary/5 p-6">
              <h3 className="font-semibold text-foreground">Important Notes</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Prices are estimates and may vary based on generator brand, model, and condition</li>
                <li>• Large industrial generators may incur higher costs</li>
                <li>• Original manufacturer parts cost more than quality aftermarket alternatives</li>
                <li>• All repairs include our standard 3-month warranty</li>
                <li>• We provide detailed quotes before starting any work</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Factors Affecting Cost */}
        <section className="bg-card py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold text-foreground text-center">Factors Affecting Repair Cost</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground">Generator Size</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Larger generators (50kVA+) require more materials, specialised parts, and longer labour times, increasing overall costs.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground">Brand & Model</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Premium brands like Cummins or Caterpillar use higher-quality parts that cost more. Chinese generators often have cheaper but harder-to-find parts.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground">Parts Availability</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Common parts are readily available and affordable. Rare or imported parts may need to be ordered, adding time and cost.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-6">
                <h3 className="font-semibold text-foreground">Repair Complexity</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Simple repairs can be done on-site quickly. Complex repairs may require workshop time and specialised equipment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Get a Free Quote for Your Generator Repair
            </h2>
            <p className="mt-4 text-muted-foreground">
              Contact us for a no-obligation assessment and accurate pricing for your specific generator.
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
                className="inline-flex items-center justify-center rounded-md border border-border bg-card px-8 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Request Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
