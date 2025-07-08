import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        // Seu Cloud Name vai aqui
        pathname: '/dwucy4ffg/image/upload/**',
      },
    ],
  },
};

export default nextConfig;