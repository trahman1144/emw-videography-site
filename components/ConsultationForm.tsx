'use client'

import { useState } from 'react'
import Select from './Select'

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    eventDate: '',
    location: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const subject = `Consultation Request - ${formData.projectType}`
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Event Date: ${formData.eventDate}
Location: ${formData.location}
Budget: ${formData.budget}

Message:
${formData.message}
    `.trim()

    const mailtoLink = `mailto:euanmichaelwattley@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoLink)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form onSubmit={handleSubmit} id="consultation-form" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            label="Project Type *"
            name="projectType"
            placeholder="Select project type"
            options={[
              { label: 'Wedding', value: 'Wedding' },
              { label: 'Corporate', value: 'Corporate' },
              { label: 'Music Video', value: 'Music Video' },
              { label: 'Event', value: 'Event' },
              { label: 'Other', value: 'Other' },
            ]}
            value={formData.projectType}
            onChange={(value) => setFormData(prev => ({ ...prev, projectType: value }))}
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
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="form-control resize-none"
            placeholder="Tell us about your project, vision, and any specific requirements..."
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <button
          type="submit"
          className="flex-1 btn-primary"
        >
          Request Consultation
        </button>
        <button
          type="button"
          onClick={() => window.location.href = '/contact'}
          className="flex-1 btn-secondary"
        >
          Contact Instead
        </button>
      </div>
    </form>
  )
}
