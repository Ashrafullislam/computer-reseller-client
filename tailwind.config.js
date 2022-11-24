/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes : [
    
     {
       computertheme: {
         primary: '#01008c',
         secondary: '#99a6ed',
         accent : '#141850',
         light: 'light',
       }
     }
    ]
   },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

}
