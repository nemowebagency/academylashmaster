import { useEffect, useState } from 'react';

interface UseCriticalResourcesProps {
  onCriticalLoaded?: () => void;
  onAllLoaded?: () => void;
}

export const useCriticalResources = ({ 
  onCriticalLoaded, 
  onAllLoaded 
}: UseCriticalResourcesProps = {}) => {
  const [criticalLoaded, setCriticalLoaded] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  useEffect(() => {
    // Check if critical resources are loaded
    const checkCriticalResources = () => {
      const criticalImages = [
        '/logo/LogoBianco.png',
        '/soggetto/person1.png',
        '/soggetto/corsi.jpg'
      ];

      const loadedImages = criticalImages.filter(src => {
        const img = new Image();
        img.src = src;
        return img.complete;
      });

      if (loadedImages.length === criticalImages.length) {
        setCriticalLoaded(true);
        onCriticalLoaded?.();
      }
    };

    // Check if all resources are loaded
    const checkAllResources = () => {
      if (document.readyState === 'complete') {
        setAllLoaded(true);
        onAllLoaded?.();
      }
    };

    // Initial check
    checkCriticalResources();
    checkAllResources();

    // Listen for load events
    window.addEventListener('load', checkAllResources);
    
    // Check periodically for critical resources
    const interval = setInterval(checkCriticalResources, 100);

    return () => {
      window.removeEventListener('load', checkAllResources);
      clearInterval(interval);
    };
  }, [onCriticalLoaded, onAllLoaded]);

  return {
    criticalLoaded,
    allLoaded,
    loadingProgress: criticalLoaded ? (allLoaded ? 100 : 50) : 0
  };
};
