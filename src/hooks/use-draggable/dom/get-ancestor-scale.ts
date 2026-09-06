const DEFAULT_SCALE = 1;

export function getAncestorScale(element: HTMLElement): number {
  let scale = DEFAULT_SCALE;
  let currentElement = element.parentElement;

  while (currentElement) {
    const transform = window.getComputedStyle(currentElement).transform;
    const matrix = new DOMMatrix(transform);

    scale *= matrix.a;

    currentElement = currentElement.parentElement;
  }

  return scale > 0 ? scale : DEFAULT_SCALE;
}