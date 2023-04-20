import { Routes, Route } from "react-router-dom";


export default function Routing() {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
  
        <Route path="/about" element={<About />} />
  
        <Route path="/species" element={<SpeciesOfInterest />} />
  
        <Route path="/getinvolved" element={<GetInvolved />} />
      </Routes>
    );
  }