export const BRAND = {
  name: 'Euan Michael Wattley Videography',
  tagline: 'Voir le Monde',
  email: 'euanmichaelwattley@gmail.com',
  phone: '+44 20 7946 0958',
  address: 'London, United Kingdom',
  colors: {
    black: '#0B0D0F',
    white: '#FFFFFF',
    deepGreen: '#0D4D37',
    softGreen: '#123F2F',
  },
} as const;

export const SERVICES = [
  {
    id: 'videography',
    title: 'Videography',
    description: 'Professional video production for all occasions',
    features: ['4K Recording', 'Multiple Camera Angles', 'Professional Audio', 'Lighting Setup'],
    icon: 'camera' as const,
  },
  {
    id: 'editing',
    title: 'Video Editing',
    description: 'Cinematic post-production and color grading',
    features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Final Delivery'],
    icon: 'cog' as const,
  },
  {
    id: 'animation',
    title: 'Animation',
    description: 'Motion graphics and animated content',
    features: ['2D Animation', 'Motion Graphics', 'Logo Animation', 'Title Sequences'],
    icon: 'clapper' as const,
  },
  {
    id: 'sound-design',
    title: 'Sound Design',
    description: 'Audio production and sound engineering',
    features: ['Audio Mixing', 'Sound Effects', 'Music Composition', 'Voice Over'],
    icon: 'music' as const,
  },
  {
    id: 'drone',
    title: 'Drone Footage',
    description: 'Aerial cinematography and drone services',
    features: ['Aerial Shots', 'Cinematic Movement', '4K Drone Footage', 'Safety Compliant'],
    icon: 'camera' as const,
  },
  {
    id: 'consultation',
    title: 'Consultation',
    description: 'Creative direction and project planning',
    features: ['Creative Direction', 'Project Planning', 'Technical Advice', 'Budget Planning'],
    icon: 'chat' as const,
  },
] as const;

export const PORTFOLIO_CATEGORIES = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Capturing your special day with cinematic storytelling',
    videos: [
      {
        id: 'wedding-1',
        title: 'Anne & Riccardo Wedding',
        url: 'https://player.vimeo.com/video/324722806?h=a89f608244',
      },
      {
        id: 'wedding-2',
        title: 'April & Stephen Wedding',
        url: 'https://player.vimeo.com/video/763388059?h=ca94bb3dfe',
      },
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate',
    description: 'Professional business videos and brand content',
    videos: [],
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Music videos and live performance recordings',
    videos: [],
  },
  {
    id: 'events',
    title: 'Events',
    description: 'Event coverage and documentary-style videos',
    videos: [],
  },
] as const;

export const TESTIMONIALS = [
  {
    id: '1',
    name: 'Sarah & James',
    role: 'Wedding Couple',
    content: 'Euan captured our wedding day perfectly. The video tells our story beautifully and we treasure it every day.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Tech Startup CEO',
    role: 'Corporate Client',
    content: 'Professional, creative, and delivered exactly what we needed. The final product exceeded our expectations.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Music Artist',
    role: 'Musician',
    content: 'Euan understood our vision and brought it to life. The music video perfectly captures our artistic style.',
    rating: 5,
  },
] as const;

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/euanmichaelwattley',
  vimeo: 'https://vimeo.com/euanmichaelwattley',
  youtube: 'https://youtube.com/@euanmichaelwattley',
  linkedin: 'https://linkedin.com/in/euanmichaelwattley',
} as const;

export const SOCIAL_ICONS = [
  { name: 'Instagram', href: SOCIAL_LINKS.instagram, icon: 'camera' as const },
  { name: 'Vimeo', href: SOCIAL_LINKS.vimeo, icon: 'clapper' as const },
  { name: 'YouTube', href: SOCIAL_LINKS.youtube, icon: 'clapper' as const },
  { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin, icon: 'briefcase' as const },
] as const;

export const FEATURED_VIDEOS = {
  music: { title: "Demo Reel EMW", src: "https://www.youtube.com/embed/x260JiQhGm0?si=mDlZX3gsIhH3xkDC" },
  events: { title: "Charity Gala Highlights (Demo)", src: "https://www.youtube.com/embed/jTRsBDeqSL8?si=ifkppCebMSNpZA2Q" },
  corporate: { title: "Tech Startup Promo (Demo)", src: "https://www.youtube.com/embed/P9RR8JeuaQI?si=AcfZCZBeokfRV4C6" },
} as const;
