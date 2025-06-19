// src/components/Project/LazyImage.tsx

type LazyImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`rounded-md ${className || ""}`}
    />
  );
};

export default LazyImage;
