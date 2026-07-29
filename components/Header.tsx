'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import EmwLogo from './EmwLogo'
import MobileMenu from './MobileMenu'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[rgba(11,14,12,.80)] backdrop-blur">
      <div className="mx-auto max-w-7xl h-14 px-6 lg:px-12 flex items-center justify-between relative">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <EmwLogo size={28} />
          <span className="sr-only">Euan Michael Wattley Videography</span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
            return (
              <Link
                key={href}
                href={href}
                className={`nav-link inline-flex items-center px-3 py-1 text-sm font-medium tracking-wide transition-colors duration-150
                  ${isActive ? 'text-white' : 'text-white/55 hover:text-white'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
                {/* Active dot */}
                {isActive && (
                  <span className="ml-1.5 w-1 h-1 rounded-full bg-emw-deep-green inline-block" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Right side: Inquire CTA + mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/consultation"
            className="hidden md:inline-flex items-center gap-2 font-jakarta text-xs font-semibold tracking-wide border border-white/20 hover:border-white/50 text-white/70 hover:text-white px-4 py-1.5 transition-all duration-200"
          >
            Inquire
          </Link>
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  )
}
