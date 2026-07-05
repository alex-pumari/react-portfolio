import { describe, test, expect } from "vitest"
import { parseRepositoryReadmeContent } from "./parse-repository-readme-content.js"
import type { Badge } from "../../types/badge.js"

const mockReadme: string = `
# 📋 Portafolio web personal
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![Sass](https://img.shields.io/badge/Sass-1.89.2-cc6699?style=for-the-badge&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![Imagen del Proyecto](readme/img1.jpg)

Un portafolio interactivo con una interfaz de usuario inspirada en PowerPoint.

<div align="center">
  <a href="https://youtu.be/RaP0u8aqNzc" target="_blank">
    <img src="https://img.shields.io/badge/Ver_demo-red?style=for-the-badge&logo=youtube&logoColor=white&color=FF0000&labelColor=FF0000" alt="Ver demo">
  </a>
</div>

📚 Cosas que aprendí
- Bases de React: Me introduje en la creación de componentes.
- Preprocesador de CSS: Usé Sass para organizar estilos.
---

## 📁 Estructura del Proyecto
Some other content that should NOT be parsed.
`

describe("parse-repository-readme-content", () => {
  test("should extract the title correctly", () => {
    const result = parseRepositoryReadmeContent(mockReadme)

    expect(result.title).toBe("Portafolio web personal")
  })

  test("should extract all badges from the first section", () => {
    const result = parseRepositoryReadmeContent(mockReadme)

    expect(result.badges).toStrictEqual([
      { name: "React", url: "https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react" },
      { name: "Sass", url: "https://img.shields.io/badge/Sass-1.89.2-cc6699?style=for-the-badge&logo=sass&logoColor=white" },
      { name: "Vite", url: "https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white" },
    ] satisfies Badge[])
  })

  test("should extract the project image path", () => {
    const result = parseRepositoryReadmeContent(mockReadme)

    expect(result.imagePath).toBe("readme/img1.jpg")
  })

  test("should extract the YouTube video URL", () => {
    const result = parseRepositoryReadmeContent(mockReadme)

    expect(result.videoUrl).toBe("https://youtu.be/RaP0u8aqNzc")
  })

  test("should extract learnings as a list", () => {
    const result = parseRepositoryReadmeContent(mockReadme)

    expect(result.learnings).toStrictEqual([
      "Bases de React: Me introduje en la creación de componentes.",
      "Preprocesador de CSS: Usé Sass para organizar estilos.",
    ])
  })

  test("should not parse content after the first horizontal rule (---)", () => {
    const result = parseRepositoryReadmeContent(mockReadme)

    expect(result.title).not.toContain("Estructura del Proyecto")
  })

  test("should return empty arrays when badges or learnings are missing", () => {
    const minimalReadme = `
# Simple Project

Just a description.
---
Other section
`
    const result = parseRepositoryReadmeContent(minimalReadme)

    expect(result.badges).toEqual([])
    expect(result.learnings).toEqual([])
  })
})