type Argument =
  number |
  string |
  object |
  Array<string|object|Argument[]> |
  boolean |
  null |
  undefined

export function joinClasses(...args: Argument[]): string {
  const result: (string | number)[] = []

  args.forEach(arg => {
    if (!arg) return

    if (isString(arg) || isNumber(arg)) {
      result.push(arg)
    } else if (isObject(arg)) {
      if (Array.isArray(arg)) {
        const innerClasses = joinClasses(...arg)
        if (innerClasses) result.push(innerClasses)
      } else {
        for (const key in arg as Record<string, unknown>) {
          const isValidProperty = (key: string): boolean => {
            return Object.prototype.hasOwnProperty.call(arg, key) && !!arg[key]
          }
          if (isValidProperty(key)) result.push(key)
        }
      }
    }
  })

  return result.join(" ")
}

function isString (arg: any): arg is string {
  return typeof arg === "string"
}
function isNumber (arg: any): arg is number {
  return typeof arg === "number"
}
function isObject (arg: any): arg is Record<string, unknown> {
  return typeof arg === "object"
}