'use client'

import { useState, useEffect, useRef } from 'react'
import { BRAND } from '@/lib/constants'
import Select from './Select'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  service?: string
}

export default function QuoteModal({ isOpen, onClose, service }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: service || '',
    eventDate: '',
    location: '',
    budget: '',
    message: '',
  })

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      modalRef.current?.focus()
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = `Quote Request - ${formData.service}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Event Date: ${formData.eventDate}
Location: ${formData.location}
Budget: ${formData.budget}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
    onClose()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div
        ref={modalRef}
        className="relative bg-emw-black border border-emw-soft-green/20 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 id="modal-title" className="text-2xl font-bold text-emw-white">
            Get a Quote
          </h2>
          <button
            onClick={onClose}
            className="text-emw-white/70 hover:text-emw-white transition-colors duration-300"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-emw-white mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="form-control"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-emw-white mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="form-control"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-emw-white mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <Select
                label="Service *"
                name="service"
                placeholder="Select a service"
                options={[
                  { label: 'Videography', value: 'Videography' },
                  { label: 'Video Editing', value: 'Video Editing' },
                  { label: 'Animation', value: 'Animation' },
                  { label: 'Sound Design', value: 'Sound Design' },
                  { label: 'Drone Footage', value: 'Drone Footage' },
                  { label: 'Consultation', value: 'Consultation' },
                ]}
                value={formData.service}
                onChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
              />
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium text-emw-white mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-emw-white mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Event location"
              />
            </div>

            <div className="md:col-span-2">
              <Select
                label="Budget Range"
                name="budget"
                placeholder="Select budget range"
                options={[
                  { label: 'Under £800', value: 'Under £800' },
                  { label: '£800 - £2,000', value: '£800 - £2,000' },
                  { label: '£2,000 - £4,000', value: '£2,000 - £4,000' },
                  { label: '£4,000 - £8,000', value: '£4,000 - £8,000' },
                  { label: 'Over £8,000', value: 'Over £8,000' },
                ]}
                value={formData.budget}
                onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-emw-white mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="form-control resize-none"
                placeholder="Tell us about your project, vision, and any specific requirements..."
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 btn-primary"
            >
              Send Quote Request
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
