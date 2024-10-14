/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        Black : "#060606",
        White : "#ffffff",
        Green : "#6dc489",
        Blue : "#625bf6",
        Orange : "#eb8541",
        Gray : "#F5F5F5"
      },
    },
  },
  plugins: [
    tailwindScrollbar
  ]
}

