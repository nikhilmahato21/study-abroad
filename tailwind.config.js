/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        flyBlue: "#4C4AD5",
        baseGrey: "#EFEFEF",
        heroBlue: "#A3A3FD",
        graphite:  "#454545",
        circleSky:"#E5E5FF",
        circlePurple:"#EFE4FF",
        circlePink:"#FFDEE5",

      },
      spacing: {
        64: "16rem", // Add a custom spacing value for the image height
      },
      keyframes: {
        revolve: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        revolve: "revolve 12s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
