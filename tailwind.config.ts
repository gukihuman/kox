module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["montserrat", "system-ui"], // default
        mulish: ["Mulish"],
        russo: ["Russo One"],
        montserrat: ["Montserrat"],
      },
      colors: {
        dark: "#591417",
      },
    },
  },
  content: [
    "interface/**/*.{vue,js,ts}",
    ".guki/vue/**/*.{vue,js,ts}",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "composables/**/*.{js,ts}",
    "plugins/**/*.{js,ts}",
    "App.{js,ts,vue}",
    "app.{js,ts,vue}",
    "Error.{js,ts,vue}",
    "error.{js,ts,vue}",
    "content/**/*.md",
  ],
}
