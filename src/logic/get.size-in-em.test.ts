import { describe, test, expect } from "vitest";
import { getSizeInEm } from "./get.size-in-em.js";
import type { Size } from "../types/size.js";

describe("get-size-in-em", () => {
  test("should return 0.5em for sm size", () => {
    expect(getSizeInEm("sm")).toBe("0.5em");
  });

  test("should return 1em for md size", () => {
    expect(getSizeInEm("md")).toBe("1em");
  });

  test("should return 1.5em for lg size", () => {
    expect(getSizeInEm("lg")).toBe("1.5em");
  });

  test("should return custom em value when passing raw size", () => {
    expect(getSizeInEm("2em" as Size)).toBe("2em");
  });
});
