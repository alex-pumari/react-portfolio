interface GetNextInRangeOptions {
  value: number
  min: number
  max: number
  step?: number
  wrap?: boolean
}

export function getNextInRange({
  value,
  min,
  max,
  step = 1,
  wrap = false,
}: GetNextInRangeOptions): number {
  const next = value + step

  if (!wrap) {
    if (next > max) return max
    if (next < min) return min
    
    return next
  }

  if (next > max) return min
  if (next < min) return max

  return next
}