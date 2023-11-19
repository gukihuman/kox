module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["montserrat", "system-ui"], // default
        mulish: ["Mulish"],
        russo: ["Russo One"],
        montserrat: ["Montserrat"],
        marck: ["Marck Script"],
      },
      colors: {
        "chocolate-cosmos": "#591417",
        "dark-vanilla": "#DCB79C",
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
