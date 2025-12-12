'use client'

import { useState, useEffect } from 'react'

const letters = ['E', 'M', 'W'] as const

export default function Logo() {
  const [currentLetter, setCurrentLetter] = useState(0)

  useEffect(() => {
    // Start cycling immediately
    const interval = setInterval(() => {
      setCurrentLetter((prev) => {
        const next = (prev + 1) % letters.length
        return next
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const currentLetterText = letters[currentLetter]

  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-8 h-8 flex items-center justify-center">
        {/* Render all letters, but only show the current one */}
        {letters.map((letter, index) => {
          const isActive = index === currentLetter
          return (
            <span
              key={`logo-${letter}-${index}`}
              className={`text-2xl font-bold transition-opacity duration-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                color: '#0D4D37',
              }}
              aria-hidden="true"
            >
              {letter}
            </span>
          )
        })}
      </div>
      <div className="w-2 h-2 bg-emw-deep-green rounded-full animate-pulse" />
    </div>
  )
}
