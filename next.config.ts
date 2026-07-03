import type { NextConfig } from "next";

const isDeploy = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  ...(isDeploy && { output: "export" }),
  basePath: isDeploy ? "/PosingDemo" : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isDeploy ? "/PosingDemo" : "",
  },
};

export default nextConfig;
