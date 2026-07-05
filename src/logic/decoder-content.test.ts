import { describe, test, expect } from "vitest"
import { decode } from "./decode-content.js"

describe("decoder-base64", () => {
  test("should decode a valid base64 string", () => {
    const base64Content: string = "SGVsbG8=" // "Hello" in base-64 string

    const result = decode.base64(base64Content)

    expect(result).toBe("Hello")
  })

  test("should decode an empty string", () => {
    const result = decode.base64("")

    expect(result).toBe("")
  })

  test("should throw when base64 string is invalid", () => {
    const invalidBase64Content = "not-base64!!"

    expect(() => decode.base64(invalidBase64Content)).toThrow()
  })
})

describe("decoder-url", () => {
  test("should decode a valid UTF-8 escaped string", () => {
    const utfContent = "Hello%20World"

    const result = decode.url(utfContent)

    expect(result).toBe("Hello World")
  })

  test("should return original value when decoding fails", () => {
    const invalidContentURISequence = "%E0%A4%A"

    const result = decode.url(invalidContentURISequence)

    expect(result).toBe(invalidContentURISequence)
  })

  test("should return empty string when input is empty", () => {
    const result = decode.url("")

    expect(result).toBe("")
  })
})

describe("decoder-utf8", () => {
  test("should decode a string of utf-8 bytes", () => {
    const bytesStr = "\xF0\x9F\x98\x80" // 😀 in utf-8 bytes
    expect(decode.utf8(bytesStr)).toBe("😀")
  })

  test("should return empty string when input is empty", () => {
    expect(decode.utf8("")).toBe("")
  })
})
