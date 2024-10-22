import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */




module.exports = {
  content: [
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'dark': '#141415',
        'darker' : '#121212',
        'notdark' : '#414141',
        'sec' : '#FFAD4A',
        'over' : '#0B1215',
        'ft' : '#2A2A2A',
        'ftborder' : '#727272',
      },
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
    },
  },
  plugins: [
    require("flowbite/plugin"),
    flowbite.plugin()
  ],
};
