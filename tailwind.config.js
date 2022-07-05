/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://sticnuru.sirv.com/go-images/landing-bg-v2.5.png')"
      }
    },
  },
  plugins: [],
}
