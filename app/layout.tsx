import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-code',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Euan Michael Wattley Videography | Voir le Monde',
  description:
    'Professional videography services for weddings, corporate events, music videos, and more. Cinematic storytelling that captures your vision.',
  keywords:
    'videography, wedding videographer, corporate video, music video, drone footage, video editing, London',
  authors: [{ name: 'Euan Michael Wattley' }],
  openGraph: {
    title: 'Euan Michael Wattley Videography',
    description:
      'Professional videography services for weddings, corporate events, music videos, and more.',
    type: 'website',
    locale: 'en_GB',
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
    <html lang="en" className={`${jakarta.variable} ${jetbrainsMono.variable}`}>
      <body className="font-jakarta">
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
