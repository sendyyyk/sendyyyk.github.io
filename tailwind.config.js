const scrollbarPlugin = require('./tailwind.scrollbar');
const scrollbarPrimary = require('./tailwind.scrollbar');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': "#24377b",
        'secondary': "#008080",
        'grey': "#0c0d0f",
        'transpWhite' : "#ffffffaa",
        'transpBlack' : "#000000aa",
        'transpPrimary' : "#24377baa",
        'transpSecondary' : "#008080aa",
      },
      fill: {
        'secondary': "#008080"
      },
      colors: {
        'primary': '#24377b',
        'secondary': '#008080',
      },
      backdropBlur: {
        '0/2vw' : '0.2vw',
        '0/5vw' : '0.5vw',
        '1vw' : '1vw'
      },
      width: {
        '90%' : '90%',
        '0/1vw' : '0.1vw',
        '0/5vw' : '0.5vw',
        '1vw' : '1vw',
        '1/3vw' : '1.3vw',
        '1/5vw' : '1.5vw',
        '2vw' : '2vw',
        '2/5vw' : '2.5vw',
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5vw' : '5vw',
        '7vw' : '7vw',
        '8vw' : '8vw',
        '10vw' : '10vw',
        '12vw' : '12vw',
        '13vw' : '13vw',
        '15vw' : '15vw',
        '18vw' : '18vw',
        '20vw' : '20vw',
        '22vw' : '23vw',
        '25vw' : '25vw',
        '28vw' : '28vw',
        '30vw' : '30vw',
        '35vw' : '35vw',
        '36vw' : '36vw',
        '38vw' : '38vw',
        '40vw' : '40vw',
        '45vw' : '45vw',
        '50vw' : '50vw',
        '60vw': '60vw',
        '65vw': '65vw',
        '75vw': '75vw',
        '90vw': '90vw',
      },
      height: {
        '90%' : '90%',
        '4vwmin' : '-4vw',
        '0/15vw' : '0.15vw',
        '0/5vw' : '0.5vw',
        '1vw' : '1vw',
        '1/3vw' : '1.3vw',
        '1/5vw' : '1.5vw',
        '2vw' : '2vw',
        '2/5vw' : '2.5vw',
        '3vw' : '3vw',
        '3/5vw' : '3.5vw',
        '4vw' : '4vw',
        '5vw' : '5vw',
        '7vw' : '7vw',
        '9/2vw' : '9.2vw',
        '10vw' : '10vw',
        '11vw' : '11vw',
        '12vw' : '12vw',
        '13vw' : '13vw',
        '15vw' : '15vw',
        '17vw' : '17vw',
        '20vw' : '20vw',
        '22vw' : '22vw',
        '25vw' : '25vw',
        '28vw' : '28vw',
        '30vw' : '30vw',
        '33vw' : '33vw',
        '34vw' : '34vw',
        '35vw' : '35vw',
        '38vw' : '38vw',
        '40vw' : '40vw',
        '45vw' : '45vw',
        '50vw' : '50vw',
        '52vw' : '52vw',
        '60vw' : '60vw',
        '70vw' : '70vw',
        '80vw' : '80vw',
        '96vw' : '96vw',
        '95%' : '98%',
        '125vw' : '125vw',
        '140vw' : '140vw',
        '150vw' : '150vw',
        '180vw' : '180vw',
        '310vh' : '310vh',
      },
      maxHeight: {
        '28vw' : '28vw',
      },
      margin: {
        'min8/8vw' : '-8.8vw',
        'min3vw' : '-3vw',
        'min2vw' : '-1.8vw',
        'min0/7vw' : '-0.7vw',
        '0/5vw' : '0.5vw',
        '1vw' : '1vw',
        '1/5vw' : '1.5vw',
        '2vw' : '2vw',
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5vw' : '5vw',
        '7vw' : '7vw',
        '8vw' : '8vw',
        '10vw' : '10vw',
        '12vw' : '12vw',
        '15vw' : '15vw',
        '20vw' : '20vw',
        '22vw' : '22vw',
        '25vw' : '25vw',
        '30vw' : '30vw',
        '35vw' : '35vw',
        '45vw' : '45vw',
        '50vw' : '50vw',
        '55vw' : '55vw',
      },
      padding: {
        '0/2vw' : '0.2vw',
        '0/4vw' : '0.4vw',
        '0/5vw' : '0.5vw',
        '0/8vw' : '0.8vw',
        '1vw' : '1vw',
        '1/2vw' : '1.2vw',
        '1/5vw' : '1.5vw',
        '2vw' : '2vw',
        '3vw' : '3vw',
        '4vw' : '4vw',
        '5vw' : '5vw',
        '7vw' : '7vw',
        '8vw' : '8vw',
        '10vw' : '10vw',
        '12vw' : '12vw',
      },
      inset: {
        '25min' : '-25%',
        '1%' : '1%',
        '2%' : '2%',
        '3%' : '3%',
        '4%' : '4%',
        '7%' : '7%',
        '12/5%' : '12.5%',
        '44%' : '44%',
        '46%' : '46%',
        '50%' : '50%',
        '1vw' : '1vw',
        '2vw' : '2vw',
        '2/3vw' : '2.3vw',
        '5vw' : '5vw',
        '6vw' : '6vw',
        '15vw' : '15vw',
        '17vw' : '17vw',
        '22vw' : '22vw',
        '93vw' : '93vw',
      },
      zIndex: {
        '10min' : '-10'
      },
      gap: {
        '0/2vw' : '0.2vw',
        '0/5vw' : '0.5vw',
        '0/7vw' : '0.7vw',
        '0/8vw' : '0.8vw',
        '1vw' : '1vw',
        '1/5vw' : '1.2vw',
        '2vw' : '2vw',
        '2/5vw' : '2.5vw',
        '3vw' : '3vw',
        '5vw' : '5vw',
        '8vw' : '8vw',
        '10vw' : '10vw',
        '13vw' : '13vw',
      },
      translate: {
        '1/2min' : '-50%',
        '100min' : '-100%',
      },
      rotate: {
        '270' : '270deg',
        '360' : '360deg',
        'zy-180' : 'rotateY(180deg) rotateZ(180deg)',
        'z-180' : 'rotateZ(180deg)',
      },
      boxShadow: {
        '2vwWhiteInset' : 'inset 0.8vw -0.8vw 1vw 0.3vw #ffffff',
        '2vwWhite' : '0.8vw 0vw 3vw 4vw #ffffff',
        '2vwBlack' : '0.8vw 0vw 3vw 3vw #000000',
        '0/1vw' : '0 0 0.1vw 0.1vw #ffffff50',
        '0/4vwBlack' : '-0.15vw 0.2vw 0.4vw 0.07vw #000000',
        '0/2vwPrimary' : '0 0 0.5vw 0.1vw #24377b',
        '3vwPrimary' : '0 0 3vw 0.7vw #24377b',
        '0/2vwSecondary' : '0 0 0.5vw 0.1vw #008080',
        '3vwSecondary' : '0 0 3vw 0.7vw #008080'
      },
      transitionDuration: {
        '500': '500ms',
      },
      borderWidth: {
        '0/1vw' : '0.1vw',
        '0/2vw' : '0.2vw',
        '0/3vw' : '0.3vw',
        '0/4vw' : '0.4vw',
        '0/5vw' : '0.5vw',
        '0/7vw' : '0.7vw',
        '1vw' : '1vw',
        '1/3vw' : '1.3vw',
      },
      borderColor: {
        'primary' : '#24377b',
        'secondary' : '#008080',
        'dark' : '#252525',
      },
      lineHeight: {
        '0' : '0',
      },
      borderRadius: {
        '0/5vw' : '0.5vw',
        '1vw' : '1vw',
        '2vw' : '2vw',
        '3vw' : '3vw'
      },
      lineClamp: {
        '9': '9',
      },
      textIndent: {
        '9/3vw': '9.3vw',
        '25vw': '33vw'
      },
      fontSize:{
        '0/7vw' : '0.7vw',
        '0/8vw' : '0.8vw',
        '0/9vw' : '0.9vw',
        '1vw' : '1vw',
        '1/3vw' : '1.3vw',
        '1/5vw' : '1.5vw',
        '2vw' : '2vw',
        '2/5vw' : '2.5vw',
        '3vw' : '3vw',
        '3/3vw' : '3.3vw',
        '4vw' : '4vw',
        '5vw' : '5vw',
        '6vw' : '6vw',
        '7vw' : '7vw',
        '8vw' : '8vw',
        '10vw' : '10vw',
        '20vw' : '20vw',
      },
    },
  },
  plugins: [
    scrollbarPrimary,
    scrollbarPlugin,
  ],
}
