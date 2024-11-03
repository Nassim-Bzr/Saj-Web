/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'www.fmfpro.org'],
  },
  eslint: {
    ignoreDuringBuilds: true, // Uniquement si vous voulez ignorer les erreurs ESLint pendant le build
  },
}

module.exports = nextConfig 