export function setElementZoom(
  element: HTMLElement, zoom: number, baseZoom = 100
): void {
  const scale = zoom / baseZoom;
  element.style.fontSize = `${scale}rem`;
}
