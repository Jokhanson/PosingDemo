import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PosingDemo",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
