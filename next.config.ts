/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // Put the (small) stylesheet in the HTML, removing a render-blocking request.
    inlineCss: true,
  },
  images: {
    // Serve AVIF to browsers that accept it (typically 20-30% smaller than WebP), WebP otherwise.
    formats: ['image/avif', 'image/webp'],
    // Default list minus 3840: full-bleed photos at 2048px still look sharp and are far lighter.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
}

module.exports = nextConfig
