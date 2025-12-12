'use client'

import { useState } from 'react'
import QuoteModal from './QuoteModal'
import IconBadge from './IconBadge'

import type { IconName } from './Icon'

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    features: readonly string[]
    icon: IconName
  }
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="group rounded-2xl border border-white/10 bg-[color:rgba(0,0,0,0.25)] p-6 hover:border-[#0D4D37] transition">
        <div className="flex items-center space-x-3 mb-4">
          <IconBadge name={service.icon} />
          <h3 className="text-xl font-bold text-emw-white">{service.title}</h3>
        </div>
        
        <p className="text-white/70 mb-4 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-white/70">
              <svg
                className="w-4 h-4 text-emw-deep-green flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full btn-primary"
          aria-label={`Get quote for ${service.title}`}
        >
          Get a Quote
        </button>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={service.title}
      />
    </>
  )
}
