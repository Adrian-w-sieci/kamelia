/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // adjust these paths to match where your React/Next files live
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // your custom graphite color
        graphite: 'rgb(15, 15, 15)',
      },
    },
  },
  plugins: [],
}
