/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontSize: {
        '2.5xl': '1.75rem',  // Example size between 2xl (1.5rem) and 3xl (1.875rem)
      }

    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}


