import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Corsi from './pages/Corsi'
import Contatti from './pages/Contatti'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/corsi" element={<Corsi />} />
      <Route path="/contatti" element={<Contatti />} />
    </Routes>
  );
}

export default App