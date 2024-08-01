/** @type {Plugin} */

import plugin from 'tailwindcss/plugin';

export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontSize: {
      '2.5xl': '1.75rem',
    },
    spacing: {
      'svh-41': '41svh',
      'svh-50': '50svh',
      'svh-60': '60svh',
      'svh-75': '75svh',
      'svh-80': '80svh',
      'svh-100': '100svh',
    },
    screens: {
      'xs': '320px',
      'ipad': '768px',
      'surface': '900px',
      'ipadP': '1024px',
      'surface2': '540',
    },
  },
};
export const plugins = [
  require('tailwind-scrollbar-hide'),
  plugin(function ({addBase}) {
    addBase({
      '@media (min-width: 300px) and (min-height: 800px)': {
        '.responsive-margin-height': {
          marginTop: '50px',
        },
      },
      '@media (min-width: 400px) and (min-height: 800px)': {
        '.responsive-margin-height-md': {
          marginTop: '100px',
        },
      },
      '@media (min-width: 768px) and (min-height: 800px)': {
        '.responsive-ipad-height': {
          height: '1050px',
        },
      },
    });
  }),
];







