/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        poppins: ["Poppins"],
      },
      backgroundImage: {
        heroBg : "url('/src/assets/bg.png')",
        heroBgMoblie: "url('/src/assets/bg-mobile.png')"
      }
    },
  },
  plugins: [],
};
