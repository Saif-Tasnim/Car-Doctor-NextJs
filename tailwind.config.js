/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["18px", "28px"],
      xl: ["20px", "32px"],
      "2xl": ["22px", "36px"],
      "3xl": ["24px", "40px"],
      "3.5xl": ["32px", "38.4px"],
      "4xl": ["36px", "40px"],
    },
    extend: {
      colors: {
        primary: "#FF3811",
        dark: {
          1: "#151515",
          2: "#444444",
          3: "#737373",
          4: "#A2A2A2",
          5: "#D0D0D0",
          6: "#E8E8E8",
          7: "#F3F3F3",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
