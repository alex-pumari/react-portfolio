import { useEffect, type RefObject } from "react"

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T | null>, handler: (event: MouseEvent | TouchEvent) => void
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const element = ref.current
      
      if (!element) return
      if (!element.contains(event.target as Node)) handler(event)
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () =>
      document.removeEventListener("mousedown", handleClickOutside)
  }, [ref, handler])
}