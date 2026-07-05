import { joinClasses } from "../../../logic/index.js"
import type { Size } from "../../../types/index.js"
import "./blob.scss"

export interface BlobProps {
  size?: Size
  className?: string
  shape?: "a" | "b" | "c"
}

export function Blob ({ className, size = "md", shape = "a" }: BlobProps) {
  const blobClasses = joinClasses("blob", `blob--${size}`, className)

  if(shape === "a") {
    return (
      <svg viewBox="0 0 640 480" className={blobClasses}>
        <g>
          <path
            d="m0,0l0,480l640,0c-15.93,-43.98 -76.53,-120.14 -121.46,-146.45c-44.93,-26.31 -119.34,-37.52 -147.08,-50.36c-27.74,-12.84 -101.18,-23.4 -151.44,-132.27c-50.26,-108.87 -71.4,-114.22 -101.73,-130.83c-30.33,-16.61 -68.9,-18.1 -117.23,-21.08l-1.06,0.99z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }

  if(shape === "b") {
    return (
      <svg viewBox="196 0 444 250" className={blobClasses}>
        <g>
          <path
            d="m196.33,0c-0.9,22.44 35.51,86.84 104.36,106.67c68.85,19.83 88.08,-6.83 172.16,-3.5c84.08,3.33 115.66,47.83 167.15,146.83l0,-250l-443.67,0z"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }

  if(shape === "c") {
    return (
      <svg viewBox="0 910 1920 170" className={blobClasses}>
        <g>
          <path
            d="m1920,1080c-318,6.5 -1644.67,15.5 -1920,0c-275.33,-15.5 177.5,-75 268,-93c90.5,-18 183.67,-14.67 275,-15c91.33,-0.33 181.17,22.5 273,13c91.83,-9.5 187.33,-61.5 278,-70c90.67,-8.5 175.17,4.67 266,19c90.83,14.33 187.67,49.17 279,67c91.33,17.83 222.17,26.83 269,40c46.83,13.17 330,32.5 12,39c-318,6.5 -1644.67,15.5 -1920,0"
            fill="currentColor"
          />
        </g>
      </svg>
    )
  }
}