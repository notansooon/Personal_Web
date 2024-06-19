/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontSize: {
        '2.5xl': '1.75rem',  // Example size between 2xl (1.5rem) and 3xl (1.875rem)
      }

    },
  },
  plugins: [require('tailwind-scrollbar-hide'), nextui()],
  darkMode: "class",
}


