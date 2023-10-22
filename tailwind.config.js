/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '10px 10px 3px 0 rgba(0, 0, 0, 0.8)',
        '4xl': '30px 30px 3px 0 rgba(0, 0, 0, 0.8)',
      }
    },
  },
  plugins: [],
}
