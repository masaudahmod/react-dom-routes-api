import daisyui from 'daisyui';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  daisyui: {
    themes: [
      "light",
    ],
  },
  plugins: [
    daisyui,
    aspectRatio,
  ],
};
