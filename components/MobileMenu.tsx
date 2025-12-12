'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { InstagramIcon, YouTubeIcon, TikTokIcon } from '@/components/icons/Social'

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export default function MobileMenu() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      {/* hamburger controlled externally in Header OR include here */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center h-10 w-10 text-white/90 hover:text-white md:hidden"
      >
        {!open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M18 6l-12 12" />
          </svg>
        )}
      </button>

      {/* overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[59] drawer-overlay transition-opacity duration-200 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* panel */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        className={`fixed top-0 right-0 z-[60] h-dvh w-[84%] max-w-[380px] drawer-panel transition-transform duration-250 flex flex-col ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* close */}
        <div className="flex items-center justify-end h-14 px-4">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="h-9 w-9 inline-flex items-center justify-center text-white/85 hover:text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          </button>
        </div>

        {/* content */}
        <div className="px-6 flex-1 flex flex-col">
          <nav className="mt-2 flex flex-col items-start">
            {NAV.map((l, i) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`drawer-link ${active ? 'text-white' : 'text-white/95'}`}
                  style={{ animationDelay: `${0.07 * (i + 1)}s` }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="mt-10" style={{ animation: 'fadeRise 0.22s ease 0.5s forwards', opacity: 0 }}>
            <Link href="/contact" className="drawer-cta">
              Book Now
            </Link>
          </div>
        </div>

        {/* socials */}
        <div
          className="mt-auto px-6 py-6 border-t border-white/10"
          style={{ animation: 'fadeRise 0.22s ease 0.6s forwards', opacity: 0 }}
        >
          <div className="social-row flex items-center justify-center gap-4">
            <a href="#" aria-label="Instagram">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <YouTubeIcon className="w-5 h-5" />
            </a>
            <a href="#" aria-label="TikTok">
              <TikTokIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}
