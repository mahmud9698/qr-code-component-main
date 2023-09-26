/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
            "./index.html"],
  theme: {
    colors: {
      'white': '#ffffff',
      'lightblueCustom': '#F0F8FF'
    },
    fontFamily:{
      'Outfit':['Outfit','sans-serif']
    },
    extend:{
      width:{
        '300':'300px'
      }, 
      height:{
        '300':'300px'
      }
    }
  },
  plugins: [],
}

