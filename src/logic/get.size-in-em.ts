import type { Size } from "../types/size.js";

type EmValue = `${number}em`;

export function getSizeInEm(size: Size): EmValue {
  switch (size) {
    case "sm":
      return "0.5em";
    case "md":
      return "1em";
    case "lg":
      return "1.5em";
    default:
      return size;
  }
}
