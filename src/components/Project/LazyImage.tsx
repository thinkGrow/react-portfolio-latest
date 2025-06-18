import { useState } from "react";

type LazyImageProps = {
  src: string;
  alt: string;
};

const LazyImage = ({ src, alt }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex h-full items-center justify-center">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`h-3/4 object-cover transition-all duration-700 ease-in-out ${
          loaded ? "blur-0" : "blur-md scale-105"
        }`}
      />
    </div>
  );
};

export default LazyImage;
