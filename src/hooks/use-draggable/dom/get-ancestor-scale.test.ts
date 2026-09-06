import { describe, expect, test, vi } from "vitest";
import { getAncestorScale } from "./get-ancestor-scale.js";

describe("get-ancestor-scale", () => {
  test("should return the scale of a scaled parent", () => {
    const parentElement = document.createElement("div");
    const childElement = document.createElement("div");

    parentElement.appendChild(childElement);

    Object.defineProperty(window, "getComputedStyle", {
      value: vi.fn((element: Element) => {
        if (element === parentElement) {
          return {
            transform: "matrix(0.8, 0, 0, 0.8, 0, 0)",
          };
        }

        return { transform: "none" };
      }),
    });

    expect(getAncestorScale(childElement)).toBe(0.8);
  });

  test("should multiply all ancestor scales", () => {
    const grandParentElement = document.createElement("div");
    const parentElement = document.createElement("div");
    const childElement = document.createElement("div");

    grandParentElement.appendChild(parentElement);
    parentElement.appendChild(childElement);

    Object.defineProperty(window, "getComputedStyle", {
      value: vi.fn((element: Element) => {
        if (element === parentElement) {
          return { transform: "matrix(0.8, 0, 0, 0.8, 0, 0)" };
        }

        if (element === grandParentElement) {
          return { transform: "matrix(0.5, 0, 0, 0.5, 0, 0)" };
        }

        return { transform: "none" };
      }),
    });

    expect(getAncestorScale(childElement)).toBe(0.4);
  });

  test("should fall back to one when the resulting scale is invalid", () => {
    const parentElement = document.createElement("div");
    const childElement = document.createElement("div");

    parentElement.appendChild(childElement);

    Object.defineProperty(window, "getComputedStyle", {
      value: vi.fn(() => ({ transform: "matrix(0, 0, 0, 0, 0, 0)" })),
    });

    expect(getAncestorScale(childElement)).toBe(1);
  });
});