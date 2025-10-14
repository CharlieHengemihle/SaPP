import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import Resume from './pages/Resume.js';
import GetInvolved from './pages/GetInvolved.js';
import Research from './pages/Research.js';
import DissertationWork from './pages/DissertationWork.js';
import ParticipatoryScience from './pages/ParticipatoryScience.js';
import PastResearch from './pages/PastResearch.js';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/research" element={<Research />} />
      <Route path="/research/dissertation" element={<DissertationWork />} />
      <Route path="/research/participatory-science" element={<ParticipatoryScience />} />
      <Route path="/research/past" element={<PastResearch />} />

      <Route path="/resume" element={<Resume />} />

      <Route path="/getInvolved" element={<GetInvolved />} />
    </Routes>
  );
}
