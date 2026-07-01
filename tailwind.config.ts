import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E3A8A",
          900: "#0F172A",
          950: "#060B18",
        },
        brand: {
          red: "#DC2626",
          "red-dark": "#B91C1C",
          "red-light": "#FEE2E2",
          blue: "#2563EB",
          "blue-dark": "#1E3A8A",
          "blue-light": "#EFF6FF",
          navy: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        "cta": "0 4px 24px rgba(220, 38, 38, 0.35)",
        "card": "0 2px 16px rgba(15, 23, 42, 0.08)",
        "hero": "0 20px 60px rgba(15, 23, 42, 0.4)",
      },
      animation: {
        "pulse-red": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "bounce-subtle": "bounce 2s infinite",
        "fade-up": "fadeUp 0.6s ease-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
