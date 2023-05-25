import { useState } from 'react';
import Navigation from './Navigation';
import burger from '../assets/burger.png';
// import Close from '../assets/close.png';
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <nav>
      <nav className="burger">
        <img
          src={require('../assets/SaPP_logo.png')}
          alt="Little Lemon logo"
          className="nav-image"
        />

        <button className="burger-icon" onClick={handleToggle}>
          <img src={burger} alt="Navigation Bar" />
        </button>
      </nav>
      <Navigation device="desktop" />
      {navbarOpen ? <Navigation device="mobile" /> : ''}
    </nav>
  );
}
