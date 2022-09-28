/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      maxWidth: {
        app: "64rem",
      },
    },
  },
  plugins: [],
}

