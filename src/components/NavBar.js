import { useState } from 'react';
import Navigation from './Navigation';
import burger from '../assets/burger.png';
// import Close from '../assets/close.png';
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

  function handleToggle() {
    setNavbarOpen(!navbarOpen);
  }

  const burgerStyle = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    width: '30px',
    height: '30px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    position: 'relative',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scaleX(0.8)' : 'scaleX(1)', // Apply transform based on hover state
  };

  const handleButtonHover = () => {
    iconStyle.transform = 'scaleX(0.8)';
  };

  return (
    <nav>
      <nav className="burger">
        <img
          src={require('../assets/SaPP_logo.png')}
          alt="Little Lemon logo"
          className="nav-image"
        />

        <button
          style={burgerStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleToggle}
        >
          <img style={iconStyle} src={burger} alt="Navigation Bar" className="burger" />
        </button>
      </nav>
      {/* <Navigation device="desktop" /> */}
      {navbarOpen ? <Navigation device="mobile" /> : ''}
    </nav>
  );
}
