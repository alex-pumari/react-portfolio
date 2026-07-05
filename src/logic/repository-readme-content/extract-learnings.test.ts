import { describe, test, expect } from "vitest"
import { extractLearnings } from "./extract-learnings.js"

describe("extract-learnings", () => {
  test("should return an empty array if the section does not exist", () => {
    const markdown = `
      # Título del Proyecto
      Contenido aleatorio
      - Ítem 1
    `

    const result = extractLearnings(markdown)

    expect(result).toEqual([])
  })

  test("should extract bullet points from the section", () => {
    const markdown = `
      📚 Cosas que aprendí
      - Bases de React: Me introduje en la creación de componentes
      - Preprocesador de CSS: Usé Sass para organizar estilos
    `

    const result = extractLearnings(markdown)

    expect(result).toEqual([
      "Bases de React: Me introduje en la creación de componentes",
      "Preprocesador de CSS: Usé Sass para organizar estilos",
    ])
  })

  test("should ignore lines that are not bullet points", () => {
    const markdown = `
      📚 Cosas que aprendí
      Alguna introducción
      - Primer aprendizaje
      Otra línea aleatoria
      - Segundo aprendizaje
    `

    const result = extractLearnings(markdown)

    expect(result).toEqual([
      "Primer aprendizaje",
      "Segundo aprendizaje"
    ])
  })

  test("should trim leading symbols and whitespace correctly", () => {
    const markdown = `
      📚 Cosas que aprendí
        -   Aprendizaje con espacios
      * Otro formato (debería ser ignorado)
      -Aprendizaje final
    `

    const result = extractLearnings(markdown)

    expect(result).toEqual([
      "Aprendizaje con espacios",
      "Aprendizaje final"
    ])
  })
})
