import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Resume from './pages/Resume.js';
import GetInvolved from './pages/GetInvolved.js';
import Research from './pages/Research.js';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/research" element={<Research />} />

      <Route path="/resume" element={<Resume />} />

      <Route path="/getInvolved" element={<GetInvolved />} />
    </Routes>
  );
}
