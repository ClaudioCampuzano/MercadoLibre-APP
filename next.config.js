/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http2.mlstatic.com'],
    formats: ['image/webp'],
  },
  env: {
    SERVER_HOST: process.env.SERVER_HOST,
  },
};

module.exports = nextConfig;
