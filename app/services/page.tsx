'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';

/* 
  Metadata for this page (Note: 'use client' prevents exporting this directly):
  title: 'Services | Euan Michael Wattley Videography',
  description: 'Professional videography services — 4K cinematography, video editing, drone aerial, sound design, animation, and creative consultation.'
*/

const SERVICES = [
  {
    number: '01',
    title: 'Videography',
    slug: 'videography',
    description: 'Professional 4K cinematic production for any occasion — from intimate ceremonies to large-scale brand activations.',
    deliverables: ['4K Cinematography', 'Multi-Camera Setups', 'Professional Lighting', 'On-site Audio Recording'],
    process: 'Pre-production planning → On-location filming → Client review → Final handover',
    link: '/portfolio#weddings'
  },
  {
    number: '02',
    title: 'Video Editing & Post',
    slug: 'editing',
    description: 'Cinematic post-production that transforms raw footage into a polished, emotionally resonant film. Colour science is everything.',
    deliverables: ['Colour Grading (DaVinci Resolve)', 'Motion Graphics', 'Sound Design & Mix', '4K Final Delivery'],
    process: 'Assembly cut → Client feedback → Fine cut → Grade & Sound → Export',
    link: '/portfolio'
  },
  {
    number: '03',
    title: 'Animation & Motion',
    slug: 'animation',
    description: 'Motion graphics, logo animations, and title sequences that elevate your visual identity across every platform.',
    deliverables: ['2D Animation', 'Logo & Brand Animation', 'Title Sequences', 'Social-Optimised Formats'],
    process: 'Concept → Style frames → Animation → Revision → Final render',
    link: '/services'
  },
  {
    number: '04',
    title: 'Sound Design',
    slug: 'sound-design',
    description: 'Immersive audio production and sound engineering that makes your story feel truly cinematic.',
    deliverables: ['Audio Mixing & Mastering', 'Foley & Sound Effects', 'Original Music', 'Voice Over Production'],
    process: 'Audio review → Edit & clean → Design → Mix → Master',
    link: '/services'
  },
  {
    number: '05',
    title: 'Drone & Aerial',
    slug: 'drone',
    description: 'CAA-compliant aerial cinematography — sweeping establishing shots and cinematic movements that add production scale.',
    deliverables: ['4K Aerial Footage', 'Cinematic Drone Movements', 'CAA-Compliant Operations', 'Day & Golden Hour Shoots'],
    process: 'Location assessment → CAA clearance → Shoot → Colour grade → Deliver',
    link: '/services'
  },
  {
    number: '06',
    title: 'Creative Consultation',
    slug: 'consultation',
    description: 'Full creative direction and pre-production planning — from your first idea to the final call sheet.',
    deliverables: ['Creative Direction', 'Shot List & Storyboard', 'Location Scouting', 'Budget Planning'],
    process: 'Initial brief → Concept development → Treatment → Production plan',
    link: '/consultation'
  }
];

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>(null);

  return (
    <main className="bg-[#0B0D0F] min-h-screen text-white pt-24 ">
      {/* PAGE HERO */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto min-h-[50vh] flex flex-col justify-end pb-20 border-b border-white/10">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-[#0D4D37] uppercase mb-6 block">Capabilities</span>
        <h1 className="font-jakarta font-extrabold text-[clamp(3rem,10vw,7rem)] text-white leading-[0.9] tracking-tighter mb-8">
          Services
        </h1>
        <p className="text-white/40 max-w-2xl text-lg lg:text-xl font-jakarta">
          From single-day shoots to full end-to-end productions — every scope, handled with precision.
        </p>
      </section>

      {/* SERVICES ACCORDION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto ">
        <div className="flex flex-col border-t border-white/10">
          {SERVICES.map((service) => {
            const isOpen = openService === service.slug;
            return (
              <div key={service.slug} className="border-b border-white/10">
                <button
                  onClick={() => setOpenService(isOpen ? null : service.slug)}
                  className="w-full py-8 flex items-center justify-between text-left group transition-colors hover:bg-white/[0.02]"
                >
                  <div className="flex items-center gap-6 lg:gap-12">
                    <span className="font-mono-code text-sm lg:text-base text-white/20">
                      {service.number}
                    </span>
                    <h3 className="font-jakarta font-semibold text-xl lg:text-3xl text-white group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-white/40 flex-shrink-0 transition-transform duration-300">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-500 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden pl-0 lg:pl-20">
                    <div className="max-w-3xl flex flex-col gap-8 pt-4">
                      <p className="text-white/60 text-lg lg:text-xl font-jakarta leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div>
                        <span className="font-mono-code text-[11px] tracking-widest text-white/30 uppercase mb-4 block">
                          Deliverables
                        </span>
                        <div className="flex flex-wrap gap-3">
                          {service.deliverables.map((item, idx) => (
                            <span key={idx} className="font-mono-code text-[11px] text-white/60 border border-white/10 px-3 py-1.5 uppercase tracking-wider">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono-code text-[11px] tracking-widest text-white/25 uppercase">
                          PROCESS —
                        </span>
                        <span className="font-mono-code text-[11px] tracking-widest text-white/50 uppercase">
                          {service.process}
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/5 mt-2">
                        <Link
                          href={`/consultation?service=${service.slug}`}
                          className="font-mono-code text-xs uppercase tracking-widest bg-[#0D4D37] text-white px-6 py-4 hover:bg-[#0a3d2c] transition-colors text-center inline-flex items-center justify-center gap-2"
                        >
                          Inquire for {service.title}
                          <span>→</span>
                        </Link>
                        <Link
                          href={service.link}
                          className="font-mono-code text-xs uppercase tracking-widest border border-white/10 text-white/80 px-6 py-4 hover:border-white/30 hover:text-white transition-colors text-center inline-flex items-center justify-center gap-2"
                        >
                          View Related Work
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/10 ">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-[#0D4D37] uppercase mb-16 block">Investment</span>
        
        <div className="mb-12">
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0]">Pricing</h2>
        </div>

        <div className="flex flex-col border-t border-white/10">
          {/* Row 1 */}
          <div className="py-8 border-b border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:gap-12 gap-6 items-start lg:items-center">
            <h3 className="font-jakarta font-semibold text-xl text-white">Wedding Packages</h3>
            <div className="font-jakarta font-bold text-2xl text-[#0D4D37] whitespace-nowrap">Starting at £2,000</div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Full day coverage</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">2–3 min highlight</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Ceremony & reception</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Drone included</span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="py-8 border-b border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:gap-12 gap-6 items-start lg:items-center">
            <h3 className="font-jakarta font-semibold text-xl text-white">Corporate Videos</h3>
            <div className="font-jakarta font-bold text-2xl text-[#0D4D37] whitespace-nowrap">Starting at £1,200</div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Professional filming</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Multiple locations</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Interview setup</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Brand integration</span>
            </div>
          </div>

          {/* Row 3 */}
          <div className="py-8 border-b border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] lg:gap-12 gap-6 items-start lg:items-center">
            <h3 className="font-jakarta font-semibold text-xl text-white">Music Videos</h3>
            <div className="font-jakarta font-bold text-2xl text-[#0D4D37] whitespace-nowrap">Starting at £2,500</div>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Creative direction</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Multiple setups</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Professional editing</span>
              <span className="font-mono-code text-[10px] text-white/60 border border-white/10 px-2 py-1 uppercase">Colour grading</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <p className="font-jakarta text-white/60 text-lg">Have a unique project in mind? Every project is bespoke.</p>
          <Link href="/consultation" className="font-mono-code text-xs uppercase tracking-widest border-b border-white/30 text-white pb-1 hover:border-white transition-colors">
            Discuss your project →
          </Link>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-white/10 text-center flex flex-col items-center ">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-[#0D4D37] uppercase mb-8 block">Let&apos;s Build Together</span>
        <h2 className="font-jakarta font-extrabold text-[clamp(2.5rem,8vw,6rem)] text-white leading-[0.9] tracking-tighter mb-12">
          Ready to<br/>Get Started?
        </h2>
        
        <Link
          href="/consultation"
          className="inline-block px-10 py-6 border border-white/25 text-white font-mono-code text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 mb-8"
        >
          Book a Consultation →
        </Link>
        
        <a href={`mailto:${BRAND.email}`} className="font-mono-code text-white/40 text-sm hover:text-white transition-colors">
          {BRAND.email}
        </a>
      </section>
    </main>
  );
}
