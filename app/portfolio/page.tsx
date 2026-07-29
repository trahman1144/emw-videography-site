'use client';

// export const metadata = {
//   title: 'Portfolio | Euan Michael Wattley Videography',
//   description: 'Explore the portfolio of Euan Michael Wattley — cinematic wedding films, brand videos, music videos and event coverage.',
// };

import { useState, useEffect } from 'react';
import { BRAND } from '@/lib/constants';

const PROJECTS = [
  { id: 'wedding-1', number: '001', title: 'Anne & Riccardo', category: 'WEDDINGS', role: 'Director · DP · Editor', year: '2019', location: 'United Kingdom', thumbnail: 'https://vumbnail.com/324722806.jpg', embedUrl: 'https://player.vimeo.com/video/324722806?h=a89f608244&autoplay=1&title=0&byline=0&portrait=0' },
  { id: 'wedding-2', number: '002', title: 'April & Stephen', category: 'WEDDINGS', role: 'Director · DP · Editor', year: '2022', location: 'United Kingdom', thumbnail: 'https://vumbnail.com/763388059.jpg', embedUrl: 'https://player.vimeo.com/video/763388059?h=ca94bb3dfe&autoplay=1&title=0&byline=0&portrait=0' },
  { id: 'demo-reel', number: '003', title: 'EMW Demo Reel', category: 'MUSIC', role: 'Director · DP · Editor', year: '2024', location: 'London, UK', thumbnail: 'https://img.youtube.com/vi/x260JiQhGm0/maxresdefault.jpg', embedUrl: 'https://www.youtube.com/embed/x260JiQhGm0?autoplay=1' },
  { id: 'events-1', number: '004', title: 'Charity Gala Highlights', category: 'EVENTS', role: 'Director · DP', year: '2023', location: 'London, UK', thumbnail: 'https://img.youtube.com/vi/jTRsBDeqSL8/maxresdefault.jpg', embedUrl: 'https://www.youtube.com/embed/jTRsBDeqSL8?autoplay=1' },
  { id: 'corporate-1', number: '005', title: 'Tech Startup Promo', category: 'CORPORATE', role: 'Director · DP · Editor', year: '2023', location: 'London, UK', thumbnail: 'https://img.youtube.com/vi/P9RR8JeuaQI/maxresdefault.jpg', embedUrl: 'https://www.youtube.com/embed/P9RR8JeuaQI?autoplay=1' },
];

const FILTERS = ['ALL', 'WEDDINGS', 'CORPORATE', 'MUSIC', 'EVENTS'];

const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', desc: 'We discuss your vision, requirements, and creative goals' },
  { step: '02', title: 'Planning', desc: 'Detailed shot list, timeline & location scouting' },
  { step: '03', title: 'Production', desc: 'Professional filming with state-of-the-art equipment' },
  { step: '04', title: 'Delivery', desc: 'Final editing, colour grading, and project handover' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [activeVideo, setActiveVideo] = useState<typeof PROJECTS[0] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-base').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const filtered = activeFilter === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <main className="bg-[#0B0D0F] min-h-screen text-white pt-24">
      {/* PAGE HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[50vh] flex items-end pb-20 border-b border-white/10 relative reveal-base">
        <div className="absolute top-0 right-6 lg:right-12 hidden md:flex items-center gap-4">
          <div className="h-[100px] w-px bg-white/10" />
          <span className="font-mono-code text-[11px] tracking-widest text-white/40">2019 — 2024</span>
        </div>
        <div className="w-full">
          <span className="font-mono-code text-[11px] tracking-[0.28em] text-[#0D4D37] uppercase mb-6 block">SELECTED WORKS</span>
          <h1 className="font-jakarta font-extrabold text-[clamp(3rem,10vw,7rem)] text-white leading-[0.9] mb-6">Portfolio</h1>
          <p className="text-white/40 font-mono-code text-sm md:text-base max-w-xl">
            Cinematic storytelling across every discipline — weddings, brands, music & events.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-14 z-40 bg-[#0B0D0F]/90 backdrop-blur border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-8 py-4">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`whitespace-nowrap font-mono-code text-xs tracking-widest uppercase transition-colors relative pb-1 ${
                  activeFilter === f ? 'text-white' : 'text-white/40 hover:text-white/80'
                }`}
              >
                {f}
                {activeFilter === f && (
                  <span className="absolute bottom-[-17px] left-0 right-0 h-[2px] bg-[#0D4D37]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS LIST */}
      <section className="pb-24 lg:pb-32 reveal-base">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="px-6 lg:px-12 py-24 text-center">
              <p className="text-white/40 font-mono-code">No projects found for this category.</p>
            </div>
          ) : (
            filtered.map((project, idx) => (
              <div 
                key={project.id}
                onClick={() => setActiveVideo(project)}
                className="group cursor-pointer border-b border-white/10 px-6 lg:px-12 py-8 lg:py-12 flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 transition-colors hover:bg-white/[0.02]"
              >
                <div className="relative w-full md:w-64 xl:w-80 shrink-0 aspect-video overflow-hidden bg-white/5">
                  <div className="absolute inset-0 z-10 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#0D4D37] text-white flex items-center justify-center pl-1 backdrop-blur-sm">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                  {project.thumbnail ? (
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement?.querySelector('.fallback-icon')?.classList.remove('hidden');
                      }}
                    />
                  ) : null}
                  <div className={`fallback-icon ${project.thumbnail ? 'hidden' : ''} absolute inset-0 flex items-center justify-center text-white/20`}>
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                </div>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-6 w-full">
                  <div>
                    <div className="flex items-center gap-4 mb-3 text-[10px] font-mono-code tracking-widest text-white/35 uppercase">
                      <span>{project.number}</span>
                      <span>—</span>
                      <span className="text-[#0D4D37]">{project.category}</span>
                    </div>
                    <h3 className="font-jakarta font-extrabold text-3xl lg:text-5xl text-white leading-[1.1] mb-4 group-hover:text-white/80 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono-code tracking-widest text-white/40 uppercase">
                      <span>{project.role}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{project.location}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  
                  <div className="hidden lg:flex shrink-0 items-center gap-2 text-xs font-mono-code tracking-widest uppercase text-white/20 group-hover:text-white/60 transition-colors">
                    <span>Watch</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12 reveal-base">
        <div className="mb-16">
          <span className="font-mono-code text-[11px] tracking-[0.28em] text-[#0D4D37] uppercase mb-4 block">Our Approach</span>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0]">The Process</h2>
        </div>
        
        <div className="flex flex-col border-t border-white/10">
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16 py-8 border-b border-white/10 group">
              <div className="font-mono-code font-extrabold text-4xl md:text-5xl text-white/10 group-hover:text-white/20 transition-colors shrink-0">
                {step.step}
              </div>
              <div className="font-jakarta font-bold text-xl md:text-2xl text-white shrink-0 md:w-48">
                {step.title}
              </div>
              <div className="text-white/50 text-sm md:text-base font-mono-code max-w-xl">
                {step.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-32 lg:py-40 max-w-7xl mx-auto px-6 lg:px-12 text-center reveal-base">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-[#0D4D37] uppercase mb-6 block">Start Your Project</span>
        <h2 className="font-jakarta font-extrabold text-5xl lg:text-8xl text-white leading-[0.9] mb-12">
          Ready to Create<br />Your Story?
        </h2>
        <a 
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-5 border border-white/25 text-white hover:bg-white hover:text-black font-mono-code text-xs tracking-widest uppercase transition-all duration-300"
        >
          Book a Consultation →
        </a>
        <div className="mt-12 text-white/30 font-mono-code text-sm">
          {BRAND.email}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-[200] bg-black/96 backdrop-blur-md flex flex-col items-center justify-center">
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setActiveVideo(null)} 
          />
          
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 lg:top-10 lg:right-10 z-10 text-white/50 hover:text-white font-mono-code text-xs tracking-widest uppercase transition-colors"
          >
            [ Close ]
          </button>
          
          <div className="relative z-10 w-full max-w-6xl px-4 lg:px-12">
            <div className="mb-6 text-center">
              <h3 className="font-jakarta font-extrabold text-2xl lg:text-4xl text-white mb-2">
                {activeVideo.title}
              </h3>
              <div className="font-mono-code text-[11px] tracking-widest text-white/40 uppercase">
                {activeVideo.category} · {activeVideo.role} · {activeVideo.year}
              </div>
            </div>
            
            <div className="relative w-full aspect-video bg-black rounded-sm overflow-hidden shadow-2xl ring-1 ring-white/10">
              <iframe
                src={activeVideo.embedUrl}
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
