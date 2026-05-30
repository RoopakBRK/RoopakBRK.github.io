import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.secondaryTagline,
  keywords: ["AI Developer", "Machine Learning Engineer", "Full Stack Developer", "LangChain", "RAG", "LLM", "MLOps", "Kubeflow", "Next.js", "FastAPI"],
  authors: [{ name: personalInfo.name }],
  openGraph: {
    title: personalInfo.name,
    description: personalInfo.secondaryTagline,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-white/20`}>
        {children}
      </body>
    </html>
  );
}
