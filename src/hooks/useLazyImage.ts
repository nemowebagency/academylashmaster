import { useEffect, useRef, useState } from 'react';

interface UseLazyImageProps {
  src: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const useLazyImage = ({ src, loading = 'lazy', priority = false }: UseLazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
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
