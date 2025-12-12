import type { Metadata } from 'next'
import Section from '@/components/Section'
import ServiceCard from '@/components/ServiceCard'
import IconBadge from '@/components/IconBadge'
import { SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Services | Euan Michael Wattley Videography',
  description: 'Professional videography services including wedding videography, corporate videos, music videos, drone footage, video editing, and consultation.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-emw-white mb-6">
            My Services
          </h1>
          <p className="text-xl text-emw-soft-green mb-8">
            Professional videography solutions for every need
          </p>
          <p className="text-lg text-emw-white/80 max-w-2xl mx-auto">
            From concept to completion, I offer comprehensive videography services 
            tailored to your specific requirements and creative vision.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section className="bg-emw-soft-green/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              What I Offer
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              Comprehensive videography services designed to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              How I Work
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              My streamlined process ensures exceptional results from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description: 'I start with a detailed consultation to understand your vision, timeline, and budget requirements.',
                icon: 'chat' as const,
              },
              {
                step: '02',
                title: 'Creative Planning',
                description: 'I develop a comprehensive creative strategy and production timeline tailored to your needs.',
                icon: 'palette' as const,
              },
              {
                step: '03',
                title: 'Production',
                description: 'Professional filming with state-of-the-art equipment and my experienced approach.',
                icon: 'clapper' as const,
              },
              {
                step: '04',
                title: 'Post-Production',
                description: 'Expert editing, color grading, and sound design to create your final masterpiece.',
                icon: 'cog' as const,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-[color:rgba(0,0,0,0.25)] p-6 hover:border-[#0D4D37] transition text-center"
              >
                <div className="flex justify-center mb-4">
                  <IconBadge name={step.icon} />
                </div>
                <div className="text-emw-deep-green font-bold text-lg mb-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-emw-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Equipment Section */}
      <Section className="bg-emw-deep-green/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              Professional Equipment
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              I use only the finest professional equipment to ensure the highest quality results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: 'Cameras',
                items: ['Sony FX6', 'Canon C70', 'Blackmagic URSA Mini Pro'],
                icon: 'camera' as const,
              },
              {
                category: 'Audio',
                items: ['Rode Wireless Pro', 'Zoom H6', 'Sennheiser MKE 600'],
                icon: 'music' as const,
              },
              {
                category: 'Lighting',
                items: ['Aputure 300D', 'Godox SL-60W', 'Neewer LED Panels'],
                icon: 'palette' as const,
              },
              {
                category: 'Stabilization',
                items: ['DJI Ronin RS3', 'Manfrotto Tripods', 'Gimbal Systems'],
                icon: 'cog' as const,
              },
              {
                category: 'Drones',
                items: ['DJI Mavic 3 Pro', 'DJI Air 2S', 'Professional Drone License'],
                icon: 'camera' as const,
              },
              {
                category: 'Post-Production',
                items: ['Adobe Creative Suite', 'DaVinci Resolve', 'Pro Tools'],
                icon: 'cog' as const,
              },
            ].map((equipment, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-[color:rgba(0,0,0,0.25)] p-6 hover:border-[#0D4D37] transition"
              >
                <div className="flex justify-center mb-4">
                  <IconBadge name={equipment.icon} />
                </div>
                <h3 className="text-xl font-bold text-emw-white mb-4">
                  {equipment.category}
                </h3>
                <ul className="space-y-2">
                  {equipment.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-white/70 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-6">
            Investment & Pricing
          </h2>
          <p className="text-lg text-emw-white/80 mb-12">
            Every project is unique, and so is my pricing. I work with you to create 
            a package that fits your budget and delivers exceptional value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Wedding Packages',
                price: 'Starting at £2,000',
                features: ['Full day coverage', '2-3 minute highlight reel', 'Full ceremony & reception', 'Drone footage included'],
                popular: false,
              },
              {
                title: 'Corporate Videos',
                price: 'Starting at £1,200',
                features: ['Professional filming', 'Multiple locations', 'Interview setup', 'Brand integration'],
                popular: true,
              },
              {
                title: 'Music Videos',
                price: 'Starting at £2,500',
                features: ['Creative direction', 'Multiple setups', 'Professional editing', 'Color grading'],
                popular: false,
              },
            ].map((package_, index) => (
              <div
                key={index}
                className={`relative bg-emw-soft-green/10 border border-emw-soft-green/20 rounded-lg p-8 hover:bg-emw-soft-green/20 transition-all duration-300 ${
                  package_.popular ? 'ring-2 ring-emw-deep-green' : ''
                }`}
              >
                {package_.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emw-deep-green text-emw-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-emw-white mb-2">
                  {package_.title}
                </h3>
                <div className="text-3xl font-bold text-emw-deep-green mb-6">
                  {package_.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {package_.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-emw-white/80">
                      <svg
                        className="w-5 h-5 text-emw-deep-green flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/consultation" className="w-full btn-primary block text-center">
                  Get Quote
                </a>
              </div>
            ))}
          </div>

          <div className="bg-emw-soft-green/10 border border-emw-soft-green/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-emw-white mb-4">
              Custom Projects
            </h3>
            <p className="text-emw-white/80 mb-6">
              Have a unique project in mind? I love working on custom videography projects 
              and can create a tailored package just for you.
            </p>
            <a href="/consultation" className="btn-primary">
              Discuss Your Project
            </a>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-emw-deep-green/20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-emw-white/80 mb-8">
            Let's discuss your project and create something truly special together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultation" className="btn-primary">
              Book a Consultation
            </a>
            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
