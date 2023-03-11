/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg-sm': "url('/src/assets/header-bg-sm.jpg')",
        'header-bg': "url('https://res.cloudinary.com/dskl0qde4/image/upload/v1678548763/header-bg_lwm4rp.jpg')",
        'footer-bg': "url('/assets/profile_pic1.png')"
      },
      spacing: {
        82: '23rem',
        98: '35rem'
      }
    },
  },
  plugins: [],
}
