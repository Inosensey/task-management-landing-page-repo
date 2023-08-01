/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      phone: "280px",
      mdphone: "420px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      larger: "1920px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        Primary: "#222831",
        Secondary: "#393E46",
        LightPrimary: "#00ADB5",
        LightSecondary: "#EEEEEE",
      },
      fontFamily: {
        Roboto: ["var(--font-roboto)"],
        PlayFairDisplay: ["var(--font-playfair-display)"],
      },
    },
  },
  plugins: [],
};
