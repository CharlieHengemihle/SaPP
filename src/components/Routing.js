import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import SpeciesOfInterest from './pages/Species.js';
import GetInvolved from './pages/GetInvolved.js';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/about" element={<About />} />

      <Route path="/species" element={<SpeciesOfInterest />} />

      <Route path="/getInvolved" element={<GetInvolved />} />
    </Routes>
  );
}
