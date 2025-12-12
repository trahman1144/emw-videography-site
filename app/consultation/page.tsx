import type { Metadata } from 'next'
import Section from '@/components/Section'
import ConsultationForm from '@/components/ConsultationForm'
import IconBadge from '@/components/IconBadge'

export const metadata: Metadata = {
  title: 'Book a Consultation | Euan Michael Wattley Videography',
  description: 'Book a free consultation to discuss your videography project. Professional advice and creative direction for your next video project.',
}

export default function ConsultationPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-emw-white mb-6">
            Book a Consultation
          </h1>
          <p className="text-xl text-emw-soft-green mb-8">
            {"Let's discuss your vision"}
          </p>
          <p className="text-lg text-emw-white/80 max-w-2xl mx-auto">
            Ready to bring your project to life? Book a free consultation to discuss 
            your vision, requirements, and how we can create something truly special together.
          </p>
        </div>
      </Section>

      {/* Consultation Form */}
      <Section className="bg-emw-soft-green/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              Get Started Today
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              {"Fill out the form below and I'll get back to you within 24 hours to schedule your consultation."}
            </p>
          </div>

          <div className="bg-emw-soft-green/10 border border-emw-soft-green/20 rounded-lg p-8">
            <ConsultationForm />
          </div>
        </div>
      </Section>

      {/* What to Expect */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              What to Expect
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              My consultation process is designed to understand your vision and provide expert guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Discussion',
                description: 'I discuss your project goals, timeline, and creative vision in detail.',
                icon: 'chat' as const,
              },
              {
                step: '02',
                title: 'Technical Review',
                description: 'I assess your technical requirements and recommend the best approach.',
                icon: 'cog' as const,
              },
              {
                step: '03',
                title: 'Creative Direction',
                description: 'I provide creative direction and suggestions to enhance your project.',
                icon: 'palette' as const,
              },
              {
                step: '04',
                title: 'Budget Planning',
                description: 'I create a detailed budget breakdown that fits your requirements.',
                icon: 'coin' as const,
              },
              {
                step: '05',
                title: 'Timeline Development',
                description: 'I establish a realistic timeline for your project completion.',
                icon: 'calendar' as const,
              },
              {
                step: '06',
                title: 'Next Steps',
                description: 'I outline the next steps and how to move forward with your project.',
                icon: 'check' as const,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-[color:rgba(0,0,0,0.25)] p-6 hover:border-[#0D4D37] transition"
              >
                <div className="flex justify-center mb-4">
                  <IconBadge name={step.icon} />
                </div>
                <div className="text-emw-deep-green font-bold text-lg mb-2">
                  {step.step}
                </div>
                <span className="sr-only">{step.title}</span>
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

      {/* Benefits Section */}
      <Section className="bg-emw-deep-green/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              Why Book a Consultation?
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              Get expert advice and professional guidance for your videography project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: 'Expert Guidance',
                  description: 'Get professional advice from an experienced videographer with 8+ years in the industry.',
                  icon: 'chat' as const,
                },
                {
                  title: 'Creative Direction',
                  description: 'Receive creative direction and suggestions to enhance your project vision.',
                  icon: 'palette' as const,
                },
                {
                  title: 'Technical Expertise',
                  description: 'Learn about the latest equipment and techniques for your specific needs.',
                  icon: 'cog' as const,
                },
                {
                  title: 'Budget Optimization',
                  description: 'Get advice on how to maximize your budget and achieve the best results.',
                  icon: 'coin' as const,
                },
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconBadge name={benefit.icon} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emw-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-emw-soft-green/10 border border-emw-soft-green/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-emw-white mb-6">
                Consultation Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-emw-white/80">Duration</span>
                  <span className="text-emw-white font-semibold">30-45 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emw-white/80">Format</span>
                  <span className="text-emw-white font-semibold">Video Call</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emw-white/80">Cost</span>
                  <span className="text-emw-deep-green font-semibold">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-emw-white/80">Response Time</span>
                  <span className="text-emw-white font-semibold">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-emw-white/80 mb-8">
            {"Book your free consultation today and let's bring your vision to life."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#consultation-form" className="btn-primary">
              Book Now
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

