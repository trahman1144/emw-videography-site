import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'Euan Michael Wattley Videography | Voir le Monde',
  description: 'Professional videography services for weddings, corporate events, music videos, and more. Cinematic storytelling that captures your vision.',
  keywords: 'videography, wedding videographer, corporate video, music video, drone footage, video editing',
  authors: [{ name: 'Euan Michael Wattley' }],
  openGraph: {
    title: 'Euan Michael Wattley Videography',
    description: 'Professional videography services for weddings, corporate events, music videos, and more.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat">
        <Header />
        <main className="pt-14 pb-mobile-nav">
          {children}
        </main>
        <Footer />
        <MobileNav />
        <div className="mobile-nav-safe md:hidden" aria-hidden="true" />
      </body>
    </html>
  )
}
