import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/sanval-ebert.jpg",
        destination: "/San_10.jpg",
      },
    ];
  },
};

export default nextConfig;
