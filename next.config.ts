import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
};
module.exports = {
  output: 'export',
  images: {
    unoptimized: true, 
  },
  basePath: '/Bookix', 
  assetPrefix: '/Bookix/', 
};

export default nextConfig;
