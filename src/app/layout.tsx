import type { Metadata } from "next";
import { Unbounded, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personalInfo } from "@/lib/data";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-display",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
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
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
