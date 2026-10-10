import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        faint: "var(--faint)",
        signal: "var(--signal)",
        "signal-ink": "var(--signal-ink)",
        "grad-a": "var(--grad-a)",
        "grad-b": "var(--grad-b)",
      },
      fontFamily: {
        display: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "sans-serif"],
      },
      maxWidth: {
        page: "76rem",
      },
    },
  },
  plugins: [],
};
export default config;
