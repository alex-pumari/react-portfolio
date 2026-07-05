import { attachEvents, detachEvents } from "./draggable-events.js"
import { useEffect, useRef, type RefObject } from "react"
import { calculateDelta, calculateNewPosition, createInitialState } from "./logic/index.js"
import { getPointerCoords, isMultiTouch, isSingleTouch, isTouchEvent } from "./utils/index.js"
import { applyDraggingStyles, getTransform, resetDraggingStyles, setTransform } from "./dom/index.js"
import type { DragState } from "./drag-state.js"

interface UseDraggableOptions<DraggableElement extends HTMLElement> {
  ref?: RefObject<DraggableElement>
  isTouchDevice: boolean
}

export function useDraggable<DraggableElement extends HTMLElement = HTMLElement>(
  { ref, isTouchDevice }: UseDraggableOptions<DraggableElement>
) {
  const internalRef = useRef<DraggableElement | null>(null)
  const elementRef = ref ?? internalRef

  const state = useRef<DragState>(createInitialState())

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleStart = (event: TouchEvent | MouseEvent) => {
      if (isMultiTouch(event)) return stop()

      const pointer = getPointerCoords(event)
      const transform = getTransform(element)

      state.current.isDragging = true
      state.current.startPointer = pointer
      state.current.startElement = { x: transform.position.x, y: transform.position.y }
    }

    const handleMove = (event: TouchEvent | MouseEvent) => {
      if (!state.current.isDragging) return

      if (isTouchEvent(event)) event.preventDefault()

      const currentCoords = getPointerCoords(event)
      const delta = calculateDelta(currentCoords, state.current.startPointer)
      const nextCoords = calculateNewPosition(state.current.startElement, delta)

      const scale = getTransform(element).scale
      setTransform(element, { position: nextCoords, scale })

      applyDraggingStyles(element)
    }

    const handleEnd = (event: TouchEvent | MouseEvent) => {
      if (isTouchDevice && isSingleTouch(event)) {
        const pointer = getPointerCoords(event)

        state.current.startPointer = pointer
        state.current.startElement = getTransform(element).position
        state.current.isDragging = true
        return
      }

      stop()
    }

    const stop = () => {
      state.current.isDragging = false
      resetDraggingStyles(element)
    }

    attachEvents({
      element,
      isTouchDevice,
      handlers: {
        onStart: handleStart,
        onMove: handleMove,
        onEnd: handleEnd,
      }
    })

    return () => detachEvents({
      element,
      isTouchDevice,
      handlers: {
        onStart: handleStart,
        onMove: handleMove,
        onEnd: handleEnd,
      }
    })
  }, [elementRef, isTouchDevice])

  return elementRef
}