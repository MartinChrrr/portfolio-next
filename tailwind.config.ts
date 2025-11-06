import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-caption)"],
        mono: ["var(--font-geist-mono)"],
        'caption':["var(--font-caption)" ],
        anekTelugu: ["Anek Telugu", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
