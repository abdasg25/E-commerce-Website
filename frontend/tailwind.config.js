/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths to match your project structure
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // Add any other plugins you might be using
  ],
}
