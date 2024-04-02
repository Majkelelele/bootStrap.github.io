/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        emerald: {
          '100': '#D1FAE5',
          '200': '#A7F3D0',
          '300': '#6EE7B7', // Add emerald 300 shade
          // You can define more shades if needed
          '400': '#34D399',
          '500': '#10B981',
          // Add more shades as needed
        },
        pink: {
          '400': '#f06292',
          // Dodaj inne odcienie różu według potrzeb
        },
        lime: {
          '50': '#f7fee7',
          '100': '#ecfccb',
          '200': '#d9f99d',
          '300': '#bef264',
          '400': '#a3e635',
          '500': '#84cc16', // Add lime 500 shade
          '600': '#65a30d',
          '700': '#4d7c0f',
          '800': '#3f6212',
          '900': '#365314',
        },
      },
      borderRadius: {
        'lg': '1rem', // Adds a rounded-lg utility with 1rem border-radius
      },
      boxShadow: {
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Adds a shadow-md utility with specified box-shadow
      },
      padding: {
        '6': '1.5rem', // Adds a p-6 utility with 1.5rem padding
      },
      fontSize: {
        'xl': ['1.25rem', '1.5'],
      },
      fontWeight: {
        'bold': '700',
      },
      margin: {
        '2': '0.5rem',
      },
    },
  },
  plugins: [],
}

