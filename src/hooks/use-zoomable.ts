import { useEffect, useRef, type RefObject } from "react"

interface UseZoomableOptions<ZoomableElement extends HTMLElement = HTMLElement> {
  ref: RefObject<ZoomableElement | null>
  isTouchDevice: boolean
  onZoomIn?: (amount: number) => void
  onZoomOut?: (amount: number) => void
  threshold?: number
}

export function useZoomable<ZoomableElement extends HTMLElement = HTMLElement>(
  { ref, isTouchDevice, onZoomIn, onZoomOut, threshold = 15 }: UseZoomableOptions<ZoomableElement>
) {
  const lastPinchDistance = useRef<number | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const emitZoom = (delta: number) => {
      const amount = Math.abs(delta)
      const isSignificantZoom = amount >= threshold
      if (!isSignificantZoom) return

      const isZoomInGesture = delta > 0
      isZoomInGesture ? onZoomIn?.(amount) : onZoomOut?.(amount)
    }

    const handleTouchstart = (e: TouchEvent) => {
      const isTwoFingerTouch = e.touches.length === 2
      if (!isTwoFingerTouch) return

      lastPinchDistance.current = getPinchDistance(e.touches)
    }

    const handleTouchmove = (e: TouchEvent) => {
      const isTwoFingerTouch = e.touches.length === 2
      const isPinching = lastPinchDistance.current !== null

      if(!isTwoFingerTouch || !isPinching) return

      e.preventDefault()

      const currentDistance = getPinchDistance(e.touches)
      const delta = currentDistance - lastPinchDistance.current!

      emitZoom(delta)

      lastPinchDistance.current = currentDistance
    }

    const handleTouchend = () => {
      lastPinchDistance.current = null
    }

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      const correctedDelta: number = e.deltaY * -1
      
      emitZoom(correctedDelta)
    }

    if (isTouchDevice) {
      element.addEventListener("touchstart", handleTouchstart)
      element.addEventListener("touchmove", handleTouchmove, { passive: false })
      element.addEventListener("touchend", handleTouchend)
    } else {
      document.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if(!element) return
      
      if (isTouchDevice) {
        element.removeEventListener("touchstart", handleTouchstart)
        element.removeEventListener("touchmove", handleTouchmove)
        element.removeEventListener("touchend", handleTouchend)
      } else {
        document.removeEventListener("wheel", handleWheel)
      }
    }
  }, [])
}

function getPinchDistance(touches: TouchList): number {
  const isTwoFingerTouch = touches.length === 2
  if (!isTwoFingerTouch) return 0

  const [touchA, touchB] = touches

  const dx = touchA!.clientX - touchB!.clientX
  const dy = touchA!.clientY - touchB!.clientY

  const pinchDistance: number = Math.hypot(dx, dy)
  return pinchDistance
}