import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anekTelugu: ["Anek Telugu", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
