import { useState } from 'react';
import Navigation from './Navigation';
import burger from '../assets/burger.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const burgerStyle = {
    position: 'fixed',
    top: '10px',
    right: '10px',
    width: '30px',
    height: '30px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: isMobile ? 'flex' : 'none',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  };

  const iconStyle = {
    width: '20px',
    height: '20px',
    position: 'relative',
    transition: 'transform 0.3s ease',
    transform: isHovered ? 'scaleX(0.8)' : 'scaleX(1)',
  };

  window.addEventListener('resize', handleResize);

  return (
    <div>
      <Navigation device={isMobile ? 'mobile' : 'desktop'} />
      <button
        style={burgerStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleToggle}
      >
        <img style={iconStyle} src={burger} alt="Navigation Bar" className="burger" />
      </button>
      {isMobile && navbarOpen && <Navigation device="mobile" />}
    </div>
  );
}
