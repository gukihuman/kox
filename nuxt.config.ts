export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      title: "кох59",
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
  ],
  imports: {
    dirs: ["boot/**/*.{js,ts}", "modules/**/*.{js,ts}"],
  },
  components: [{ path: "@/interface", pathPrefix: false }],
  plugins: ["@/boot/load.ts", "@/boot/start.ts"],
  css: ["@/tailwind.css"],

  // important for correct work of importer
  vite: {
    assetsInclude: ["**/*.md"],
    build: { minify: false },
  },
  sourcemap: false, // save build not working with sourcemap
})
