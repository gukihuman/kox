export default defineNuxtPlugin(async () => {
  await load(import.meta.glob("@/modules/**/*"), MODELS.modules, "ts", true)
  await load(import.meta.glob("@/assets/**/*"), ASSETS.webps, "webp")
  await load(import.meta.glob("@/assets/**/*"), ASSETS.jsons, "json")
  await load(import.meta.glob("@/assets/**/*"), ASSETS.pdfs, "pdf")
  await load(import.meta.glob("@/assets/**/*"), ASSETS.docxs, "docx")
  await load(import.meta.glob("@/assets/**/*"), ASSETS.jpgs, "jpg")
})
async function load(
  paths: Record<string, () => Promise<Record<string, any>>>,
  savePlace: AnyObject | string[],
  format: LoadFormats = "ts",
  justNames = false
) {
  for (const path in paths) {
    const name = getFileName(path, format)
    if (!name) continue
    const item = await paths[path]()
    if (justNames) {
      globalThis[name] = item
      savePlace.push(name)
      continue
    }
    savePlace[name] = item.default
  }
}
function getFileName(path: string, format: LoadFormats) {
  let match: any[] | null = null
  if (format === "ts") {
    match = path.match(/\/([^/]+)\.ts/)
  } else if (format === "webp") {
    match = path.match(/\/([^/]+)\.webp/)
  } else if (format === "json") {
    match = path.match(/\/([^/]+)\.webp/)
  } else if (format === "pdf") {
    match = path.match(/\/([^/]+)\.pdf/)
  } else if (format === "docx") {
    match = path.match(/\/([^/]+)\.docx/)
  } else if (format === "jpg") {
    match = path.match(/\/([^/]+)\.jpg/)
  }
  if (!match) return
  return `${match[1]}`
}
