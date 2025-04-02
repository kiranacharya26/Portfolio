module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: "bounce 1s infinite",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
};