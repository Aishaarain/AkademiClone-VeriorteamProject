/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: '#F3F4FF',
        primary: '#4D44B5',
        yellow: '#FCC43E',
        orange: '#FB7D5B',
        gray1: '#F5F5F5',
        gray2: '#C1BBEB',
        gray3: '#A098AE',
        text: '#303972'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
