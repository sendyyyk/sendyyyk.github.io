module.exports = function ({ addUtilities }) {
    const newUtilities = {
      '.menu-bar-scroll::-webkit-scrollbar': {
        width: '0.3vw',
        height: '1vw',
      },
      '.menu-bar-scroll::-webkit-scrollbar-track': {
        background: '#000000',
      },
      '.menu-bar-scroll::-webkit-scrollbar-thumb': {
        cursor: 'pointer',
        background: '#008080',
      },
      '.menu-bar-scroll::-webkit-scrollbar-thumb:hover': {
        background: '#ffffff',
      },
      '.menu-bar-scroll-mobile::-webkit-scrollbar': {
        width: '1vw',
        height: '1vw',
      },
      '.menu-bar-scroll-mobile::-webkit-scrollbar-track': {
        background: '#000000',
      },
      '.menu-bar-scroll-mobile::-webkit-scrollbar-thumb': {
        cursor: 'pointer',
        background: '#008080',
      },
      '.menu-bar-scroll-mobile::-webkit-scrollbar-thumb:hover': {
        background: '#ffffff',
      },
      '.container-def::-webkit-scrollbar': {
        width: '0.35vw',
      },
      '.container-def::-webkit-scrollbar-track': {
        background: '#000000',
      },
      '.container-def::-webkit-scrollbar-thumb': {
        background: '#fef3ba',
        borderRadius: '99vw'
      },
      '.videoTitle-scroll::-webkit-scrollbar': {
        height: '0.3vw'
      },
      '.videoTitle-scroll::-webkit-scrollbar-track': {
        background: '#000000',
      },
      '.videoTitle-scroll::-webkit-scrollbar-thumb': {
        background: '#008080',
        cursor: 'pointer',
      },
    };
    addUtilities(newUtilities, ['responsive', 'hover']);
};