import type { NextConfig } from "next";
const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";
const basePath = process.env.DEPLOYNEXT_PUBLIC_BASE_PATH_TARGET ?? "";
const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `${basePath}` : "",
  assetPrefix: isGithubPages ? `${basePath}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
