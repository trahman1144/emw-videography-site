import type { Metadata } from 'next'
import Section from '@/components/Section'
import IconBadge from '@/components/IconBadge'
import { PORTFOLIO_CATEGORIES, FEATURED_VIDEOS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Portfolio | Euan Michael Wattley Videography',
  description: 'Explore our portfolio of wedding videos, corporate content, music videos, and event coverage. Professional videography that tells your story.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-emw-white mb-6">
            My Portfolio
          </h1>
          <p className="text-xl text-emw-soft-green mb-8">
            Cinematic storytelling across diverse projects
          </p>
          <p className="text-lg text-emw-white/80 max-w-2xl mx-auto">
            From intimate weddings to large corporate events, each project tells a unique story 
            crafted with professional expertise and creative vision.
          </p>
        </div>
      </Section>

      {/* Portfolio Categories */}
      {PORTFOLIO_CATEGORIES.map((category, categoryIndex) => {
        // Get featured video for this category
        const featuredVideo = category.id === 'music' ? FEATURED_VIDEOS.music :
                             category.id === 'events' ? FEATURED_VIDEOS.events :
                             category.id === 'corporate' ? FEATURED_VIDEOS.corporate :
                             null

        // Determine section title and subtitle based on category
        let sectionTitle: string = category.title
        let sectionSubtitle: string = category.description

        if (category.id === 'music') {
          sectionTitle = 'Creative Showreel'
          sectionSubtitle = 'Official music video demo'
        } else if (category.id === 'events') {
          sectionSubtitle = 'Event coverage and documentary-style highlights'
        } else if (category.id === 'corporate') {
          sectionSubtitle = 'Professional business videos and brand content'
        }

        return (
          <Section
            key={category.id}
            id={category.id}
            className={categoryIndex % 2 === 0 ? 'bg-emw-soft-green/5' : ''}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
                  {sectionTitle}
                </h2>
                <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
                  {sectionSubtitle}
                </p>
              </div>

              {/* Featured Video */}
              {featuredVideo && (
                <div className="mb-12">
                  <div className="relative aspect-video rounded-xl border border-white/10 overflow-hidden mb-4">
                    <iframe
                      title={featuredVideo.title}
                      src={featuredVideo.src}
                      className="absolute inset-0 h-full w-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-emw-white">
                      {featuredVideo.title}
                    </h3>
                  </div>
                </div>
              )}

              {/* Additional Videos Grid - only show for categories without featured videos */}
              {!featuredVideo && category.videos.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.videos.map((video, videoIndex) => {
                    const isVimeo = video.url?.includes('vimeo.com')
                    return (
                      <div key={video.id} className="space-y-4">
                        <div className="relative aspect-video rounded-xl border border-white/10 overflow-hidden">
                          <iframe
                            title={video.title}
                            src={video.url}
                            className="absolute inset-0 h-full w-full"
                            frameBorder="0"
                            allow={isVimeo ? "autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" : "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"}
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                          />
                        </div>
                        <div className="flex justify-between items-center">
                          <h3 className="text-xl font-semibold text-emw-white">
                            {video.title}
                          </h3>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </Section>
        )
      })}

      {/* Process Section */}
      <Section className="bg-emw-deep-green/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              My Process
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              From initial consultation to final delivery, I ensure every project exceeds expectations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your vision, requirements, and creative goals',
                icon: 'chat' as const,
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Detailed project planning and timeline development',
                icon: 'calendar' as const,
              },
              {
                step: '03',
                title: 'Production',
                description: 'Professional filming with state-of-the-art equipment',
                icon: 'clapper' as const,
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Final editing, color grading, and project delivery',
                icon: 'check' as const,
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
                <p className="text-white/70 text-sm">
                  {step.description}
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
            Ready to Create Your Story?
          </h2>
          <p className="text-lg text-emw-white/80 mb-8">
            {"Let's discuss your project and bring your vision to life with professional videography services."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultation" className="btn-primary">
              Book a Consultation
            </a>
            <a href="/services" className="btn-secondary">
              View Services
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
