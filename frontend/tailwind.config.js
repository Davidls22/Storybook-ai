module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '500px',
      },
      fontFamily: {
        inter: ['"Inter var"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'], 
      },
      boxShadow: {
        card: '0 0 2px 0 rgba(189,192,207,0.08), 0 12px 18px -2px rgba(189,192,207,0.25)', 
        cardhover: '0 0 2px 0 rgba(189,192,207,0.08), 0 12px 18px -2px rgba(189,192,207,0.45)', 
      },
      colors: {
        primary: '#1DA1F2', 
        secondary: '#14171A',
      },
    },
  },
  plugins: [],
};
