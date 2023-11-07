import { dotenv } from "dotenv" // need to import anything to export global :)
declare global {
  type AnyObject = { [key: string]: any }
  type LoadFormats = "ts" | "webp" | "json"
}
