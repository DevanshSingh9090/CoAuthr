import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

// Every colour is stored as RGB channels in a CSS variable (see app/globals.css).
// Writing them as `rgb(var(--x) / <alpha-value>)` lets Tailwind keep supporting
// opacity modifiers such as `bg-ink-400/50`, while the palette lives in ONE place.
const channel = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        // Forest-ink surfaces (darkest -> lightest)
        ink: {
          100: channel("ink-100"),
          200: channel("ink-200"),
          300: channel("ink-300"),
          350: channel("ink-350"),
          400: channel("ink-400"),
          500: channel("ink-500"),
        },
        // Emerald: primary actions, links, focus rings
        brand: {
          100: channel("brand-100"),
          400: channel("brand-400"),
          500: channel("brand-500"),
          600: channel("brand-600"),
          700: channel("brand-700"),
        },
        // Amber: highlights and "attention" details
        sun: {
          400: channel("sun-400"),
          500: channel("sun-500"),
        },
        // Rose: destructive actions
        danger: {
          400: channel("danger-400"),
          500: channel("danger-500"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        // Soft card surface that replaces the image backgrounds of a typical dark UI
        surface:
          "linear-gradient(145deg, rgb(var(--ink-300)) 0%, rgb(var(--ink-200)) 100%)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.35s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;