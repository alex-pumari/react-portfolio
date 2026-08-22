import { describe, test, expect } from "vitest";
import { formatTime } from "./format-time.js";

describe("format-time", () => {
  test("should format time with 2-digit hours, minutes, and seconds in 12-hour format", () => {
    const date = new Date("2024-08-22T14:30:45");
    const result = formatTime(date);
    expect(result).toMatch(/\d{2}:\d{2}:\d{2}\s(AM|PM)/);
  });

  test("should display PM for afternoon time", () => {
    const date = new Date("2024-08-22T14:30:45");
    const result = formatTime(date);
    expect(result).toContain("PM");
  });

  test("should display AM for morning time", () => {
    const date = new Date("2024-08-22T09:15:30");
    const result = formatTime(date);
    expect(result).toContain("AM");
  });

  test("should format midnight as 12 AM", () => {
    const date = new Date("2024-08-22T00:00:00");
    const result = formatTime(date);
    expect(result).toContain("12:");
    expect(result).toContain("AM");
  });

  test("should format noon as 12 PM", () => {
    const date = new Date("2024-08-22T12:00:00");
    const result = formatTime(date);
    expect(result).toContain("12:");
    expect(result).toContain("PM");
  });

  test("should use 2-digit format for all time components", () => {
    const date = new Date("2024-08-22T08:05:03");
    const result = formatTime(date);
    expect(result).toMatch(/08:05:03\s(AM|PM)/);
  });
});
