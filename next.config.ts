import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    qualities: [90, 80, 70, 60, 50],
  },
};

export default nextConfig;
