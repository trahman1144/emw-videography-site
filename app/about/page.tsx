import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About | Euan Michael Wattley Videography',
  description:
    'Meet Euan Michael Wattley — London-based cinematographer and director specialising in cinematic wedding films, brand videos, and creative projects.',
};

export default function AboutPage() {
  return (
    <main className="bg-emw-black min-h-screen pt-24 pb-8 overflow-hidden">
      {/* PAGE HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 min-h-[55vh] flex items-end pb-20 border-b border-white/10 ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-4 block">
              DIRECTOR & CINEMATOGRAPHER
            </span>
            <h1 className="font-jakarta font-extrabold text-5xl lg:text-7xl text-white leading-[1.0]">
              Capturing Motion<br />with Purpose
            </h1>
          </div>
          <div className="lg:text-right flex flex-col lg:items-end justify-end">
            <div className="hidden lg:block w-full max-w-sm h-px bg-white/10 mb-6"></div>
            <p className="text-white/50 leading-relaxed font-mono-code text-sm max-w-xs lg:text-right">
              Based in London. Working worldwide. 8+ years in the craft.
            </p>
          </div>
        </div>
      </section>

      {/* BIO SECTION */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12 ">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16">
          <div>
            <h2 className="font-jakarta font-extrabold text-3xl lg:text-4xl text-white/90 leading-snug mb-8">
              Every frame is a choice. Every cut, intentional.
            </h2>
            <div className="space-y-6 text-white/55 leading-relaxed">
              <p>
                With over 8 years of experience in cinematography and video
                production, I specialise in creating films that feel alive —
                emotionally resonant, technically precise, and deeply human.
              </p>
              <p>
                From intimate wedding ceremonies to large-scale corporate
                productions, my work spans the full spectrum of visual storytelling.
                I bring the same obsessive attention to craft to every project,
                regardless of scale.
              </p>
              <p>
                Based in London — the heart of the UK&apos;s creative industry — I work
                with clients across the UK, Europe, and worldwide.
              </p>
            </div>
          </div>
          
          {/* STATS BLOCK */}
          <div className="flex flex-col">
            <div className="border-t border-white/10 w-full"></div>
            {[
              { num: '200+', label: 'Weddings Filmed' },
              { num: '150+', label: 'Corporate Projects' },
              { num: '8+', label: 'Years Experience' },
              { num: '15+', label: 'Countries' },
            ].map((stat, i) => (
              <div key={i} className="py-6 border-b border-white/10 flex flex-col">
                <span className="font-jakarta font-extrabold text-5xl text-white mb-2">
                  {stat.num}
                </span>
                <span className="font-mono-code text-[11px] tracking-widest uppercase text-white/30">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY PULLQUOTE */}
      <section className="w-full border-t border-b border-white/10 py-20  bg-emw-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <blockquote className="font-jakarta text-2xl lg:text-4xl text-white/80 italic leading-relaxed">
            &ldquo;Every moment has a story worth telling. My mission is to capture those stories with authenticity, creativity, and technical excellence.&rdquo;
          </blockquote>
          <p className="font-mono-code text-sm text-white/30 tracking-widest mt-6">
            — Euan Michael Wattley
          </p>
        </div>
      </section>

      {/* CAPABILITIES / SKILLS */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12 ">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-4 block">
          Capabilities
        </span>
        <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0] mb-16">
          Expertise & Skills
        </h2>
        
        <div className="border-t border-white/10">
          {[
            { num: '01', title: 'Cinematic Storytelling', desc: 'Creating compelling narratives that engage and inspire' },
            { num: '02', title: 'Technical Excellence', desc: '4K recording, professional audio, advanced post-production' },
            { num: '03', title: 'Creative Direction', desc: 'Bringing your vision to life with innovative approaches' },
            { num: '04', title: 'Event Coverage', desc: 'Capturing every important moment with precision and artistry' },
            { num: '05', title: 'Post-Production', desc: 'Colour grading, editing, and motion graphics expertise' },
            { num: '06', title: 'Drone Cinematography', desc: 'Aerial footage that adds cinematic depth to your projects' },
          ].map((skill, i) => (
            <div key={i} className="py-6 border-b border-white/10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 hover:bg-white/[0.02] transition-colors">
              <span className="font-mono-code text-white/20 w-12">{skill.num} —</span>
              <h3 className="font-jakarta font-semibold text-xl text-white md:w-1/3">
                {skill.title}
              </h3>
              <p className="text-white/50 text-sm max-w-md">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GEAR SPEC SHEET */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12 ">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-4 block">
          SPEC SHEET — 2024
        </span>
        <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0] mb-16">
          Production Kit
        </h2>

        <div className="border-t border-white/10">
          {[
            { label: 'Camera', val: 'Sony FX3 (Full Frame 4K)' },
            { label: 'Lenses', val: 'Sony G Master 24–70mm f/2.8 · 85mm f/1.4' },
            { label: 'Aerial', val: 'DJI Mavic 3 Cine · 4K HDR' },
            { label: 'Stabilise', val: 'DJI RS3 Pro Gimbal' },
            { label: 'Monitor', val: 'Atomos Ninja V (ProRes RAW)' },
            { label: 'Audio', val: 'Sennheiser MKH416 · Rode Wireless GO II' },
            { label: 'Lighting', val: 'Aputure 300d II · Amaran 60d' },
            { label: 'Post', val: 'DaVinci Resolve · Adobe Premiere Pro' },
          ].map((item, i) => (
            <div key={i} className="py-4 border-b border-white/[0.06] flex items-center gap-6 hover:bg-white/[0.02] transition-colors">
              <span className="font-mono-code text-[10px] text-white/25 tracking-[0.2em] uppercase w-28 shrink-0">
                {item.label}
              </span>
              <span className="text-white/60 text-sm">
                {item.val}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center text-center ">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-4 block">
          Let&apos;s Collaborate
        </span>
        <h2 className="font-jakarta font-extrabold text-5xl lg:text-7xl text-white leading-[1.0] mb-12">
          Let&apos;s Work<br />Together.
        </h2>
        
        <Link
          href="/consultation"
          className="inline-block px-8 py-4 border border-white/25 text-white uppercase tracking-widest text-[11px] font-mono-code transition-colors hover:bg-white hover:text-black mb-8"
        >
          Start a Project →
        </Link>
        <p className="font-mono-code text-[11px] tracking-widest text-white/30 uppercase">
          euanmichaelwattley@gmail.com
        </p>
      </section>
    </main>
  );
}
