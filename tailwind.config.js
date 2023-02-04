/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "bg": "#282828",
      "red": "#cc241d",
      "green": "#98971a",
      "yellow": "#d79921",
      "blue": "#458588",
      "aqua": "#689d6a",
      "gray": "#928374",
      "orange": "#d65d0e",

      "bg0_h": "#1d2021",
      "bg0": "#282828",
      "bg1": "#3c3836",
      "bg2": "#504945",
      "bg3": "#665c54",
      "bg4": "#7c6f64",

      "bg0_s": "#32302f",
      "fg4": "#a89984",
      "fg3": "#bdae93",
      "fg2": "#d5c4a1",
      "fg1": "#ebdbb2",
      "fg0": "#fbf1c7",
    },
    extend: {},
  },
  plugins: [],
}