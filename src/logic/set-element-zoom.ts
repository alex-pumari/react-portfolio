export function setElementZoom(
  element: HTMLElement, zoom: number, baseZoom = 100, zoomOrigin: "top" | "center" = "top"
): void {
  const scale = zoom / baseZoom;
  const transformOriginX = zoomOrigin;

  element.style.transform = `scale(${scale})`;
  element.style.transformOrigin = `${transformOriginX} center`;
}
