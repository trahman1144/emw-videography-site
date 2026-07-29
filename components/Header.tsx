'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import EmwLogo from './EmwLogo'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { href: '/portfolio', label: 'WORK', index: '01' },
  { href: '/services', label: 'SERVICES', index: '02' },
  { href: '/about', label: 'ABOUT', index: '03' },
  { href: '/testimonials', label: 'TESTIMONIALS', index: '04' },
  { href: '/contact', label: 'CONTACT', index: '05' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 py-4 px-6 md:px-12">
      <div className="mx-auto max-w-7xl flex items-center justify-between relative">

        {/* Rotating EMW Logo Mark (Preserved as Core Brand Element) */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <EmwLogo size={32} />
          <span className="sr-only">Euan Michael Wattley Videography</span>
        </Link>

        {/* High-tracking Monospace Nav Links */}
        <nav
          className="hidden md:flex items-center gap-8 font-mono text-xs tracking-[0.2em]"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label, index }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-200 flex items-center gap-1.5 ${
                  isActive ? 'text-white font-medium' : 'text-zinc-400 hover:text-white'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="text-emerald-500/80 text-[10px]">{index} /</span>
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right Call To Action & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <Link
            href="/consultation"
            className="hidden md:inline-flex items-center gap-2.5 border border-white/20 hover:bg-white hover:text-black transition-all px-4 py-2 text-xs font-mono tracking-widest text-white uppercase group"
          >
            <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-500 flex-shrink-0 group-hover:bg-emerald-600" />
            <span>AVAILABLE FOR BOOKING</span>
          </Link>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>

      </div>
    </header>
  )
}
