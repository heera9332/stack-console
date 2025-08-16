import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'headless-dev.local',
      },
      {
        protocol: 'https',
        hostname: 'stack-console.zoro-dev.com',
      },
    ],
    minimumCacheTTL: 60,
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
  },

  typescript: {
    ignoreBuildErrors: true,

  },

  eslint: {
    // Also ignore ESLint errors during build if needed
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
