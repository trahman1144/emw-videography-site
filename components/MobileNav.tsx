'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon, type IconName } from './Icon'

export default function MobileNav() {
  const pathname = usePathname()

  const navItems: Array<{ name: string; href: string; icon: IconName }> = [
    { name: 'Home', href: '/', icon: 'camera' },
    { name: 'Work', href: '/portfolio', icon: 'clapper' },
    { name: 'Services', href: '/services', icon: 'cog' },
    { name: 'Book', href: '/consultation', icon: 'calendar' },
    { name: 'Contact', href: '/contact', icon: 'chat' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[color:rgba(0,0,0,0.75)] backdrop-blur border-t border-white/10 pb-[env(safe-area-inset-bottom)]">
      <div 
        className="flex items-center justify-around"
        style={{ height: 'var(--mobile-nav-h)' }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center flex-1 py-2"
              aria-label={item.name}
            >
              <Icon 
                name={item.icon} 
                size={20} 
                className={isActive ? 'text-emw-deep-green' : 'text-emw-white'} 
              />
              <span className="text-[11px] mt-1 font-medium">{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
