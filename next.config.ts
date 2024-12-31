import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  output: 'standalone',
};

export default nextConfig;
