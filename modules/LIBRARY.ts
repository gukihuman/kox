class Library {
  addGetter(object: AnyObject, name: string, fn: () => any) {
    Object.defineProperty(object, name, {
      get: fn,
      enumerable: true,
      configurable: true,
    })
  }
  wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }
  /** @returns string of time for example "22:43:54" */
  timeNow(): string {
    function _pad(num: number): string {
      return String(num).padStart(2, "0")
    }
    const now = new Date()
    const current: string =
      _pad(now.getHours()) +
      ":" +
      _pad(now.getMinutes()) +
      ":" +
      _pad(now.getSeconds())
    return current
  }
  logWarning(message: string) {
    console.log("❗ " + this.timeNow() + ": " + message)
  }
  generateRandomString(length) {
    let result = ""
    for (let i = 0; i < length; i++) {
      // Generate a random number between 0 and 9
      const randomNumber = _.random(0, 9)
      // Convert the number to a string and add it to the result
      result += randomNumber.toString()
    }
    return result
  }
  /** transform an object into reactive pinia store, ignores but saves init */
  store(object: AnyObject) {
    const functions = {}
    _.forEach(object, (value, key) => {
      if (typeof value === "function") {
        functions[key] = value
        delete object[key]
      }
    })
    const storeObject: AnyObject = {}
    storeObject.state = defineStore(this.generateRandomString(10), {
      state: () => object,
    })
    _.forEach(object, (value, key) => {
      Object.defineProperty(storeObject, key, {
        get: () => storeObject.state()[key],
        set: (value) => {
          storeObject.state()[key] = value
        },
      })
    })
    _.forEach(functions, (value, key) => {
      storeObject[key] = value
    })
    return storeObject
  }
  isPureObject(item) {
    if (typeof item === "object" && item !== null && !Array.isArray(item)) {
      return true
    }
    return false
  }
}

export const LIBRARY = new Library()
