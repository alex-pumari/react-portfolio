interface PointerHandlers {
  onStart: (e: TouchEvent | MouseEvent) => void
  onMove: (e: TouchEvent | MouseEvent) => void
  onEnd: (e: TouchEvent | MouseEvent) => void
}

interface DraggableEventOptions {
  element: HTMLElement
  isTouchDevice: boolean
  handlers: PointerHandlers
}


export function attachEvents({ element, isTouchDevice, handlers }: DraggableEventOptions) {
  const { onStart, onMove, onEnd } = handlers

  if (isTouchDevice) {
    element.addEventListener('touchstart', onStart)
    document.addEventListener('touchmove', onMove, { passive: false })
    document.addEventListener('touchend', onEnd)
  } else {
    element.addEventListener('mousedown', onStart)
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onEnd)
    document.addEventListener('mouseleave', onEnd)
  }
}

export function detachEvents({ element, isTouchDevice, handlers }: DraggableEventOptions) {
  const { onStart, onMove, onEnd } = handlers

  if (isTouchDevice) {
    element.removeEventListener('touchstart', onStart)
    document.removeEventListener('touchmove', onMove)
    document.removeEventListener('touchend', onEnd)
  } else {
    element.removeEventListener('mousedown', onStart)
    document.removeEventListener('mousemove', onMove)
    document.removeEventListener('mouseup', onEnd)
    document.removeEventListener('mouseleave', onEnd)
  }
}