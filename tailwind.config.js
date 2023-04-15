/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flex:{
        '2':'0 0 86.7%',
        '3':'0 0 13.3%',
        '4':'0 0 80%',
        '5':'0 0 20%',
        '6':'0 0 76%',
        '7':'0 0 24%',

      },
      colors:{
        primary: '#1D1042',
        onPrimary: '#45269C',
        secondaryGreenLight:'#8BC488',
        secondaryOrange:'#FF5F37',
        labelColor: '#F4F6F8',
        bgPink:'#FBC7E0',
        bgButter:'#D9D3CE',
        bgGreen:'#597474',

      }
    },
    screens: {
      sm: '480px',
      md: '1280px',
      lg: '1440px',
      xl: '1920px',
    },
    fontFamily:{
      sans : ['Inter','sans-serif'],
     
    }
  },
  plugins: [],
};
