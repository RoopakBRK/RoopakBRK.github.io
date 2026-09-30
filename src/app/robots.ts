import { MetadataRoute } from "next";

// Required for output: "export" (GitHub Pages)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://roopakbrk.github.io/sitemap.xml",
  };
}
