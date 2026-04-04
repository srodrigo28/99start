/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        canvas: "#07111f",
        panel: "#111b2a",
        panelSoft: "#1c2635",
        stroke: "#243146",
        textMuted: "#9eb0cb",
        accent: "#f5b84c",
        success: "#1ddc88",
      },
    },
  },
  plugins: [],
};
