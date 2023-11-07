export default defineNuxtPlugin(async (app) => {
  app.hook("app:mounted", () => start())
})
async function start() {}
