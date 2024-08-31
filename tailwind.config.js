/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'r-t': '8px', // top-right
        'r-b': '8px', // bottom-right
      },
    },
    variants: {
      extend: {
        borderRadius: ['responsive'],
      },
    },
    plugins: [],
  }
}