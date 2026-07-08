import Link from 'next/link'

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

const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/p/Generator-Gents-61567461796938/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33V21.88C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/generatorgents/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@generator.gents',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
      </svg>
    ),
  },
  {
    label: 'Google',
    href: 'https://share.google/6GGtgPwFvrRNQDzTP',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
      </svg>
    ),
  },
  {
    label: 'HelloPeter',
    href: 'https://www.hellopeter.com/generator-gents',
    // Custom HP monogram since no official SVG icon exists
    icon: (
      <span className="w-4 h-4 flex items-center justify-center text-[9px] font-black tracking-tighter leading-none" aria-hidden="true">
        HP
      </span>
    ),
  },
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
              <span className="relative block h-36 w-36 md:h-[168px] md:w-[168px] shrink-0">
                <img
                  src="/generator_gents_logo.svg"
                  alt="Generator Gents"
                  className="absolute inset-0 h-full w-full object-contain"
                />
              </span>
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

            {/* Social links */}
            <div className="flex items-center gap-2 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="flex items-center justify-center w-8 h-8 border border-white/[0.08] text-white/40 hover:text-[#c8a84b] hover:border-[#c8a84b]/40 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Contact details */}
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
