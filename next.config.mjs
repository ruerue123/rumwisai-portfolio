// Static export for GitHub Pages. For a project repo (user.github.io/repo) set
// NEXT_PUBLIC_BASE_PATH="/repo" at build time; leave unset for Vercel / root hosting.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // GitHub Pages has no image optimisation server; images are pre-compressed JPEGs.
  images: { unoptimized: true },
};
export default nextConfig;
