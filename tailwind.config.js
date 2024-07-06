/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#39D3BB',
        'ui-color1': '#2DCAB1',
        'ui-color2': '#7D879C',
        'ui-color3': '#2B3445',
        'ui-color4': '#000000',
        'ui-color5': '#FFFFFF',
        'chip-color6': '#1CB59C',
        'chip-color7': '#D3FFF5',
        'chip-color8': '#FFB800',
        'chip-color9': '#FFF8E5',
        'chip-color10': '#F56565',
        'chip-color11': '#FFDFDF',
        'color12': '#0D5287',
        'color13': '#187DCA',
        'color14': '#05AACE',
        'color15': '#04D2C6',
        'color16': '#26E4C7', 
      },
      fontFamily: {
        'opensans': ['"Open Sans"', 'sans-serif'],
      },
      fontSize: {
        'banner': ['50px', '1.2', { fontWeight: '700' }],
        'bannerMobile': ['32px', { fontWeight: '700' }],
        'h1': ['44px', { fontWeight: '400' }],
        'h2': ['17px', { fontWeight: '600' }],
        'h2mobile': ['20px', { fontWeight: '700' }],
        'title': ['36px', { fontWeight: '400' }],
        'releases': ['25px', { fontWeight: 'bold' }],
        'description': ['14px', { fontWeight: '600' }],
        'date': ['14px', { fontWeight: '400' }],
        'description1': ['14px', { fontWeight: '600' }],
        'chips': ['14px', { fontWeight: '700' }],
      },
    },
  },
  plugins: [],
}
