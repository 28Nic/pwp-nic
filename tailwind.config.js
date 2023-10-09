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
        yarn: "url(https://images.unsplash.com/photo-1584992236310-6edddc08acff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80)",
      }
    },
  },
  plugins: [require("daisyui")],
}