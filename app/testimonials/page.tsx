import type { Metadata } from 'next'
import Section from '@/components/Section'
import IconBadge from '@/components/IconBadge'
import { TESTIMONIALS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Testimonials | Euan Michael Wattley Videography',
  description: 'Read testimonials from our satisfied clients. See what couples, businesses, and artists say about our professional videography services.',
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-emw-white mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-emw-soft-green mb-8">
            What my clients say about me
          </p>
          <p className="text-lg text-emw-white/80 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            their experience working with me.
          </p>
        </div>
      </Section>

      {/* Testimonials Grid */}
      <Section className="bg-emw-soft-green/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-emw-soft-green/10 border border-emw-soft-green/20 rounded-lg p-8 hover:bg-emw-soft-green/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-emw-deep-green"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371.521 1.404 1.455l-.834 2.458a1 1 0 00-.95.69l-1.07 3.292c-.3.921-1.603.921-1.902 0l-1.07-3.292a1 1 0 00-.95-.69l-3.462 0c-.969 0-1.371-.521-1.404-1.455l.834-2.458a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-emw-white/90 italic mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                <div className="border-t border-emw-soft-green/20 pt-4">
                  <div className="font-semibold text-emw-white">
                    {testimonial.name}
                  </div>
                  <div className="text-emw-white/70 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Additional Testimonials */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              More Client Stories
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              Real experiences from real clients who trusted me with their most important moments
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                name: 'Jennifer & Michael',
                role: 'Wedding Couple',
                content: 'Euan captured our wedding day with such artistry and attention to detail. The video brings tears to our eyes every time we watch it. He truly understood our vision and brought it to life.',
                rating: 5,
                project: 'Wedding Videography',
              },
              {
                name: 'Sarah Chen',
                role: 'Marketing Director',
                content: 'Working with Euan on our corporate video was an absolute pleasure. His professionalism and creative vision exceeded our expectations. The final product perfectly captured our brand story.',
                rating: 5,
                project: 'Corporate Video',
              },
              {
                name: 'The Midnight Band',
                role: 'Music Artists',
                content: 'Euan brought our music video concept to life in ways we never imagined. His creative direction and technical expertise created something truly special that represents our music perfectly.',
                rating: 5,
                project: 'Music Video',
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-emw-soft-green/10 border border-emw-soft-green/20 rounded-lg p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-emw-deep-green rounded-full flex items-center justify-center text-emw-white text-xl font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-emw-deep-green mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371.521 1.404 1.455l-.834 2.458a1 1 0 00-.95.69l-1.07 3.292c-.3.921-1.603.921-1.902 0l-1.07-3.292a1 1 0 00-.95-.69l-3.462 0c-.969 0-1.371-.521-1.404-1.455l.834-2.458a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <blockquote className="text-emw-white/90 italic mb-4 leading-relaxed text-lg">
                      "{testimonial.content}"
                    </blockquote>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-emw-white">
                          {testimonial.name}
                        </div>
                        <div className="text-emw-white/70 text-sm">
                          {testimonial.role}
                        </div>
                      </div>
                      <div className="text-emw-deep-green text-sm font-medium">
                        {testimonial.project}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-emw-deep-green/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              By the Numbers
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              My track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '200+', label: 'Happy Clients', icon: 'chat' as const },
              { number: '500+', label: 'Projects Completed', icon: 'clapper' as const },
              { number: '15+', label: 'Countries Worked', icon: 'globe' as const },
              { number: '100%', label: 'Client Satisfaction', icon: 'star' as const },
            ].map((stat, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-[color:rgba(0,0,0,0.25)] p-8 hover:border-[#0D4D37] transition text-center"
              >
                <div className="flex justify-center mb-4">
                  <IconBadge name={stat.icon} />
                </div>
                <div className="text-4xl font-bold text-emw-deep-green mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-6">
            Ready to Join My Happy Clients?
          </h2>
          <p className="text-lg text-emw-white/80 mb-8">
            Let's create something amazing together. Book a consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultation" className="btn-primary">
              Book a Consultation
            </a>
            <a href="/portfolio" className="btn-secondary">
              View Our Work
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
