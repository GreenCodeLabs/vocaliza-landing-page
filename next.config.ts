import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fonts.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
