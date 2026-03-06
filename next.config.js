/** @type {import('next').NextConfig} */

const repo = 'safe-web'

const nextConfig = {
  reactStrictMode: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
