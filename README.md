# Euan Michael Wattley Videography

A modern, cinematic website for professional videography services based in London, UK. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🎬 Features

- **Cinematic Design**: Dark, premium aesthetic with smooth animations
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Professional Portfolio**: Showcase of wedding, corporate, music, and event videos
- **Service Pages**: Detailed information about videography services
- **Contact Forms**: Mailto integration for quote requests and consultations
- **Accessibility**: ARIA labels, keyboard navigation, and focus management
- **SEO Optimized**: Meta tags and structured data for search engines

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── about/             # About page
│   ├── contact/          # Contact page
│   ├── consultation/      # Consultation booking
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Services page
│   ├── testimonials/      # Client testimonials
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ContactCard.tsx    # Contact information card
│   ├── Header.tsx         # Desktop navigation
│   ├── Logo.tsx           # Animated logo component
│   ├── MobileNav.tsx      # Mobile navigation
│   ├── QuoteModal.tsx     # Quote request modal
│   ├── Section.tsx       # Page section wrapper
│   ├── ServiceCard.tsx   # Service display card
│   └── VideoEmbed.tsx    # Video player component
├── lib/                   # Utilities and constants
│   └── constants.ts       # Brand data and content
└── public/               # Static assets
```

## 🎨 Brand Colors

- **Black**: `#0B0D0F` - Primary background
- **White**: `#FFFFFF` - Primary text
- **Deep Green**: `#0D4D37` - Accent color
- **Soft Green**: `#123F2F` - Secondary accent

## 🛠️ Customization

### Updating Content

Edit `lib/constants.ts` to update:
- Brand information
- Services and pricing
- Portfolio videos
- Testimonials
- Social media links

### Adding New Pages

1. Create a new folder in `app/`
2. Add `page.tsx` with your content
3. Update navigation in `components/Header.tsx` and `components/MobileNav.tsx`

### Styling

The project uses Tailwind CSS with custom utilities defined in `app/globals.css`:
- `.btn-primary` - Primary button style
- `.btn-secondary` - Secondary button style
- `.section-padding` - Consistent section spacing
- `.container-max` - Max width container

## 📱 Responsive Design

- **Desktop**: Fixed header with blur background
- **Mobile**: Fixed bottom navigation with 5 main sections
- **Tablet**: Optimized layouts for medium screens

## ♿ Accessibility Features

- ARIA labels for screen readers
- Keyboard navigation support
- Focus management in modals
- Semantic HTML structure
- High contrast color scheme

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project for production:

```bash
npm run build
npm start
```

## 📧 Contact Integration

The website uses mailto links for contact forms:
- Quote requests open email client with pre-filled subject and body
- Consultation bookings generate detailed emails
- All forms are client-side only (no backend required)

## 🎬 Video Integration

- Supports Vimeo and YouTube embeds
- Responsive video players
- Lazy loading for performance
- Accessible video controls

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 🤝 Support

For technical support or questions about this website, contact:
- Email: euanmichaelwattley@gmail.com
- Website: [Your Domain Here]

---

Built with ❤️ for Euan Michael Wattley Videography
