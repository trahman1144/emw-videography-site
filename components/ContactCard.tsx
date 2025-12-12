import { SOCIAL_LINKS, BRAND } from '@/lib/constants'
import { InstagramIcon, VimeoIcon, YouTubeIcon, LinkedInIcon } from '@/components/icons/Social'

export default function ContactCard() {
  const socialIcons = [
    { name: 'Instagram', href: SOCIAL_LINKS.instagram, icon: InstagramIcon },
    { name: 'Vimeo', href: SOCIAL_LINKS.vimeo, icon: VimeoIcon },
    { name: 'YouTube', href: SOCIAL_LINKS.youtube, icon: YouTubeIcon },
    { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: LinkedInIcon },
  ]

  return (
    <div className="bg-emw-soft-green/10 border border-emw-soft-green/20 rounded-lg p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-emw-white mb-2">Get In Touch</h3>
        <p className="text-emw-white/80">
          Ready to bring your vision to life? Let&apos;s discuss your project.
        </p>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <a
            href={`mailto:${BRAND.email}`}
            className="text-emw-deep-green hover:text-emw-soft-green transition-colors duration-300 text-lg font-medium"
          >
            {BRAND.email}
          </a>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4 text-white/80">
          {socialIcons.map((social) => {
            const IconComponent = social.icon
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="icon-wrap hover:text-[#0D4D37]"
              >
                <IconComponent className="w-5 h-5" />
              </a>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="/consultation"
            className="btn-primary inline-block"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  )
}
