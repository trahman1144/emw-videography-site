'use client'

import Link from 'next/link'
import EmwMonogram from './EmwMonogram'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-[rgba(11,14,12,.75)] backdrop-blur">
      <div className="mx-auto max-w-6xl h-14 px-4 flex items-center justify-between relative">
        {/* Left brand block */}
        <Link href="/" className="flex items-center gap-2">
          <EmwMonogram />
          <span className="sr-only">Euan Michael Wattley Videography</span>
        </Link>

        {/* Desktop nav - centered */}
        <nav className="hidden md:flex items-center gap-6 text-base font-semibold absolute left-1/2 transform -translate-x-1/2">
          <Link
            href="/"
            className="nav-link inline-flex items-center px-1 py-1 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(13,77,55,.4)] transition-transform hover:scale-[1.03]"
          >
            Home
          </Link>
          <Link
            href="/portfolio"
            className="nav-link inline-flex items-center px-1 py-1 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(13,77,55,.4)] transition-transform hover:scale-[1.03]"
          >
            Portfolio
          </Link>
          <Link
            href="/services"
            className="nav-link inline-flex items-center px-1 py-1 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(13,77,55,.4)] transition-transform hover:scale-[1.03]"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="nav-link inline-flex items-center px-1 py-1 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(13,77,55,.4)] transition-transform hover:scale-[1.03]"
          >
            About
          </Link>
          <Link
            href="/testimonials"
            className="nav-link inline-flex items-center px-1 py-1 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(13,77,55,.4)] transition-transform hover:scale-[1.03]"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="nav-link inline-flex items-center px-1 py-1 text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(13,77,55,.4)] transition-transform hover:scale-[1.03]"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
