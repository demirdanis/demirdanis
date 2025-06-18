import type { NextConfig } from "next";
const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";
const repoName = "demirdanis";
const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
  images: { unoptimized: true },
  // force trailing slash for all URLs (GitHub Pages için önerilir)
  trailingSlash: true,
};

export default nextConfig;
