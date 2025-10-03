/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Shrek3' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Shrek3' : '',
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig;
