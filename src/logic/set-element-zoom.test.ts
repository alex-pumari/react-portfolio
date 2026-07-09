import { describe, test, expect, beforeEach } from "vitest";
import { setElementZoom } from "./set-element-zoom.js";

describe("set-element-zoom", () => {
  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);
  });

  test("should set scale to 1 when zoom equals base-zoom", () => {
    setElementZoom(element, 100);
    expect(element.style.transform).toBe("scale(1)");
    expect(element.style.transformOrigin).toBe("center center");
  });

  test("should scale correctly for zoom less than base-zoom", () => {
    setElementZoom(element, 50);
    expect(element.style.transform).toBe("scale(0.5)");
  });

  test("should scale correctly for zoom greater than base-zoom", () => {
    setElementZoom(element, 150);
    expect(element.style.transform).toBe("scale(1.5)");
  });

  test("should use a custom base-zoom", () => {
    setElementZoom(element, 75, 50);
    expect(element.style.transform).toBe("scale(1.5)");
  });

  test("should handle zero zoom", () => {
    setElementZoom(element, 0);
    expect(element.style.transform).toBe("scale(0)");
  });

  test("should handle decimal zoom values", () => {
    setElementZoom(element, 125.5);
    expect(element.style.transform).toBe("scale(1.255)");
  });
});
