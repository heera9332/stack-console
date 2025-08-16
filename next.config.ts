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
};

export default nextConfig;
