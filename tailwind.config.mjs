import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        cream: {
          50: "#fdfcfb",
          100: "#faf7f4",
          200: "#f3ede6",
          300: "#e8ded3",
        },
        ink: {
          50: "#f5f5f4",
          100: "#a8a29e",
          200: "#78716c",
          300: "#57534e",
          400: "#44403c",
          500: "#292524",
          600: "#1c1917",
          700: "#171412",
          800: "#12100e",
          900: "#0d0b0a",
        },
        terracotta: {
          DEFAULT: "#b44a2d",
          light: "#c8614a",
          dark: "#8f3a22",
          muted: "#c4866e",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
