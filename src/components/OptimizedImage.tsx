import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'eager', // Disattivato lazy loading di default
  priority = false,
  width,
  height,
  sizes
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="eager" // Forza eager loading per tutte le immagini
      decoding="async"
      width={width}
      height={height}
      sizes={sizes}
      style={{
        contentVisibility: 'auto',
        containIntrinsicSize: width && height ? `${width}px ${height}px` : undefined
      }}
    />
  );
};

export default OptimizedImage;
