import { useEffect, useRef, useState } from 'react';

interface UseLazyImageProps {
  src: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const useLazyImage = ({ src: _src, loading = 'eager', priority = false }: UseLazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(true); // Sempre true per disattivare lazy loading
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Lazy loading disattivato - tutte le immagini vengono caricate immediatamente
    setIsInView(true);
  }, [loading, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return {
    imgRef,
    isLoaded,
    isInView,
    handleLoad,
    shouldLoad: isInView
  };
};
