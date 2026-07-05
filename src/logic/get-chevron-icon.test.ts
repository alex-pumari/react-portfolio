import { describe, it, expect } from "vitest"
import { getChevronIcon } from "./get-chevron-icon.js"

describe("get-chevron-icon", () => {

  it("should return ▼ when closed and direction is downward", () => {
    expect(getChevronIcon(false, "bottom")).toBe("▼")
    expect(getChevronIcon(false, "bottom-left")).toBe("▼")
    expect(getChevronIcon(false, "bottom-right")).toBe("▼")
  })

  it("should return ▲ when open and direction is downward", () => {
    expect(getChevronIcon(true, "bottom")).toBe("▲")
    expect(getChevronIcon(true, "bottom-left")).toBe("▲")
    expect(getChevronIcon(true, "bottom-right")).toBe("▲")
  })

  it("should return ▲ when closed and direction is upward", () => {
    expect(getChevronIcon(false, "top")).toBe("▲")
    expect(getChevronIcon(false, "top-left")).toBe("▲")
    expect(getChevronIcon(false, "top-right")).toBe("▲")
  })

  it("should return ▼ when open and direction is upward", () => {
    expect(getChevronIcon(true, "top")).toBe("▼")
    expect(getChevronIcon(true, "top-left")).toBe("▼")
    expect(getChevronIcon(true, "top-right")).toBe("▼")
  })

  it("should handle unexpected directions by defaulting upward", () => {
    expect(getChevronIcon(false, "unknown" as "bottom")).toBe("▲")
    expect(getChevronIcon(true, "unknown" as "bottom")).toBe("▼")
  })

})