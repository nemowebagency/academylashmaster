import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Corsi from './pages/Corsi'
import Contatti from './pages/Contatti'
import ChiSono from './pages/ChiSono'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/corsi" element={<Corsi />} />
      <Route path="/chi-sono" element={<ChiSono />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
  );
}

export default App