import type { Metadata } from 'next';
import { BRAND, SOCIAL_LINKS } from '@/lib/constants';
import ConsultationForm from '@/components/ConsultationForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact | Euan Michael Wattley Videography',
  description: 'Get in touch with Euan Michael Wattley. Based in London, available for projects worldwide. Professional videography inquiries welcome.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-emw-black">
      {/* PAGE HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20 border-b border-white/10 min-h-[55vh] flex items-end ">
        <div className="w-full">
          <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-6 block">
            GET IN TOUCH
          </span>
          <h1 className="font-jakarta font-extrabold text-[clamp(3rem,9vw,7rem)] text-white leading-[0.88] tracking-tighter">
            Let&apos;s Build<br />
            Something <span className="text-emw-deep-green">Cinematic.</span>
          </h1>
        </div>
      </section>

      {/* MAIN 2-COLUMN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 border-b border-white/10 ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0">
          
          {/* LEFT COLUMN */}
          <div className="lg:pr-16 lg:border-r lg:border-white/10 mb-16 lg:mb-0">
            <span className="font-mono-code text-[11px] tracking-[0.28em] text-white/30 uppercase mb-8 block">
              DIRECT CONTACT
            </span>
            
            <div className="border-t border-white/10">
              {/* Row 1 */}
              <div className="border-b border-white/10 py-6">
                <p className="font-mono-code text-[11px] tracking-widest text-white/25 uppercase mb-2">Email</p>
                <a href="mailto:euanmichaelwattley@gmail.com" className="text-white hover:text-emw-deep-green transition-colors font-jakarta text-lg">
                  euanmichaelwattley@gmail.com
                </a>
              </div>
              
              {/* Row 2 */}
              <div className="border-b border-white/10 py-6">
                <p className="font-mono-code text-[11px] tracking-widest text-white/25 uppercase mb-2">Phone</p>
                <a href="tel:+442079460958" className="text-white hover:text-emw-deep-green transition-colors font-jakarta text-lg">
                  +44 20 7946 0958
                </a>
              </div>
              
              {/* Row 3 */}
              <div className="border-b border-white/10 py-6">
                <p className="font-mono-code text-[11px] tracking-widest text-white/25 uppercase mb-2">Location</p>
                <p className="text-white font-jakarta text-lg mb-1">London, United Kingdom</p>
                <p className="text-white/40 text-sm">Available for projects UK-wide &amp; worldwide</p>
              </div>
              
              {/* Row 4 */}
              <div className="border-b border-white/10 py-6">
                <p className="font-mono-code text-[11px] tracking-widest text-white/25 uppercase mb-2">Hours</p>
                <p className="text-white font-jakarta text-lg mb-1">Mon–Fri: 9AM–6PM GMT</p>
                <p className="text-white/40 text-sm">Sat: By appointment</p>
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex gap-4">
              <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all" aria-label="Vimeo">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.48 4.807z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/40 transition-all" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="lg:pl-16">
            <span className="font-mono-code text-[11px] tracking-[0.28em] text-white/30 uppercase mb-8 block">
              SEND A MESSAGE
            </span>
            <p className="font-mono-code text-white/30 text-xs mb-6 tracking-widest">
              RESPONSE TIME — WITHIN 24 HOURS
            </p>
            <ConsultationForm />
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 ">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-4 block">
          FAQ
        </span>
        <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0] mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="border-t border-white/10">
          <details className="border-b border-white/10 group">
            <summary className="cursor-pointer py-5 flex items-center justify-between font-jakarta font-semibold text-lg text-white list-none [&::-webkit-details-marker]:hidden">
              How far in advance should I book?
              <span className="text-white/30 group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="pb-6 text-white/55 text-sm leading-relaxed">
              3–6 months for weddings, 2–4 weeks for other projects.
            </div>
          </details>

          <details className="border-b border-white/10 group">
            <summary className="cursor-pointer py-5 flex items-center justify-between font-jakarta font-semibold text-lg text-white list-none [&::-webkit-details-marker]:hidden">
              Do you travel for projects?
              <span className="text-white/30 group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="pb-6 text-white/55 text-sm leading-relaxed">
              Yes, worldwide. Travel expenses are included in quotes.
            </div>
          </details>

          <details className="border-b border-white/10 group">
            <summary className="cursor-pointer py-5 flex items-center justify-between font-jakarta font-semibold text-lg text-white list-none [&::-webkit-details-marker]:hidden">
              What&apos;s included in your packages?
              <span className="text-white/30 group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="pb-6 text-white/55 text-sm leading-relaxed">
              Filming, editing, colour grading, and final delivery. Extras available.
            </div>
          </details>

          <details className="border-b border-white/10 group">
            <summary className="cursor-pointer py-5 flex items-center justify-between font-jakarta font-semibold text-lg text-white list-none [&::-webkit-details-marker]:hidden">
              How long does post-production take?
              <span className="text-white/30 group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="pb-6 text-white/55 text-sm leading-relaxed">
              4–6 weeks for weddings, 2–4 weeks for other projects.
            </div>
          </details>

          <details className="border-b border-white/10 group">
            <summary className="cursor-pointer py-5 flex items-center justify-between font-jakarta font-semibold text-lg text-white list-none [&::-webkit-details-marker]:hidden">
              Do you provide raw footage?
              <span className="text-white/30 group-open:rotate-45 transition-transform duration-300">+</span>
            </summary>
            <div className="pb-6 text-white/55 text-sm leading-relaxed">
              Available upon request for an additional fee.
            </div>
          </details>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-16">
          <h2 className="font-jakarta text-2xl text-white">Ready to get started?</h2>
          <Link 
            href="/consultation" 
            className="px-8 py-4 border border-white/25 text-white font-mono-code text-[11px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Book a Consultation →
          </Link>
        </div>
      </section>
    </main>
  );
}
