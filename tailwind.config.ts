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
        background: '#0a0a0a', 
        surface: '#171717',
        surfaceHighlight: '#262626',
        accent: '#06b6d4', // Cyan-500
      },
      fontFamily: {
        // This links Tailwind to your Next.js Geist fonts
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      }
    },
  },
  plugins: [],
};
export default config;