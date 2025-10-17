import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navigation(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isResearchHovered, setIsResearchHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: isScrolled ? 'rgba(0,0,0, 0.8)' : 'transparent',
    boxShadow: isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
    zIndex: 99,
    transition: 'background-color 0.3s ease',
  };

  const linkStyle = {
    textDecoration: 'none',
    margin: '0 10px',
    color: 'rgba(255,255,255)',
    fontWeight: 'bold',
  };

  const mobileMenuStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

  const dropdownContainerStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    backgroundColor: 'rgba(0,0,0, 0.9)',
    minWidth: '200px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    zIndex: 100,
    display: isResearchHovered ? 'flex' : 'none',
    flexDirection: 'column',
    paddingTop: '5px',
  };

  const dropdownLinkStyle = {
    ...linkStyle,
    display: 'block',
    padding: '10px 15px',
    margin: '0',
  };

  // const logoStyle = {
  //   maxHeight: '40px',
  // };

  return (
    <nav style={menuStyle}>
      {/* <Link
        to="/"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <img
          src={require('../assets/SaPP_logo.png')}
          alt="Songbirds as Pollinators Project Logo"
          style={logoStyle}
        />
        <Typography style={linkStyle}> Carolyn Coyle </Typography>
      </Link> */}
      <div style={props.device === 'mobile' ? mobileMenuStyle : undefined}>
        <Link className="hover-effect" to="/" style={linkStyle}>
          Home
        </Link>
        <div
          style={dropdownContainerStyle}
          onMouseEnter={() => setIsResearchHovered(true)}
          onMouseLeave={() => setIsResearchHovered(false)}
        >
          <Link className="hover-effect" style={linkStyle}>
            Research
          </Link>
          <div style={dropdownMenuStyle}>
            <Link className="hover-effect" to="/research/dissertation" style={dropdownLinkStyle}>
              Dissertation Research (SaP Project)
            </Link>
            <Link
              className="hover-effect"
              to="/research/participatory-science"
              style={dropdownLinkStyle}
            >
              Community Centered Work
            </Link>
            <Link className="hover-effect" to="/research/past" style={dropdownLinkStyle}>
              Past Research
            </Link>
          </div>
        </div>
        <Link className="hover-effect" to="/resume" style={linkStyle}>
          Resume
        </Link>
        {/* <Link className="hover-effect" to="/getInvolved" style={linkStyle}>
          Get Involved
        </Link> */}
      </div>
    </nav>
  );
}
