import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navigation(props) {
  const [isScrolled, setIsScrolled] = useState(false);

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
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: isScrolled ? 'rgba(0,0,0, 0.8)' : 'transparent',
    boxShadow: isScrolled ? '0 2px 5px rgba(0, 0, 0, 0.1)' : 'none',
    zIndex: 9999,
    transition: 'background-color 0.3s ease',
  };

  const linkStyle = {
    textDecoration: 'none',
    margin: '0 10px',
    color: 'rgba(255,255,255)',
    fontWeight: 'bold',
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
      <div style={{ display: props.device === 'mobile' ? 'none' : 'flex' }}>
        <Link className="hover-effect" to="/" style={linkStyle}>
          Home
        </Link>
        <Link className="hover-effect" to="/research" style={linkStyle}>
          Research
        </Link>
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
