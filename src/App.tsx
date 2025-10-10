import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Corsi from './pages/Corsi'
import Contatti from './pages/Contatti'
import ChiSono from './pages/ChiSono'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/corsi" element={<Corsi />} />
        <Route path="/chi-sono" element={<ChiSono />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}

export default App