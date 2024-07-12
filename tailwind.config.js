/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "pacifico": ["Pacifico"],
        "heading": ["Playfair Display"],
        "paragraph": ["Nunito Sans"]
      },
      colors: {
        text: "hsla(var(--text))",
        bg: "hsla(var(--bg))",
        secondary_bg: "hsla(var(--secondary_bg))",
        accent: "hsla(var(--accent))",
      }
    },
  },
  plugins: [],
}
