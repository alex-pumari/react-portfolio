export function setElementZoom(
  element: HTMLElement, zoom: number, baseZoom = 100
): void {
  const scale = zoom / baseZoom;
  element.style.transform = `scale(${scale})`;
  element.style.transformOrigin = "center center";
}
