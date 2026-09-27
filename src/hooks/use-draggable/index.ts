import { attachEvents, detachEvents } from "./draggable-events.js";
import { useEffect, useRef, type RefObject } from "react";
import { calculateDelta, calculateNewPosition, createInitialState } from "./logic/index.js";
import { getPointerCoords, isMultiTouch, isSingleTouch, isTouchEvent } from "./utils/index.js";
import { applyDraggingStyles, getAncestorScale, getTransform, resetDraggingStyles, setTransform } from "./dom/index.js";
import type { DragState } from "./drag-state.js";

interface UseDraggableOptions {
  isTouchDevice: boolean;
  enabled?: boolean;
}

export function useDraggable<
  HandleElement extends HTMLElement = HTMLElement,
  TargetElement extends HTMLElement = HTMLElement
>(
  refs: {
    handle: RefObject<HandleElement | null>;
    target: RefObject<TargetElement | null>;
  },
  { isTouchDevice, enabled = true }: UseDraggableOptions
) {
  const state = useRef<DragState>(createInitialState());

  useEffect(() => {
    if (!enabled) return;

    const handleElement = refs.handle.current;
    const targetElement = refs.target.current;
    if (!handleElement || !targetElement) return;

    const handleStart = (event: TouchEvent | MouseEvent) => {
      if (isMultiTouch(event)) return stop();

      const pointer = getPointerCoords(event);
      const transform = getTransform(targetElement);

      state.current.isDragging = true;
      state.current.startPointer = pointer;
      state.current.startElement = { x: transform.position.x, y: transform.position.y };
    };

    const handleMove = (event: TouchEvent | MouseEvent) => {
      if (!state.current.isDragging) return;

      if (isTouchEvent(event)) event.preventDefault();

      const currentCoords = getPointerCoords(event);
      const delta = calculateDelta(currentCoords, state.current.startPointer);
      const zoomScale = getAncestorScale(targetElement);
      const adjustedDelta = {
        x: delta.x / zoomScale,
        y: delta.y / zoomScale,
      };
      const nextCoords = calculateNewPosition(state.current.startElement, adjustedDelta);

      const scale = getTransform(targetElement).scale;
      setTransform(targetElement, { position: nextCoords, scale });

      applyDraggingStyles(targetElement);
    };

    const handleEnd = (event: TouchEvent | MouseEvent) => {
      if (isTouchDevice && isSingleTouch(event)) {
        const pointer = getPointerCoords(event);

        state.current.startPointer = pointer;
        state.current.startElement = getTransform(targetElement).position;
        state.current.isDragging = true;
        return;
      }

      stop();
    };

    const stop = () => {
      state.current.isDragging = false;
      resetDraggingStyles(targetElement);
    };

    attachEvents({
      element: handleElement,
      isTouchDevice,
      handlers: {
        onStart: handleStart,
        onMove: handleMove,
        onEnd: handleEnd,
      }
    });

    return () => detachEvents({
      element: handleElement,
      isTouchDevice,
      handlers: {
        onStart: handleStart,
        onMove: handleMove,
        onEnd: handleEnd,
      }
    });
  }, [refs.handle, refs.target, isTouchDevice, enabled]);
}