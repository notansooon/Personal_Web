/** @type {string[]} */

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontSize: {
      '2.5xl': '1.75rem',
      // Example size between 2xl (1.5rem) and 3xl (1.875rem)
    }
  },
};
export const plugins = [require('tailwind-scrollbar-hide')];


