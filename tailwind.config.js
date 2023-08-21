/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        green: "var(--green)",
        success: "#0E3F41",
      },
      borderRadius: {
        xxl: "calc(2 * var(--radius))",
        xl: "calc(var(--radius)+ 2px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 3px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        montserrat: ["var(--font-montserrat)"],
        laila: ["var(--font-laila)"],
      },
      backgroundImage: {
        video: "url(/play-video.svg)",
        'gradient-radial': "radial-gradient(var(--radial))",
      },
      backgroundSize: {
        // video: "50px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
  important: true,
};
