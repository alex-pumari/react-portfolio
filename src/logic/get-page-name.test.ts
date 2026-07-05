import { describe, test, expect } from "vitest"
import { PAGE_NAMES } from "../config/constants.js"
import { getPageName } from "./get-page-name.js"

describe("get-page-name", () => {
  test("should return the correct page name for valid page numbers", () => {
    expect(getPageName(1)).toBe("Inicio")
    expect(getPageName(2)).toBe("Sobre mi")
    expect(getPageName(3)).toBe("Proyectos")
    expect(getPageName(4)).toBe("Contacto")
  })

  test("should throw a error if index is out of range", () => {
    expect(() => getPageName(0 as 1)).toThrow()
    expect(() => getPageName(5 as 1)).toThrow()
    expect(() => getPageName(-1 as 1)).toThrow()
  })

  test("should match the defined page-names array", () => {
    expect(PAGE_NAMES).toEqual(["Inicio", "Sobre mi", "Proyectos", "Contacto"])
  })
})
