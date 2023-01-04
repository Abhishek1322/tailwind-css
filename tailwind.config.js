/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    container: {
      // padding: '9rem'
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
        '2xl': '6rem',
      },
    },

  },

  extend: {
    colors: {
      footer: {
        400: '#c2c2c2',
      },
      fontSize: {
        xxs: '7px',
      },
    },
  },
  plugins: [],
}
