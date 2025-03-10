import { Outfit, Ovo } from "next/font/google";

const config = {
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff", 
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      FontFamily: {
        Outfit  : ["Outfit", "sans-serif"],
        Ovo     : ["Ovo", "serif"],
      },
    },
  },

  plugins: ["@tailwindcss/postcss"],
};

export default config;
