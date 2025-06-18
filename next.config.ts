import type { NextConfig } from "next";
const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";
const repoName = "demirdanis";
const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : "",
};

export default nextConfig;
