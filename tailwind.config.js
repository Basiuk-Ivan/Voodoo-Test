/** @type {import('tailwindcss').Config} */
export const content = ['./build/**/*.{html,js}'];
export const theme = {
  fontFamily: {
    display: ['Space Grotesk', 'sans-serif'],
    body: ['Space Grotesk', 'sans-serif'],
    mono: ['Space Mono', 'monospace'],
  },
  extend: {
    backgroundColor: {
      body: '#FCF7E6',
      black: '#000',
      white: '#fff',
      button: '#000',
      cart: '#1E1E1E',
    },
    colors: {
      white: '#fff',
      black: '#000',
      alpha: '#FCF7E6',
      pagination: '#1E1E1E',
    },
  },
};
export const plugins = [];
