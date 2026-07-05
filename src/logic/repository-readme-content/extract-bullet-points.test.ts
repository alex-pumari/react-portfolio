import { describe, expect, test } from "vitest"
import { extractBulletPoints } from "./extract-bullet-points.js"

describe("extract-bullet-points", () => {
  test("should extract only lines starting with '-'", () => {
    const section = `
      Introducción
      - Título
      Algo más
      - Descripcion
    `
    const result = extractBulletPoints(section)

    expect(result).toEqual(["Título", "Descripcion"])
  })

  test("should return empty array if no bullet points exist", () => {
    const section = `
      Solo texto
      Otra línea
    `

    expect(extractBulletPoints(section)).toEqual([])
  })

  test("should trim whitespace before processing", () => {
    const section = `
          -   Espaciado
    `

    expect(extractBulletPoints(section)).toEqual(["Espaciado"])
  })
})