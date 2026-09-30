import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files, so build the site to plain HTML in ./out
  output: "export",
  // The Next.js image optimizer needs a server; serve images as-is instead
  images: { unoptimized: true },
  // Emit /blog/slug/index.html so every route resolves on GitHub Pages
  trailingSlash: true,
};

export default nextConfig;
