/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
swcMinify:true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org'
       
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'       
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com'       
      },
    ],
    minimumCacheTTL:1500000
  },
}

module.exports = nextConfig

