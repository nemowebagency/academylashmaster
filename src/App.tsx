import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Corsi from './pages/Corsi'
import Contatti from './pages/Contatti'
import ChiSono from './pages/ChiSono'
import PrivacyPolicy from './pages/PrivacyPolicy'
import CookiePolicy from './pages/CookiePolicy'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corsi" element={<Corsi />} />
        <Route path="/chi-sono" element={<ChiSono />} />
        <Route path="/contatti" element={<Contatti />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <WhatsAppButton />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}

export default App