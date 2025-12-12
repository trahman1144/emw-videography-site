import type { Metadata } from 'next'
import Section from '@/components/Section'
import ContactCard from '@/components/ContactCard'
import IconBadge from '@/components/IconBadge'
import { BRAND, SOCIAL_LINKS } from '@/lib/constants'
import { InstagramIcon, VimeoIcon, YouTubeIcon, LinkedInIcon } from '@/components/icons/Social'

export const metadata: Metadata = {
  title: 'Contact | Euan Michael Wattley Videography',
  description: 'Get in touch with Euan Michael Wattley for professional videography services. Contact us for weddings, corporate videos, music videos, and more.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-emw-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-emw-soft-green mb-8">
            Let's create something amazing together
          </p>
          <p className="text-lg text-emw-white/80 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch with us to discuss your project 
            and how we can help you create something truly special.
          </p>
        </div>
      </Section>

      {/* Contact Information */}
      <Section className="bg-emw-soft-green/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-emw-white mb-8">
                Get In Touch
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconBadge name="chat" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emw-white mb-2">
                      Email Us
                    </h3>
                    <a
                      href={`mailto:${BRAND.email}`}
                      className="text-emw-deep-green hover:text-emw-soft-green transition-colors duration-300"
                    >
                      {BRAND.email}
                    </a>
                    <p className="text-white/70 text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconBadge name="chat" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emw-white mb-2">
                      Call Us
                    </h3>
                    <a
                      href="tel:+442079460958"
                      className="text-emw-deep-green hover:text-emw-soft-green transition-colors duration-300"
                    >
                      +44 20 7946 0958
                    </a>
                    <p className="text-white/70 text-sm mt-1">
                      Available Monday-Friday, 9AM-6PM GMT
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconBadge name="globe" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emw-white mb-2">
                      Location
                    </h3>
                    <p className="text-white/70">
                      Based in London, United Kingdom<br />
                      Serving clients across the UK and worldwide
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconBadge name="calendar" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-emw-white mb-2">
                      Business Hours
                    </h3>
                    <p className="text-white/70">
                      Monday - Friday: 9:00 AM - 6:00 PM GMT<br />
                      Saturday: 10:00 AM - 4:00 PM GMT<br />
                      Sunday: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactCard />
            </div>
          </div>
        </div>
      </Section>

      {/* Social Media */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              Follow My Work
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              Stay connected and see my latest projects on social media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: 'Instagram',
                handle: '@euanmichaelwattley',
                description: 'Behind-the-scenes content and project highlights',
                icon: InstagramIcon,
                href: SOCIAL_LINKS.instagram,
              },
              {
                name: 'Vimeo',
                handle: 'euanmichaelwattley',
                description: 'High-quality portfolio videos and client work',
                icon: VimeoIcon,
                href: SOCIAL_LINKS.vimeo,
              },
              {
                name: 'YouTube',
                handle: '@euanmichaelwattley',
                description: 'Tutorials, tips, and extended project content',
                icon: YouTubeIcon,
                href: SOCIAL_LINKS.youtube,
              },
              {
                name: 'LinkedIn',
                handle: 'euanmichaelwattley',
                description: 'Professional updates and industry insights',
                icon: LinkedInIcon,
                href: SOCIAL_LINKS.linkedin,
              },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-[color:rgba(0,0,0,0.25)] p-6 hover:border-[#0D4D37] transition"
                >
                  <div className="flex justify-center mb-4">
                    <span className="icon-wrap text-white/80 hover:text-[#0D4D37]">
                      <IconComponent className="w-5 h-5" />
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-emw-white mb-2">
                    {social.name}
                  </h3>
                  <p className="text-emw-deep-green font-medium mb-3">
                    {social.handle}
                  </p>
                  <p className="text-white/70 text-sm">
                    {social.description}
                  </p>
                </a>
              )
            })}
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-emw-deep-green/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              Common questions about my videography services
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How far in advance should I book?',
                answer: 'I recommend booking at least 3-6 months in advance for weddings and 2-4 weeks for other projects. However, I can often accommodate last-minute requests depending on availability.',
              },
              {
                question: 'Do you travel for projects?',
                answer: 'Yes, I travel worldwide for projects. Travel expenses are included in my quotes, and I have experience working in various locations and conditions.',
              },
              {
                question: 'What is included in your packages?',
                answer: 'My packages typically include filming, basic editing, color grading, and final delivery. Additional services like drone footage, extended editing, or rush delivery can be added for an additional fee.',
              },
              {
                question: 'How long does post-production take?',
                answer: 'Post-production typically takes 4-6 weeks for weddings and 2-4 weeks for other projects. Rush delivery is available for an additional fee.',
              },
              {
                question: 'Do you provide raw footage?',
                answer: 'Raw footage can be provided upon request for an additional fee. I typically deliver the final edited video, but raw footage is available for clients who want to keep it.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-emw-soft-green/10 border border-emw-soft-green/20 rounded-lg p-6"
              >
                <h3 className="text-lg font-semibold text-emw-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-emw-white/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
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
            Let's discuss your project and create something truly special together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultation" className="btn-primary">
              Book a Consultation
            </a>
            <a href={`mailto:${BRAND.email}`} className="btn-secondary">
              Send Email
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
