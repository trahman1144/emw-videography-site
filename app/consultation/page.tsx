import type { Metadata } from 'next';
import Link from 'next/link';
import ConsultationForm from '@/components/ConsultationForm';
import { BRAND } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Book a Consultation | Euan Michael Wattley Videography',
  description: 'Book a free consultation with Euan Michael Wattley. Discuss your videography project, get creative direction, and plan your production.',
};

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-emw-black text-white">
      {/* --- PAGE HERO --- */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto min-h-[45vh] flex items-end pb-20 border-b border-white/10 ">
        <div className="w-full">
          <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-6 block">
            FREE CONSULTATION
          </span>
          <h1 className="font-jakarta font-extrabold text-[clamp(3rem,9vw,6rem)] text-white leading-[0.9] tracking-tighter mb-8">
            Book a<br />Consultation.
          </h1>
          <p className="text-white/50 max-w-xl text-lg lg:text-xl">
            Tell me about your project — I&apos;ll get back within 24 hours to schedule a call.
          </p>
        </div>
      </section>

      {/* --- MAIN 2-COLUMN LAYOUT --- */}
      <section id="consultation-form" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16">
          
          {/* LEFT COLUMN */}
          <div>
            <span className="font-mono-code text-[11px] tracking-[0.28em] text-white/40 uppercase mb-8 block">
              WHAT TO EXPECT
            </span>
            <div className="border-t border-white/10 mb-16">
              {[
                { num: '01', title: 'Initial Discussion', desc: 'Discuss your project goals, timeline, and creative vision in detail.' },
                { num: '02', title: 'Technical Review', desc: 'Assess your technical requirements and recommend the best approach.' },
                { num: '03', title: 'Creative Direction', desc: 'Provide creative direction and suggestions to enhance your project.' },
                { num: '04', title: 'Next Steps', desc: 'Define timeline, budget, and a clear production plan to move forward.' },
              ].map((step) => (
                <div key={step.num} className="border-b border-white/10 py-6 flex gap-6">
                  <div className="font-mono-code text-white/20">{step.num}</div>
                  <div>
                    <h3 className="font-jakarta font-semibold text-lg text-white mb-2">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <span className="font-mono-code text-[11px] tracking-[0.28em] text-white/40 uppercase mb-8 block">
              CONSULTATION DETAILS
            </span>
            <div className="border-t border-white/[0.06]">
              {[
                { label: 'Duration', value: '30–45 minutes' },
                { label: 'Format', value: 'Video Call (Zoom / Google Meet)' },
                { label: 'Cost', value: 'Free' },
                { label: 'Response', value: 'Within 24 hours' },
              ].map((item, i) => (
                <div key={i} className="flex border-b border-white/[0.06] py-4">
                  <div className="w-24 shrink-0 font-mono-code text-[11px] tracking-widest text-white/25 uppercase pt-0.5">
                    {item.label}
                  </div>
                  <div className="text-white/60 text-sm">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>
            <span className="font-mono-code text-[11px] tracking-[0.28em] text-white/40 uppercase mb-4 block">
              YOUR PROJECT
            </span>
            <div className="font-mono-code text-[10px] tracking-widest text-white/25 uppercase mb-6 block">
              FILL OUT THE FORM BELOW
            </div>
            {/* Form container - raw on dark bg */}
            <div className="pt-4 border-t border-white/10">
              <ConsultationForm />
            </div>
          </div>
          
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto  border-t border-white/10">
        <div className="mb-16">
          <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-4 block">
            WHY CONSULT FIRST
          </span>
          <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0]">
            Benefits of a Consultation
          </h2>
        </div>
        
        <div className="border-t border-white/10">
          {[
            { title: 'Expert Guidance', desc: 'Get professional advice from an experienced videographer with 8+ years in the industry.' },
            { title: 'Creative Direction', desc: 'Receive creative suggestions to enhance your vision before a single camera rolls.' },
            { title: 'Technical Expertise', desc: 'Learn about the best equipment and techniques for your specific needs and budget.' },
            { title: 'Budget Optimisation', desc: 'Understand how to maximise your budget and achieve the best possible results.' },
          ].map((benefit, i) => (
            <div key={i} className="flex border-b border-white/10 py-6">
              <div className="w-px bg-emw-deep-green self-stretch mr-6"></div>
              <div>
                <h3 className="font-jakarta font-semibold text-white text-lg mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- BOTTOM CTA --- */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 max-w-7xl mx-auto text-center border-t border-white/10 ">
        <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-6 block">
          Ready?
        </span>
        <h2 className="font-jakarta font-extrabold text-5xl lg:text-8xl text-white leading-[0.9] tracking-tighter mb-12">
          Let&apos;s talk<br />about your project.
        </h2>
        <div className="flex flex-col items-center gap-8">
          <Link 
            href="#consultation-form"
            className="inline-flex items-center justify-center px-10 py-5 border border-white/25 text-white font-mono-code text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-emw-black transition-colors duration-300"
          >
            Scroll to form
          </Link>
          <a href={`mailto:${BRAND.email}`} className="font-mono-code text-[11px] tracking-widest text-white/30 uppercase hover:text-white transition-colors duration-300">
            {BRAND.email}
          </a>
        </div>
      </section>
    </main>
  );
}
