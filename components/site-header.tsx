'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const services = [
  { href: '/generator-repairs', label: 'Generator Repairs', desc: 'All faults, all brands' },
  { href: '/generator-servicing', label: 'Generator Servicing', desc: 'Oil, filters, full inspection' },
  { href: '/generator-maintenance', label: 'Maintenance Plans', desc: 'Scheduled service contracts' },
  { href: '/emergency-generator-repair', label: 'Emergency Callouts', desc: 'Same-day response' },
  { href: '/generator-installation', label: 'Generator Installation', desc: 'New unit setup & wiring' },
  { href: '/load-bank-testing', label: 'Load Bank Testing', desc: 'Capacity verification' },
  { href: '/avr-repairs', label: 'AVR & Voltage Repairs', desc: 'Stable power output' },
  { href: '/control-panel-repairs', label: 'Control Panel Repairs', desc: 'Controllers & relays' },
  { href: '/fuel-system-repairs', label: 'Fuel System Repairs', desc: 'Injectors & pumps' },
  { href: '/generator-rewinding', label: 'Generator Rewinding', desc: 'Alternator rewinding' },
]

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/areas', label: 'Areas' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/96 backdrop-blur-md shadow-[0_1px_0_rgba(200,168,75,0.18)]'
          : 'bg-[#0a0a0a]'
      }`}
    >
      {/* ── Top bar ── */}
      <div className="hidden md:block border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 h-9 flex justify-between items-center">
          <p className="text-white/40 text-xs tracking-wide">
            Serving all of Gauteng — Johannesburg · Pretoria · Sandton · Centurion &amp; more
          </p>
          <a
            href="tel:0603160484"
            className="text-[#c8a84b] hover:text-white transition-colors text-xs font-semibold tracking-widest"
          >
            060 316 0484
          </a>
        </div>
      </div>

      {/* ── Main nav ── */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-[66px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Generator Repair Services — home">
            <Image src="/logo_lite.png" alt="Generator Repair Services" width={36} height={36} className="object-contain" priority />
            <div className="leading-none hidden sm:block">
              <span className="block text-white font-black text-[12px] tracking-[0.2em] uppercase group-hover:text-[#c8a84b] transition-colors">
                Generator
              </span>
              <span className="flex items-center gap-1 mt-[2px]">
                <span className="block h-px w-2.5 bg-[#c8a84b]" />
                <span className="text-[#c8a84b] text-[8px] font-bold tracking-[0.3em] uppercase">Repair Services</span>
                <span className="block h-px w-2.5 bg-[#c8a84b]" />
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = pathname === link.href || (link.hasDropdown && pathname.startsWith('/generator') || pathname.startsWith('/avr') || pathname.startsWith('/control') || pathname.startsWith('/fuel') || pathname.startsWith('/load') || pathname.startsWith('/emergency'))

              if (link.hasDropdown) {
                return (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      onMouseEnter={() => setServicesOpen(true)}
                      className={`relative flex items-center gap-1 px-3 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-sm ${
                        servicesOpen || pathname.startsWith('/services') || pathname.includes('repair') || pathname.includes('service') || pathname.includes('maintenance') || pathname.includes('installation') || pathname.includes('testing') || pathname.includes('avr') || pathname.includes('control') || pathname.includes('fuel') || pathname.includes('rewinding') || pathname.includes('emergency')
                          ? 'text-[#c8a84b]'
                          : 'text-white/65 hover:text-white'
                      }`}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg
                        width="10" height="10" viewBox="0 0 10 10" fill="currentColor"
                        className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      </svg>
                    </button>

                    {/* Mega dropdown */}
                    {servicesOpen && (
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[520px] bg-[#111111] border border-white/[0.08] shadow-2xl"
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        {/* Gold top rule */}
                        <div className="h-[2px] bg-gradient-to-r from-transparent via-[#c8a84b] to-transparent" />
                        <div className="p-5">
                          <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 mb-4">
                            All Services
                          </p>
                          <ul className="grid grid-cols-2 gap-x-6 gap-y-1">
                            {services.map((s) => (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  onClick={() => setServicesOpen(false)}
                                  className={`flex flex-col py-2.5 border-b border-white/[0.05] group/item transition-colors ${
                                    pathname === s.href ? 'border-[#c8a84b]/30' : ''
                                  }`}
                                >
                                  <span className={`text-[13px] font-semibold transition-colors ${pathname === s.href ? 'text-[#c8a84b]' : 'text-white/80 group-hover/item:text-[#c8a84b]'}`}>
                                    {s.label}
                                  </span>
                                  <span className="text-[11px] text-white/35 mt-0.5">{s.desc}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 pt-4 border-t border-white/[0.06] flex justify-between items-center">
                            <Link
                              href="/services"
                              onClick={() => setServicesOpen(false)}
                              className="text-[12px] text-[#c8a84b] hover:text-white font-semibold tracking-wide uppercase transition-colors"
                            >
                              View all services
                            </Link>
                            <a
                              href="tel:0603160484"
                              className="text-[12px] text-white/40 hover:text-white transition-colors"
                            >
                              Emergency: 060 316 0484
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-sm ${
                    pathname === link.href ? 'text-[#c8a84b]' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute inset-x-3 bottom-0 h-[2px] bg-[#c8a84b] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="tel:0603160484"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#b91c1c] text-white text-[13px] font-bold tracking-wide hover:bg-red-800 transition-colors focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] shrink-0"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] text-white focus:outline-none focus:ring-2 focus:ring-[#c8a84b] focus:ring-offset-1 focus:ring-offset-[#0a0a0a]"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <span className={`block w-5 h-[2px] bg-current origin-center transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-[2px] bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[2px] bg-current origin-center transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[680px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="h-px bg-gradient-to-r from-transparent via-[#c8a84b]/40 to-transparent" />
        <div className="bg-[#0d0d0d] px-6 pt-3 pb-6">
          <ul className="space-y-0">
            {navLinks.map((link) => {
              const active = pathname === link.href
              if (link.hasDropdown) {
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.06] text-white/75 hover:text-white transition-colors"
                    >
                      Services
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="currentColor"
                        className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      >
                        <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {/* Mobile services sub-list */}
                    <div className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
                      <ul className="pl-4 py-2 space-y-0">
                        {services.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={() => setIsMenuOpen(false)}
                              className={`flex py-2.5 text-[13px] border-b border-white/[0.04] transition-colors ${pathname === s.href ? 'text-[#c8a84b]' : 'text-white/55 hover:text-white'}`}
                            >
                              {s.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block pt-3 text-[12px] font-bold tracking-widest uppercase text-[#c8a84b]">
                            All Services →
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                )
              }
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between w-full py-3.5 text-[15px] font-medium border-b border-white/[0.06] transition-colors ${active ? 'text-[#c8a84b]' : 'text-white/75 hover:text-white'}`}
                  >
                    {link.label}
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-[#c8a84b]" aria-hidden="true" />}
                  </Link>
                </li>
              )
            })}
          </ul>
          <a
            href="tel:0603160484"
            className="mt-5 flex items-center justify-center gap-2.5 w-full py-4 bg-[#b91c1c] text-white font-bold text-[15px] tracking-wide hover:bg-red-800 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call 060 316 0484
          </a>
        </div>
      </div>
    </header>
  )
}
