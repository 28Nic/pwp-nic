/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        knittingnic: {

          "primary": "#fecdd3",

          "secondary": "#ddd6fe",

          "accent": "#fdbf68",

          "neutral": "#211f33",

          "base-100": "#ffffff",

          "info": "#c4b5fd",

          "success": "#dae8de",

          "warning": "#fde68a",

          "error": "#f87171",
        },
      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        yarn: "url(https://photos.app.goo.gl/2hTP8AQLxdEpcmjaA)",
      }
    },
  },
  plugins: [require("daisyui")],
}