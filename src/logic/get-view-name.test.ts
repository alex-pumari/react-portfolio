import { describe, expect, test } from "vitest";
import { getViewName } from "./get-view-name.js";

describe("get-view-name", () => {
  test("should return the correct name for each view", () => {
    expect(getViewName("home")).toBe("Inicio");
    expect(getViewName("about-me")).toBe("Sobre mí");
    expect(getViewName("projects")).toBe("Proyectos");
    expect(getViewName("contact")).toBe("Contacto");
  });

  test("should throw an error for an invalid view id", () => {
    expect(() => getViewName("invalid" as never)).toThrow(
      "View not found",
    );
  });
});