/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          blush: "#FFF0F3",
          petal: "#FFE3E8",
          rose: "#FFB3C1",
          deepRose: "#E05375",
          accentRose: "#D93864",
          softSage: "#EBF5EE",
          sage: "#C3DBC5",
          moss: "#658B6F",
          darkSage: "#3D5A45",
          mint: "#E6F8F0",
          cream: "#FFFDF9",
          parchment: "#FBF7EE",
        },
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
        script: ["'Dancing Script'", "cursive"],
        handwriting: ["'Caveat'", "cursive"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
