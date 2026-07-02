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
      spacing: {
        "18": "4.5rem",
      },
      height: {
        "18": "4.5rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        widest: ".15em",
      },
      boxShadow: {
        "cta": "0 4px 20px rgba(220, 38, 38, 0.3)",
        "cta-lg": "0 8px 32px rgba(220, 38, 38, 0.4)",
        "card": "0 1px 3px rgba(0,0,0,0.06), 0 2px 12px rgba(15, 23, 42, 0.06)",
        "card-hover": "0 4px 6px rgba(0,0,0,0.06), 0 8px 24px rgba(15, 23, 42, 0.10)",
        "hero": "0 20px 60px rgba(15, 23, 42, 0.4)",
        "popover": "0 4px 6px -1px rgba(0,0,0,0.07), 0 10px 30px -3px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      animation: {
        "pulse-red": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.2s ease-out",
        "slide-down": "slideDown 0.2s ease-out",
        "slide-up": "slideUp 0.25s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
