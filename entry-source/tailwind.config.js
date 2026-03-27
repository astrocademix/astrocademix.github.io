/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
        '-5': '-5',
      },
      translate: {
        '72': '18rem',
        '80': '20rem',
        '100': '25rem',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
