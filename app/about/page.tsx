import type { Metadata } from 'next'
import Section from '@/components/Section'
import IconBadge from '@/components/IconBadge'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About | Euan Michael Wattley Videography',
  description: 'Learn about Euan Michael Wattley, a professional videographer specializing in cinematic storytelling for weddings, corporate events, and more.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-emw-white mb-6">
            About Euan Michael Wattley
          </h1>
          <p className="text-xl text-emw-soft-green mb-8">
            Professional Videographer & Cinematic Storyteller
          </p>
        </div>
      </Section>

      {/* Story Section */}
      <Section className="bg-emw-soft-green/5">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-emw-white mb-6">
                My Story
              </h2>
              <div className="space-y-4 text-emw-white/80 leading-relaxed">
                <p>
                  With over 8 years of experience in videography, I specialize in creating 
                  cinematic stories that capture the essence of your most important moments. 
                  From intimate weddings to large corporate events, I bring a professional 
                  eye and creative vision to every project.
                </p>
                <p>
                  My approach combines technical expertise with artistic storytelling, 
                  ensuring that each video not only looks stunning but also tells a compelling 
                  story that resonates with your audience.
                </p>
                <p>
                  {"Based in London, the heart of the UK's creative industry, I work with clients across the UK and worldwide to bring their visions to life through the power of video."}
                </p>
              </div>
            </div>
            <div className="bg-emw-soft-green/20 rounded-lg p-8 text-center">
              <div className="flex justify-center mb-4">
                <IconBadge name="clapper" />
              </div>
              <h3 className="text-2xl font-bold text-emw-white mb-4">
                Professional Experience
              </h3>
              <div className="space-y-3 text-emw-white/80">
                <div className="flex justify-between">
                  <span>Weddings Filmed</span>
                  <span className="text-emw-deep-green font-semibold">200+</span>
                </div>
                <div className="flex justify-between">
                  <span>Corporate Projects</span>
                  <span className="text-emw-deep-green font-semibold">150+</span>
                </div>
                <div className="flex justify-between">
                  <span>Years Experience</span>
                  <span className="text-emw-deep-green font-semibold">8+</span>
                </div>
                <div className="flex justify-between">
                  <span>Countries Worked</span>
                  <span className="text-emw-deep-green font-semibold">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-4">
              Expertise & Skills
            </h2>
            <p className="text-emw-white/80 text-lg max-w-2xl mx-auto">
              Professional videography services with cutting-edge technology and creative vision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cinematic Storytelling',
                description: 'Creating compelling narratives that engage and inspire audiences',
                icon: 'clapper' as const,
              },
              {
                title: 'Technical Excellence',
                description: '4K recording, professional audio, and advanced post-production',
                icon: 'cog' as const,
              },
              {
                title: 'Creative Direction',
                description: 'Bringing your vision to life with innovative approaches',
                icon: 'palette' as const,
              },
              {
                title: 'Event Coverage',
                description: 'Capturing every important moment with precision and artistry',
                icon: 'camera' as const,
              },
              {
                title: 'Post-Production',
                description: 'Color grading, editing, and motion graphics expertise',
                icon: 'cog' as const,
              },
              {
                title: 'Drone Cinematography',
                description: 'Aerial footage that adds cinematic depth to your projects',
                icon: 'camera' as const,
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-[color:rgba(0,0,0,0.25)] p-6 hover:border-[#0D4D37] transition"
              >
                <div className="flex justify-center mb-4">
                  <IconBadge name={skill.icon} />
                </div>
                <h3 className="text-xl font-bold text-emw-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-white/70">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section className="bg-emw-deep-green/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-8">
            My Philosophy
          </h2>
          <blockquote className="text-xl lg:text-2xl text-emw-white/90 italic leading-relaxed mb-8">
            {`"Every moment has a story worth telling. My mission is to capture those stories with authenticity, creativity, and technical excellence, creating videos that not only document events but celebrate the human experience."`}
          </blockquote>
          <p className="text-lg text-emw-white/80">
            — Euan Michael Wattley
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-emw-white mb-6">
            {"Let's Work Together"}
          </h2>
          <p className="text-lg text-emw-white/80 mb-8">
            {"Ready to bring your vision to life? I'd love to hear about your project and discuss how we can create something truly special together."}
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
