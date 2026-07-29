'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BRAND } from '@/lib/constants'

const NAV_ITEMS = [
  { href: '/', label: 'HOME', index: '00' },
  { href: '/portfolio', label: 'WORK', index: '01' },
  { href: '/services', label: 'SERVICES', index: '02' },
  { href: '/about', label: 'ABOUT', index: '03' },
  { href: '/testimonials', label: 'TESTIMONIALS', index: '04' },
  { href: '/contact', label: 'CONTACT', index: '05' },
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
      {/* Hamburger Trigger */}
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center justify-center h-10 w-10 text-white/90 hover:text-white focus:outline-none"
      >
        {!open ? (
          <div className="space-y-1.5 flex flex-col items-end">
            <span className="block w-6 h-0.5 bg-white transition-all"></span>
            <span className="block w-4 h-0.5 bg-white transition-all"></span>
          </div>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>

      {/* Full-Screen Dark Overlay with Giant Editorial Typography */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 animate-fade-in">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="font-mono text-xs tracking-[0.2em] text-emerald-500 uppercase">
              NAVIGATION
            </span>
            <button
              onClick={() => setOpen(false)}
              className="font-mono text-xs tracking-widest text-white/70 hover:text-white px-3 py-1.5 border border-white/20 uppercase"
            >
              [ CLOSE ]
            </button>
          </div>

          {/* Giant Editorial Links */}
          <nav className="my-auto py-6 flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-4 text-left"
                >
                  <span className="font-mono text-xs text-emerald-500 tracking-widest">
                    {item.index}
                  </span>
                  <span
                    className={`font-jakarta font-extrabold text-4xl sm:text-6xl tracking-tight transition-all duration-300 ${
                      isActive ? 'text-white pl-2' : 'text-white/40 group-hover:text-white group-hover:pl-2'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </nav>

          {/* Footer CTA & Socials */}
          <div className="border-t border-white/10 pt-6 space-y-6">
            <Link
              href="/consultation"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center gap-3 border border-white/30 bg-white text-black py-4 font-mono text-xs tracking-[0.2em] uppercase font-bold hover:bg-emerald-500 hover:text-white transition-all"
            >
              <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-500" />
              <span>AVAILABLE FOR BOOKING — INQUIRE NOW</span>
            </Link>

            <div className="flex items-center justify-between text-white/50 text-xs font-mono">
              <span>LONDON, UK</span>
              <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                {BRAND.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
