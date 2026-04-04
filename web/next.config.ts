import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    // Permite que o Next.js sirva imagens nos formatos mais leves e rápidos
    formats: ['image/avif', 'image/webp'],
    
    // Libera imagens no formato SVG (vem desativado por padrão por segurança)
    dangerouslyAllowSVG: true,
    
    // O curinga '**' libera qualquer domínio existente na internet
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
