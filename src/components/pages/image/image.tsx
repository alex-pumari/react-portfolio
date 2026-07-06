import { useState } from "react";
import { joinClasses } from "../../../logic/join-classes.js";
import "./image.scss";

interface ImageProps {
  src: string
  alt: string
  title?: string
  className?: string
}

export function Image({ src, alt, title, className }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={joinClasses("image__container", className)}>
      {!isLoaded && <span className="image__label">Loading...</span>}
      <img
        className={joinClasses("image", isLoaded && "loaded")}
        src={src}
        alt={alt}
        title={title}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}