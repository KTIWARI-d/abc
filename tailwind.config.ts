import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#99B81B", // primary olive-lime green
          dark: "#7E9A12",
          light: "#B8D43A",
          tint: "#F1FBCB",
        },
        teal: {
          deep: "#0C3A4D", // dark teal used in gradients
          900: "#003A5D",
        },
        ink: "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "ui-sans-serif", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        fadeUp: "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
