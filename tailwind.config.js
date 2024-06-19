/** @type {import('tailwindcss').Config} */
import { theme } from './src/theme/theme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme,
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".box-shadow-md": {
          boxShadow: "0.015rem 0.015rem 0.5rem 0 #222"
        },
      })
    }
  ],
}
