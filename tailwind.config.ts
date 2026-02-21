import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: "rgb(var(--color-bg-dark) / <alpha-value>)", 
          charcoal: "rgb(var(--color-bg-charcoal) / <alpha-value>)", 
          gold: "rgb(var(--color-text-gold) / <alpha-value>)", 
          lightGold: "rgb(var(--color-text-lightGold) / <alpha-value>)",
          white: "rgb(var(--color-text-white) / <alpha-value>)",
          gray: "rgb(var(--color-text-gray) / <alpha-value>)",
          border: "rgb(var(--color-border) / <alpha-value>)", 
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-luxury": "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)",
      },
      boxShadow: {
        "gold-glow": "0 4px 30px rgba(212, 175, 55, 0.15)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
