/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['vumbnail.com', 'i.vimeocdn.com', 'img.youtube.com'],
  },
}

module.exports = nextConfig
