import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolla sempre in cima quando cambia la route
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Questo componente non renderizza nulla
};

export default ScrollToTopOnRouteChange;
