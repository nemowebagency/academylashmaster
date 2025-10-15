import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load non-critical components
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

// Critical components loaded immediately
import Home from './pages/Home';
import Corsi from './pages/Corsi';
import ChiSono from './pages/ChiSono';
import Contatti from './pages/Contatti';
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import DebugInfo from './components/DebugInfo';

// Loading component for lazy loaded routes
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-white text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
      <p>Caricamento...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ScrollToTopOnRouteChange />
      <Routes>
        {/* Critical routes - loaded immediately */}
        <Route path="/" element={<Home />} />
        <Route path="/corsi" element={<Corsi />} />
        <Route path="/chi-sono" element={<ChiSono />} />
        <Route path="/contatti" element={<Contatti />} />
        
        {/* Non-critical routes - lazy loaded */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <WhatsAppButton />
      <ScrollToTop />
      <CookieBanner />
      <DebugInfo />
    </Suspense>
  );
}

export default App;