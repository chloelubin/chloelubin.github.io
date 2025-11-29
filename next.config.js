/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For user/organization GitHub Pages sites, basePath should be empty
  // as they are served from the root domain
  trailingSlash: true,
}

module.exports = nextConfig

