/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  mode: "jit",
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          lightHover: "#fcf4ff",
          darkHover: "#2a004a",
          darkTheme: "#11001F",
        },
        fontFamily: {
          Outfit: ["Outfit", "sans-serif"],
          Ovo: ["Ovo", "serif"],
        },
        boxShadow: {
          'black': "4px 4px 0px #000",
          'white': "4px 4px 0px #fff",
        }
      },
    },
    plugins: [],
  };
  