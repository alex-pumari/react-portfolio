import { describe, test, expect, vi, beforeEach } from "vitest"
import { changeTheme } from "./change-theme.js"
import type { Theme } from "../types/index.js"

describe("change-theme", () => {
  let setAttributeMock: ReturnType<typeof vi.fn>

  beforeEach(() => {
    setAttributeMock = vi.fn()

    vi.spyOn(document, "querySelector").mockReturnValue({
      setAttribute: setAttributeMock,
    } as unknown as Element)
  })

  test("should convert theme to dark and set data-scheme", () => {
    const theme: Theme = "Dark"
    changeTheme(theme)

    expect(document.querySelector).toHaveBeenCalledWith(":root")
    expect(setAttributeMock).toHaveBeenCalledWith("data-scheme", "dark")
  })

  test("should convert theme to light and set data-scheme", () => {
    const theme: Theme = "Light"
    changeTheme(theme)

    expect(document.querySelector).toHaveBeenCalledWith(":root")
    expect(setAttributeMock).toHaveBeenCalledWith("data-scheme", "light")
  })
})