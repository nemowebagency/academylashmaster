// Image optimization configuration
export const IMAGE_CONFIG = {
  // Critical images that should be preloaded
  critical: [
    '/logo/LogoBianco.png',
    '/soggetto/person1.png'
  ],
  
  // Image sizes for responsive loading
  sizes: {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    thumbnail: '(max-width: 768px) 50vw, 25vw'
  },
  
  // Quality settings for different image types
  quality: {
    hero: 85,
    card: 80,
    thumbnail: 75
  },
  
  // Formats to use based on browser support
  formats: {
    modern: ['avif', 'webp'],
    fallback: 'jpg'
  }
};

// Helper function to generate responsive image sources
export const generateImageSources = (basePath: string, sizes: string[] = ['400', '800', '1200']) => {
  return sizes.map(size => ({
    src: `${basePath}?w=${size}&q=80`,
    width: parseInt(size),
    media: `(max-width: ${size}px)`
  }));
};

// Helper function to check if image should be lazy loaded
export const shouldLazyLoad = (src: string, priority: boolean = false) => {
  if (priority) return false;
  if (IMAGE_CONFIG.critical.includes(src)) return false;
  return true;
};
