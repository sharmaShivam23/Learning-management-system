
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoomUp: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        slideIn : {
          '0%' : { transform : 'translateX(-400%)', opacity : '0' },
          '100%' : { transform : 'translateX(0%)' , opacity : '1' },
        },
        slideOut : {
          '0%' : { transform : 'translateX(400%)', opacity : '0' },
          '100%' : { transform : 'translateX(0%)' , opacity : '1' },
        },
        slideo : {
          '0%' : { transform : 'translateX(-400%)  rotate(100deg)', opacity : '0'  },
          '100%' : { transform : 'translateX(0%)  rotate(0deg)' , opacity : '1'  },
        }
      },
      animation: {
        zoomUp: 'zoomUp 3s ease-in-out',
        slideIn: 'slideIn 3s ease-in-out',
        slideOut: 'slideOut 3s ease-in-out',
        slideo: 'slideo 3s ease-in-out',
      },
    },
  },
  plugins: [],
}

