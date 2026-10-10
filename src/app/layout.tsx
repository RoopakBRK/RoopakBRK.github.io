import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

// Only the name is set in this one.
const wordmark = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-wordmark",
});

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
    <html lang="en" className={`${sans.variable} ${wordmark.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
