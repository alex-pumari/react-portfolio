import { describe, expect, test } from "vitest"
import { joinClasses } from "./join-classes.js"

describe("join-classes", () => {
  test("should return an empty string if no arguments are passed", () => {
    expect(joinClasses()).toBe("")
  })

  test("should handle strings", () => {
    expect(joinClasses("foo", "bar")).toBe("foo bar")
  })

  test("should handle numbers", () => {
    expect(joinClasses(1, 2, 3)).toBe("1 2 3")
  })

  test("should ignore falsy values", () => {
    expect(joinClasses(null, undefined, false, "", 0)).toBe("")
  })

  test("should handle arrays recursively", () => {
    expect(joinClasses(["foo", "bar"], ["baz"])).toBe("foo bar baz")
    expect(joinClasses("foo", ["bar", ["baz", "qux"]])).toBe("foo bar baz qux")
  })

  test("should handle objects with truthy values", () => {
    expect(joinClasses({ foo: true, bar: false, baz: 0, qux: 1 })).toBe("foo qux")
  })

  test("should combine all types together", () => {
    const result = joinClasses(
      "foo",
      42,
      { bar: true, baz: false },
      ["qux", { quux: true }]
    )
    expect(result).toBe("foo 42 bar qux quux")
  })

  test("should ignore inherited properties in objects", () => {
    const proto = { inherited: true }
    const obj = Object.create(proto)
    obj.own = true
    expect(joinClasses(obj)).toBe("own")
  })

  test("should handle nested empty arrays", () => {
    expect(joinClasses([], [[]], [[[]]])).toBe("")
  })
})