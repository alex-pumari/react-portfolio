import { describe, test, expect } from "vitest";
import { omit } from "./omit.js";

describe("omit", () => {
  test("should omit a single key", () => {
    const object = {
      name: "John",
      age: 30,
      city: "Buenos Aires",
    };

    const result = omit(object, "age");

    expect(result).toEqual({
      name: "John",
      city: "Buenos Aires",
    });
  });

  test("should omit multiple keys", () => {
    const object = {
      name: "John",
      age: 30,
      city: "Buenos Aires",
      country: "Argentina",
    };

    const result = omit(object, ["age", "country"]);

    expect(result).toEqual({
      name: "John",
      city: "Buenos Aires",
    });
  });

  test("should return a copy without modifying the original object", () => {
    const object = {
      name: "John",
      age: 30,
    };

    const result = omit(object, "age");

    expect(result).toEqual({
      name: "John",
    });

    expect(object).toEqual({
      name: "John",
      age: 30,
    });
  });

  test("should return the same properties when keys array is empty", () => {
    const object = {
      name: "John",
      age: 30,
    };

    const result = omit(object, []);

    expect(result).toEqual(object);
  });

  test("should ignore keys that do not exist in the object", () => {
    const object = {
      name: "John",
      age: 30,
    };

    const result = omit(object, "email" as keyof typeof object);

    expect(result).toEqual({
        name: "John",
        age: 30,
    });
  });

  test("should preserve falsy values", () => {
    const object = {
      zero: 0,
      empty: "",
      falseValue: false,
      nullValue: null,
      undefinedValue: undefined,
    };

    const result = omit(object, "zero");

    expect(result).toEqual({
      empty: "",
      falseValue: false,
      nullValue: null,
      undefinedValue: undefined,
    });
  });

  test("should omit a key whose value is undefined", () => {
    const object = {
      name: "John",
      value: undefined,
    };

    const result = omit(object, "value");

    expect(result).toEqual({
      name: "John",
    });
  });

  test("should handle an object with a single property", () => {
    const object = {
      name: "John",
    };

    const result = omit(object, "name");

    expect(result).toEqual({});
  });

  test("should handle an empty object", () => {
    const object = {};

    const result = omit(object, []);

    expect(result).toEqual({});
    expect(object === result).toEqual(false);
  });

  test("should omit all properties when all keys are provided", () => {
    const object = {
      name: "John",
      age: 30,
      active: true,
    };

    const result = omit(object, ["name", "age", "active"]);

    expect(result).toEqual({});
  });

  test("should handle duplicate keys in the keys array", () => {
    const object = {
      name: "John",
      age: 30,
    };

    const result = omit(object, ["age", "age"]);

    expect(result).toEqual({
      name: "John",
    });
  });

  test("should only omit keys from the first level", () => {
    const object = {
      name: "John",
      category: {
        id: 1,
        name: "Developer",
      },
    };

    const result = omit(object, "name");

    expect(result).toEqual({
      category: {
        id: 1,
        name: "Developer",
      },
    });
  });

  test("should preserve nested objects and arrays", () => {
    const object = {
      name: "John",
      address: {
        city: "Buenos Aires",
      },
      tags: ["developer", "typescript"],
    };

    const result = omit(object, "name");

    expect(result).toEqual({
      address: {
        city: "Buenos Aires",
      },
      tags: ["developer", "typescript"],
    });
  });
});