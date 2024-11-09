import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  images: {
    unoptimized: true, 
  },
  basePath: '/Bookix', // Вказуємо базовий шлях для GitHub Pages
};

export default nextConfig;
