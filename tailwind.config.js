/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".src/*.html"],
  theme: {
   
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px'
    },
    
    extend: {
      padding: {
        "default": '20PX',
      },
      colors: {
        'primary': "#75A47F",
        'secondary' : "#FA7070",
        'tert': "#F3FDE8",
        'accent': "#967E76"
      },
      fontFamily: {
        'primary': ['Cinzel'],
        'secondary': ['Merriweather']
      },
     
    },
  },
  plugins: [],
}

