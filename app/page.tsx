import Section from '@/components/Section'
import VideoEmbed from '@/components/VideoEmbed'
import IconBadge from '@/components/IconBadge'
import { BRAND, PORTFOLIO_CATEGORIES } from '@/lib/constants'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[100dvh] flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-emw-white mb-4">
              {BRAND.name}
            </h1>
            <div className="text-lg lg:text-xl font-medium text-emw-deep-green tracking-wider uppercase relative animate-slide-up">
              {BRAND.tagline}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-px bg-emw-deep-green"></div>
            </div>
          </div>
          <p className="text-lg text-emw-white/80 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Cinematic storytelling that captures your vision. Professional videography for weddings, 
            corporate events, music videos, and more.
          </p>
          
          {/* Hero Video */}
          <div className="max-w-4xl mx-auto mb-12 animate-slide-up pointer-events-none">
            <div className="relative aspect-video rounded-xl border border-white/10 overflow-hidden pointer-events-auto">
              <iframe
                src="https://www.youtube.com/embed/x260JiQhGm0?rel=0&modestbranding=1&playsinline=1"
                title="Demo Reel EMW"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="/portfolio" className="btn-primary">
              View Our Work
            </a>
            <a href="/consultation" className="btn-secondary">
              Book Consultation
            </a>
          </div>
        </div>
      </Section>

      {/* Portfolio Preview */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
            My Portfolio
          </h2>
          <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
            Explore my diverse range of videography services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={`/portfolio#${category.id}`}
              className="group rounded-2xl border border-white/10 bg-[color:rgba(0,0,0,0.25)] p-6 hover:border-[#0D4D37] transition"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {category.id === 'weddings' && <IconBadge name="camera" />}
                  {category.id === 'corporate' && <IconBadge name="briefcase" />}
                  {category.id === 'music' && <IconBadge name="music" />}
                  {category.id === 'events' && <IconBadge name="event" />}
                </div>
                <h3 className="text-xl font-bold text-emw-white mb-2">
                  {category.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/portfolio" className="btn-primary">
            View My Portfolio
          </a>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-emw-deep-green/20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-emw-white/80 mb-8">
            Let's discuss your project and bring your vision to life with professional videography services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultation" className="btn-primary">
              Book a Consultation
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
