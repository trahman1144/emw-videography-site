import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testimonials | Euan Michael Wattley Videography',
  description: 'Read what clients say about working with Euan Michael Wattley — from wedding couples to corporate brands and music artists.',
};

const testimonials = [
  {
    name: 'Sarah & James',
    role: 'Wedding Couple',
    content: 'Euan captured our wedding day perfectly. The video tells our story beautifully and we treasure it every day.',
    project: 'Wedding Film',
    rating: 5,
  },
  {
    name: 'Tech Startup CEO',
    role: 'Corporate Client',
    content: 'Professional, creative, and delivered exactly what we needed. The final product exceeded our expectations.',
    project: 'Brand Video',
    rating: 5,
  },
  {
    name: 'Music Artist',
    role: 'Musician',
    content: 'Euan understood our vision and brought it to life. The music video perfectly captures our artistic style.',
    project: 'Music Video',
    rating: 5,
  },
  {
    name: 'Jennifer & Michael',
    role: 'Wedding Couple',
    content: 'Euan captured our wedding day with such artistry and attention to detail. The video brings tears to our eyes every time we watch it. He truly understood our vision.',
    project: 'Wedding Film',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Marketing Director',
    content: 'Working with Euan on our corporate video was an absolute pleasure. His professionalism and creative vision exceeded our expectations. The final product perfectly captured our brand story.',
    project: 'Corporate Video',
    rating: 5,
  },
  {
    name: 'The Midnight Band',
    role: 'Music Artists',
    content: 'Euan brought our music video concept to life in ways we never imagined. His creative direction and technical expertise created something truly special that represents our music perfectly.',
    project: 'Music Video',
    rating: 5,
  },
];

export default function TestimonialsPage() {
  return (
    <div className="bg-[#0B0D0F] min-h-screen">
      {/* PAGE HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 min-h-[50vh] flex items-end border-b border-white/10 ">
        <div className="w-full">
          <span className="font-mono-code text-[11px] tracking-[0.28em] text-[#0D4D37] uppercase mb-6 block">
            Client Voices
          </span>
          <h1 className="font-jakarta font-extrabold text-[clamp(3rem,10vw,7rem)] text-white leading-[0.9] tracking-tighter mb-8">
            Testimonials
          </h1>
          <p className="font-mono-code text-white/50 text-sm max-w-xl">
            Real words from real clients — here&apos;s what it&apos;s like to work together.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 ">
        <div className="border-b border-white/10 py-10 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">
          <div className="flex-1 text-center px-8 py-4 md:py-0">
            <div className="font-jakarta font-extrabold text-4xl lg:text-5xl text-white">200+</div>
            <div className="font-mono-code text-[10px] tracking-[0.2em] text-white/25 uppercase mt-1">Happy Clients</div>
          </div>
          <div className="flex-1 text-center px-8 py-4 md:py-0">
            <div className="font-jakarta font-extrabold text-4xl lg:text-5xl text-white">500+</div>
            <div className="font-mono-code text-[10px] tracking-[0.2em] text-white/25 uppercase mt-1">Projects Completed</div>
          </div>
          <div className="flex-1 text-center px-8 py-4 md:py-0">
            <div className="font-jakarta font-extrabold text-4xl lg:text-5xl text-white">15+</div>
            <div className="font-mono-code text-[10px] tracking-[0.2em] text-white/25 uppercase mt-1">Countries Worked</div>
          </div>
          <div className="flex-1 text-center px-8 py-4 md:py-0">
            <div className="font-jakarta font-extrabold text-4xl lg:text-5xl text-white">100%</div>
            <div className="font-mono-code text-[10px] tracking-[0.2em] text-white/25 uppercase mt-1">Client Satisfaction</div>
          </div>
        </div>
      </section>

      {/* FEATURED TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 ">
        <div className="flex flex-col">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="border-b border-white/10 py-10 lg:py-12 flex flex-col">
              <div className="text-6xl text-[#0D4D37]/30 font-serif leading-none mb-4">&ldquo;</div>
              <p className="font-jakarta italic text-xl lg:text-2xl text-white/85 leading-relaxed max-w-3xl mb-8">
                {testimonial.content}
              </p>
              <div className="flex items-center flex-wrap gap-4 mt-auto">
                <span className="font-jakarta font-semibold text-white">{testimonial.name}</span>
                <span className="font-mono-code text-xs text-white/30 tracking-widest uppercase ml-0 sm:ml-4">
                  {testimonial.role}
                </span>
                <span className="font-mono-code text-xs text-[#0D4D37] tracking-widest uppercase ml-auto">
                  {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 text-center ">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-[#0D4D37] uppercase mb-8 block">
          Work With Us
        </span>
        <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0] mb-12">
          Ready to Join<br />Our Happy Clients?
        </h2>
        <div className="flex flex-col items-center gap-6">
          <Link
            href="/consultation"
            className="inline-block border border-white/25 text-white px-8 py-4 font-mono-code text-sm tracking-widest uppercase hover:bg-white hover:text-[#0B0D0F] transition-colors"
          >
            Book a Consultation →
          </Link>
          <Link
            href="/portfolio"
            className="font-mono-code text-xs text-white/35 tracking-widest uppercase hover:text-white transition-colors"
          >
            View Our Work →
          </Link>
        </div>
      </section>
    </div>
  );
}
