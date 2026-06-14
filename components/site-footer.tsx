import Link from 'next/link'
import Image from 'next/image'

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs' },
  { href: '/generator-servicing', label: 'Generator Servicing' },
  { href: '/generator-maintenance', label: 'Maintenance Plans' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts' },
  { href: '/generator-installation', label: 'Installation' },
  { href: '/load-bank-testing', label: 'Load Bank Testing' },
]

const areas = [
  { href: '/generator-repairs-johannesburg', label: 'Johannesburg' },
  { href: '/generator-repairs-pretoria', label: 'Pretoria' },
  { href: '/generator-repairs-sandton', label: 'Sandton' },
  { href: '/generator-repairs-midrand', label: 'Midrand' },
  { href: '/generator-repairs-centurion', label: 'Centurion' },
  { href: '/generator-repairs-randburg', label: 'Randburg' },
]

export default function SiteFooter() {
  return (
    <footer className="bg-[#0a0a0a] text-white">

      {/* ── Top bar ── */}
      <div className="border-b border-[#c8a84b]/15">
        <div className="max-w-6xl mx-auto px-6 h-9 flex justify-between items-center">
          <p className="text-white/35 text-[11px] tracking-[0.12em]">
            Serving all of Gauteng &mdash; Johannesburg &middot; Pretoria &middot; Sandton &middot; Centurion &amp; more
          </p>
          <span className="hidden sm:block text-[9px] font-bold tracking-[0.2em] uppercase text-[#c8a84b] border border-[#c8a84b]/20 px-2.5 py-1">
            Power. Precision. Professionalism.
          </span>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <Image src="/logo_lite.png" alt="Generator Gents" width={36} height={36} className="object-contain" priority />
              <div className="leading-none">
                <span className="block text-white font-black text-[12px] tracking-[0.22em] uppercase">
                  Generator Gents
                </span>
                <span className="flex items-center gap-1 mt-[3px]">
                  <span className="block h-px w-2.5 bg-[#c8a84b]" />
                  <span className="text-[#c8a84b] text-[7px] font-bold tracking-[0.3em] uppercase">Power · Precision · Pro</span>
                  <span className="block h-px w-2.5 bg-[#c8a84b]" />
                </span>
              </div>
            </div>

            <p className="text-white/45 text-[12.5px] leading-[1.75] mb-6 max-w-[240px]">
              Generator Gents delivers expert generator repair, servicing and maintenance across Gauteng. We keep your power running when you need it most.
            </p>

            {/* Contact details — text only */}
            <dl className="flex flex-col gap-3 border-t border-white/[0.07] pt-5">
              <div>
                <dt className="text-white/30 text-[10px] font-bold tracking-[0.25em] uppercase mb-1">Call</dt>
                <dd>
                  <a
                    href="tel:+27763473736"
                    className="text-[#c8a84b] hover:text-white transition-colors font-mono font-semibold text-[15px] tracking-wide"
                  >
                    076 347 3736
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/30 text-[10px] font-bold tracking-[0.25em] uppercase mb-1">Email</dt>
                <dd>
                  <a
                    href="mailto:info@generatorgents.co.za"
                    className="text-white/55 hover:text-[#c8a84b] transition-colors text-[12.5px]"
                  >
                    info@generatorgents.co.za
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-white/30 text-[10px] font-bold tracking-[0.25em] uppercase mb-1">Location</dt>
                <dd className="text-white/45 text-[12.5px]">Gauteng, South Africa</dd>
              </div>
            </dl>

            {/* Emergency banner */}
            <div className="mt-6 bg-red-950/30 border-l-2 border-red-700 px-4 py-3.5">
              <p className="text-red-400 text-[12px] font-bold tracking-wide">24/7 Emergency Callouts</p>
              <p className="text-white/40 text-[11px] mt-0.5">Same-day response across Gauteng</p>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">
              Our Services
              <span className="flex-1 h-px bg-[#c8a84b]/20" />
            </h3>
            <ul className="flex flex-col">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="block py-[7px] border-b border-white/[0.04] transition-colors hover:text-[#c8a84b] text-white/50 text-[12.5px]"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="flex items-center gap-1.5 mt-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#c8a84b] hover:text-white transition-colors"
            >
              All Services <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">
              Areas We Serve
              <span className="flex-1 h-px bg-[#c8a84b]/20" />
            </h3>
            <ul className="flex flex-col">
              {areas.map((area) => (
                <li key={area.href}>
                  <Link
                    href={area.href}
                    className="block py-[7px] border-b border-white/[0.04] transition-colors hover:text-[#c8a84b] text-white/50 text-[12.5px]"
                  >
                    {area.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/areas"
              className="flex items-center gap-1.5 mt-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#c8a84b] hover:text-white transition-colors"
            >
              View All Areas <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>
      </div>

      {/* ── Gold divider ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#c8a84b]/25 to-transparent" />
      </div>

      {/* ── Bottom bar ── */}
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <p className="text-[11px] text-white/25">
          &copy; {new Date().getFullYear()} Generator Gents. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Link href="/privacy-policy" className="text-[11px] text-white/30 hover:text-[#c8a84b] tracking-wide transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-[11px] text-white/30 hover:text-[#c8a84b] tracking-wide transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>

    </footer>
  )
}
