/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "760px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        teal: "#0F9488",
        "teal-dark": "#0B6F66",
        gold: "#E0A930",
        leaf: "#7FAE3A",
        ink: "#101826",
        navy: "#0B1220",
        "navy-card": "#101D2B",
        "navy-border": "#223140",
        paper: "#FBFBF9",
        line: "#E7E5DF",
        muted: "#5B6472",
        "chip-mint": "#E7F5EA",
        "chip-teal": "#E7F2F4",
        "chip-gold": "#FDF1DE",
        "chip-lilac": "#F4E9F6",
        "chip-pink": "#FDEEF0",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        chip: "10px",
        card: "12px",
        pill: "18px",
      },
      maxWidth: {
        content: "1120px",
      },
      boxShadow: {
        card: "0 16px 30px -18px rgba(16,24,38,0.2)",
      },
      keyframes: {
        fadeSlideIn: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeSlideIn: "fadeSlideIn 0.45s ease both",
      },
    },
  },
  plugins: [],
};
