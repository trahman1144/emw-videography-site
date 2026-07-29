'use client'

import Image from 'next/image'

export default function EmwLogo({ 
  size = 32,
  className = ''
}: { 
  size?: number
  className?: string 
}) {
  return (
    <div 
      className={`emw-logo-container ${className}`}
      aria-label="EMW logo"
    >
      <div 
        className="emw-logo-wrapper"
        style={{ width: size, height: size }}
      >
        <Image
          src="/brand/logo_EMW.png"
          alt="EMW Logo"
          width={size}
          height={size}
          className="emw-logo-image"
          priority
          quality={100}
        />
      </div>
      <div className="emw-logo-dot" />
    </div>
  )
}

