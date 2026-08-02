import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101828",
        brand: "#4338ca",
        accent: "#f97316"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(67, 56, 202, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
