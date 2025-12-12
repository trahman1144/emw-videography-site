'use client'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-white/10 bg-[#0b0e0c] text-center text-sm text-white/60 py-6 mt-16">
      <p className="tracking-wide">
        Website designed by <span className="text-white font-medium">RefinedSites</span> © {year}
      </p>
    </footer>
  )
}

