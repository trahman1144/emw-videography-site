'use client'

import { useEffect, useRef, useState } from 'react'
import { BRAND } from '@/lib/constants'

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURED_PROJECTS = [
  {
    id: 'wedding-1',
    number: '001',
    title: 'Anne & Riccardo',
    category: 'Wedding Film',
    role: 'Director · DP · Editor',
    year: '2019',
    location: 'United Kingdom',
    thumbnail: 'https://vumbnail.com/324722806.jpg',
    embedUrl:
      'https://player.vimeo.com/video/324722806?h=a89f608244&autoplay=1&title=0&byline=0&portrait=0&color=0D4D37',
  },
  {
    id: 'wedding-2',
    number: '002',
    title: 'April & Stephen',
    category: 'Wedding Film',
    role: 'Director · DP · Editor',
    year: '2022',
    location: 'United Kingdom',
    thumbnail: 'https://vumbnail.com/763388059.jpg',
    embedUrl:
      'https://player.vimeo.com/video/763388059?h=ca94bb3dfe&autoplay=1&title=0&byline=0&portrait=0&color=0D4D37',
  },
  {
    id: 'demo-reel',
    number: '003',
    title: 'EMW Demo Reel',
    category: 'Showreel',
    role: 'Director · DP · Editor',
    year: '2024',
    location: 'London, UK',
    thumbnail: 'https://img.youtube.com/vi/x260JiQhGm0/maxresdefault.jpg',
    embedUrl: 'https://www.youtube.com/embed/x260JiQhGm0?autoplay=1&si=mDlZX3gsIhH3xkDC',
  },
]

const SERVICES_DATA = [
  {
    number: '01',
    title: 'Videography',
    slug: 'videography',
    description:
      'Professional 4K cinematic production for any occasion — from intimate ceremonies to large-scale brand films.',
    deliverables: ['4K Cinematography', 'Multi-Camera Setups', 'Professional Lighting', 'On-site Audio'],
    link: '/portfolio#weddings',
  },
  {
    number: '02',
    title: 'Video Editing & Post',
    slug: 'editing',
    description:
      'Cinematic post-production that transforms raw footage into a polished, emotionally resonant film.',
    deliverables: ['Colour Grading', 'Motion Graphics', 'Sound Design & Mix', '4K Final Delivery'],
    link: '/portfolio',
  },
  {
    number: '03',
    title: 'Animation & Motion',
    slug: 'animation',
    description:
      'Motion graphics, logo animations, and title sequences that elevate your visual identity across every platform.',
    deliverables: ['2D Animation', 'Logo Animation', 'Title Sequences', 'Social Content'],
    link: '/services',
  },
  {
    number: '04',
    title: 'Sound Design',
    slug: 'sound-design',
    description:
      'Immersive audio production and sound engineering that makes your story feel truly cinematic.',
    deliverables: ['Audio Mixing & Mastering', 'Sound Effects', 'Original Music', 'Voice Over'],
    link: '/services',
  },
  {
    number: '05',
    title: 'Drone & Aerial',
    slug: 'drone',
    description:
      'CAA-compliant aerial cinematography — sweeping drone shots that add scale and cinematic depth to any project.',
    deliverables: ['4K Aerial Footage', 'Cinematic Movement', 'CAA-Compliant Ops', 'Golden Hour Shoots'],
    link: '/services',
  },
  {
    number: '06',
    title: 'Creative Consultation',
    slug: 'consultation',
    description:
      'Full creative direction and pre-production planning — from first concept to the final call sheet.',
    deliverables: ['Creative Direction', 'Shot List & Storyboard', 'Location Scouting', 'Budget Planning'],
    link: '/consultation',
  },
]

const PRODUCTION_KIT = [
  { label: 'Camera', value: 'Sony FX3 (Full Frame 4K)' },
  { label: 'Lenses', value: 'Sony G Master 24–70mm f/2.8 · 85mm f/1.4' },
  { label: 'Aerial', value: 'DJI Mavic 3 Cine · 4K HDR' },
  { label: 'Stabilise', value: 'DJI RS3 Pro Gimbal' },
  { label: 'Monitor', value: 'Atomos Ninja V (ProRes RAW)' },
  { label: 'Audio', value: 'Sennheiser MKH416 · Rode Wireless GO II' },
  { label: 'Lighting', value: 'Aputure 300d II · Amaran 60d' },
  { label: 'Post', value: 'DaVinci Resolve · Adobe Premiere Pro' },
]

const SELECTED_CLIENTS = [
  {
    label: 'Weddings & Couples',
    description: 'Intimate cinematic wedding films across the UK & Europe',
  },
  {
    label: 'Corporate & Brand',
    description: 'Brand films, product launches & internal communications',
  },
  {
    label: 'Music Artists',
    description: 'Music videos, live performance captures & EPK shoots',
  },
  {
    label: 'Event Coverage',
    description: 'Galas, charity events & conference highlights',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

type Project = (typeof FEATURED_PROJECTS)[0]

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [openService, setOpenService] = useState<string | null>(null)
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({})

  // ── Hero video (unchanged) ──────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      video.pause()
      video.style.display = 'none'
    } else {
      video.play().catch(() => {})
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        video.pause()
        video.style.display = 'none'
      } else {
        video.style.display = 'block'
        video.play().catch(() => {})
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // ── Lightbox escape & body scroll lock ─────────────────────────────────────
  useEffect(() => {
    if (!activeProject) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveProject(null)
    }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [activeProject])

  // ── Scroll reveal ──────────────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal-base')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const toggleService = (slug: string) => {
    setOpenService((prev) => (prev === slug ? null : slug))
  }

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }))
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          HERO  (background video preserved — only copy updated)
      ══════════════════════════════════════════════════════════════ */}
      <section className="hero-section min-h-[100dvh] flex items-center justify-center text-center relative overflow-hidden">
        {/* Background Video */}
        <div className="hero-video-container">
          <video
            ref={videoRef}
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          >
            <source src="/hero/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-vignette" />
          <div className="hero-grain" />
          <div className="hero-fallback" />
        </div>

        {/* Hero Content */}
        <div className="hero-content relative z-10 max-w-5xl mx-auto w-full px-6">
          {/* Tagline */}
          <div className="mb-8 animate-fade-in">
            <span className="font-mono-code text-xs tracking-[0.35em] text-emw-deep-green uppercase">
              {BRAND.tagline}
            </span>
          </div>

          {/* Wordmark */}
          <h1 className="font-jakarta font-extrabold text-[clamp(3rem,10vw,7.5rem)] text-white leading-[0.9] tracking-tighter mb-8 animate-slide-up">
            <span className="text-emw-deep-green">E</span>uan{' '}
            <span className="text-emw-deep-green">M</span>ichael
            <br />
            <span className="text-emw-deep-green">W</span>attley
          </h1>

          {/* Sub-copy */}
          <p className="font-jakarta text-base md:text-lg text-white/50 mb-14 max-w-sm mx-auto leading-relaxed font-light tracking-wide animate-slide-up">
            Cinematic videography based in London.
            <br />
            <span className="font-mono-code text-xs tracking-widest text-white/30 not-italic uppercase">
              Weddings · Brands · Music · Events
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <a href="/portfolio" className="btn-primary-editorial">
              View Our Work
            </a>
            <a href="/consultation" className="btn-secondary-editorial">
              Book Consultation
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
          <span className="font-mono-code text-[10px] tracking-[0.3em] text-white/25 uppercase">
            Scroll
          </span>
          <div className="w-px h-10 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          FEATURED WORK  — editorial full-width project rows
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="flex items-end justify-between mb-16 reveal-base">
            <div>
              <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-4 block">
                Selected Work
              </span>
              <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0]">
                Featured Projects
              </h2>
            </div>
            <a
              href="/portfolio"
              className="hidden md:inline-flex items-center gap-2 font-mono-code text-xs text-white/35 hover:text-white transition-colors duration-300 group tracking-widest uppercase"
            >
              View all work
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Project rows */}
          <div className="border-t border-white/10">
            {FEATURED_PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="project-row border-b border-white/10 reveal-base"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <button
                  id={`project-${project.id}`}
                  onClick={() => setActiveProject(project)}
                  className="w-full text-left py-8 lg:py-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 group"
                  aria-label={`Watch ${project.title}`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-full lg:w-64 xl:w-80 aspect-video flex-shrink-0 overflow-hidden bg-white/5">
                    {imgErrors[project.id] ? (
                      /* Fallback when thumbnail fails to load */
                      <div className="w-full h-full flex items-center justify-center bg-emw-deep-green/10">
                        <svg
                          className="w-10 h-10 text-emw-deep-green/50"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.thumbnail}
                        alt={`${project.title} thumbnail`}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        loading="lazy"
                        onError={() => handleImgError(project.id)}
                      />
                    )}

                    {/* Hover play overlay */}
                    <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full border border-white/70 flex items-center justify-center bg-black/30 backdrop-blur-sm scale-90 group-hover:scale-100 transition-transform duration-300">
                        <svg
                          className="w-5 h-5 text-white ml-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono-code text-[10px] text-white/25 tracking-[0.2em]">
                        — {project.number}
                      </span>
                      <span className="font-mono-code text-[10px] text-emw-deep-green tracking-[0.2em] uppercase">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="font-jakarta font-bold text-2xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono-code text-[11px] text-white/35 tracking-wide">
                        {project.role}
                      </span>
                      <span className="text-white/15">·</span>
                      <span className="font-mono-code text-[11px] text-white/35 tracking-wide">
                        {project.location}
                      </span>
                      <span className="text-white/15">·</span>
                      <span className="font-mono-code text-[11px] text-white/35 tracking-wide">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Desktop play cue */}
                  <div className="hidden lg:flex flex-shrink-0 items-center gap-3 text-white/25 group-hover:text-white/80 transition-colors duration-300">
                    <span className="font-mono-code text-[10px] tracking-[0.25em] uppercase">Watch</span>
                    <div className="w-10 h-10 rounded-full border border-white/15 group-hover:border-white/50 flex items-center justify-center transition-all duration-300">
                      <svg className="w-3.5 h-3.5 ml-0.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          {/* Mobile — view all */}
          <div className="mt-10 md:hidden text-center">
            <a
              href="/portfolio"
              className="font-mono-code text-xs text-white/35 hover:text-white transition-colors tracking-widest uppercase"
            >
              View all work →
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SERVICES  — numbered accordion rows
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="mb-16 reveal-base">
            <span className="font-mono-code text-[11px] tracking-[0.28em] text-emw-deep-green uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-jakarta font-extrabold text-4xl lg:text-6xl text-white leading-[1.0]">
              Services
            </h2>
          </div>

          {/* Accordion list */}
          <div className="border-t border-white/10">
            {SERVICES_DATA.map((service, index) => {
              const isOpen = openService === service.slug
              return (
                <div
                  key={service.slug}
                  className="service-accordion-row border-b border-white/10 reveal-base"
                  style={{ transitionDelay: `${index * 0.06}s` }}
                >
                  {/* Row trigger */}
                  <button
                    id={`service-${service.slug}`}
                    onClick={() => toggleService(service.slug)}
                    className="w-full text-left py-6 lg:py-7 flex items-center justify-between gap-6 group"
                    aria-expanded={isOpen}
                    aria-controls={`panel-${service.slug}`}
                  >
                    <div className="flex items-center gap-6 lg:gap-10">
                      <span
                        className="font-mono-code text-sm tracking-widest text-white/20 w-8 flex-shrink-0"
                        aria-hidden="true"
                      >
                        {service.number}
                      </span>
                      <span
                        className={`font-jakarta font-semibold text-xl lg:text-3xl transition-colors duration-200 ${
                          isOpen ? 'text-white' : 'text-white/75 group-hover:text-white'
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>

                    {/* ± icon */}
                    <div
                      className={`w-8 h-8 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'border-emw-deep-green bg-emw-deep-green/20 rotate-45'
                          : 'border-white/15 group-hover:border-white/35'
                      }`}
                    >
                      <svg
                        className="w-3.5 h-3.5 text-white/50"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16M4 12h16" />
                      </svg>
                    </div>
                  </button>

                  {/* Accordion panel */}
                  <div
                    id={`panel-${service.slug}`}
                    role="region"
                    aria-labelledby={`service-${service.slug}`}
                    className="overflow-hidden"
                    style={{
                      maxHeight: isOpen ? '420px' : '0px',
                      opacity: isOpen ? 1 : 0,
                      transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
                    }}
                  >
                    <div className="pl-14 lg:pl-24 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                      {/* Left: description + tags */}
                      <div>
                        <p className="text-white/55 text-base leading-relaxed mb-6 max-w-lg">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.deliverables.map((d) => (
                            <span
                              key={d}
                              className="font-mono-code text-[11px] text-white/40 border border-white/10 hover:border-white/25 hover:text-white/60 px-3 py-1.5 tracking-wide transition-colors duration-200"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: CTAs */}
                      <div className="flex flex-col gap-3 lg:items-end">
                        <a
                          href={service.link}
                          className="inline-flex items-center gap-2 font-mono-code text-[11px] text-white/30 hover:text-white/70 transition-colors duration-200 tracking-widest uppercase"
                        >
                          Related Work →
                        </a>
                        <a
                          href={`/consultation?service=${service.slug}`}
                          className="inline-flex items-center justify-center gap-2 font-jakarta text-sm font-semibold text-white bg-emw-deep-green hover:bg-emw-deep-green/80 px-5 py-2.5 transition-all duration-200 hover:-translate-y-px whitespace-nowrap"
                        >
                          Inquire for {service.title}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          SPEC SHEET  — selected clients & production kit
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 border-t border-white/10 bg-white/[0.018]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Spec label */}
          <div className="mb-14 reveal-base">
            <span className="font-mono-code text-[11px] tracking-[0.35em] text-white/15 uppercase">
              SPEC SHEET — 2024
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 reveal-base">

            {/* ── Clients ── */}
            <div className="lg:pr-16 lg:border-r lg:border-white/10">
              <h3 className="font-jakarta font-bold text-2xl text-white mb-10">Selected Clients</h3>
              <div className="space-y-0 border-t border-white/[0.06]">
                {SELECTED_CLIENTS.map((client) => (
                  <div
                    key={client.label}
                    className="flex gap-5 border-b border-white/[0.06] py-6 group"
                  >
                    {/* Green accent bar */}
                    <div className="w-px bg-emw-deep-green/60 flex-shrink-0 group-hover:bg-emw-deep-green transition-colors duration-300 self-stretch" />
                    <div>
                      <div className="font-mono-code text-[10px] text-emw-deep-green tracking-[0.25em] uppercase mb-1.5">
                        {client.label}
                      </div>
                      <div className="text-white/45 text-sm leading-relaxed">{client.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Production Kit ── */}
            <div className="lg:pl-16">
              <h3 className="font-jakarta font-bold text-2xl text-white mb-10">Production Kit</h3>
              <div className="border-t border-white/[0.06]">
                {PRODUCTION_KIT.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[90px_1fr] gap-6 items-baseline border-b border-white/[0.06] py-4"
                  >
                    <span className="font-mono-code text-[10px] text-white/22 tracking-[0.2em] uppercase">
                      {item.label}
                    </span>
                    <span className="text-white/60 text-sm font-light leading-snug">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          BOLD CTA  — editorial full-width contact prompt
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-32 lg:py-52 border-t border-white/10 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-emw-deep-green/[0.05] via-transparent to-transparent pointer-events-none" />
        <div className="absolute -bottom-64 -right-64 w-[600px] h-[600px] rounded-full bg-emw-deep-green/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="reveal-base">

            <p className="font-mono-code text-[11px] tracking-[0.35em] text-white/20 uppercase mb-10">
              Let&apos;s Collaborate
            </p>

            <h2 className="font-jakarta font-extrabold text-[clamp(2.8rem,8vw,7.5rem)] text-white leading-[0.88] tracking-tighter mb-16">
              Have a story
              <br />
              to tell?
              <br />
              <em className="text-emw-deep-green not-italic">Let&apos;s build it.</em>
            </h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              {/* Primary CTA */}
              <a
                id="cta-start-project"
                href="/consultation"
                className="group inline-flex items-center gap-3 border border-white/25 hover:border-white text-white hover:bg-white hover:text-emw-black px-8 py-4 font-jakarta font-semibold text-base tracking-wide transition-all duration-300"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>

              {/* Contact details */}
              <div className="flex flex-col gap-1.5">
                <a
                  href={`mailto:${BRAND.email}`}
                  className="font-mono-code text-sm text-white/35 hover:text-white/75 transition-colors duration-200 tracking-wide"
                >
                  {BRAND.email}
                </a>
                <span className="font-mono-code text-[11px] text-white/18 tracking-[0.25em] uppercase">
                  {BRAND.address}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          LIGHTBOX MODAL
      ══════════════════════════════════════════════════════════════ */}
      {activeProject && (
        <div
          className="lightbox-overlay fixed inset-0 z-[200] flex items-center justify-center bg-black/96 backdrop-blur-md p-4 lg:p-8"
          onClick={() => setActiveProject(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Watching: ${activeProject.title}`}
        >
          <div
            className="lightbox-content relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top bar */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-3 mb-1.5">
                  <span className="font-mono-code text-[10px] text-emw-deep-green tracking-[0.25em] uppercase">
                    {activeProject.category}
                  </span>
                  <span className="text-white/15 font-mono-code text-[10px]">—</span>
                  <span className="font-mono-code text-[10px] text-white/25 tracking-wide">
                    {activeProject.role} · {activeProject.year}
                  </span>
                </div>
                <h3 className="font-jakarta font-bold text-xl lg:text-2xl text-white">
                  {activeProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="flex-shrink-0 flex items-center gap-2 font-mono-code text-[10px] text-white/35 hover:text-white transition-colors tracking-[0.2em] uppercase ml-6"
                aria-label="Close video"
              >
                Close
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 16:9 embed — loaded only when modal opens */}
            <div className="aspect-video w-full bg-black border border-white/10">
              <iframe
                src={activeProject.embedUrl}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={activeProject.title}
              />
            </div>

            {/* Close hint */}
            <p className="mt-4 text-center font-mono-code text-[10px] text-white/18 tracking-widest uppercase">
              Press ESC or click outside to close
            </p>
          </div>
        </div>
      )}
    </>
  )
}
