import { Link } from 'react-router-dom';

export default function Navigation(props) {
  const menuStyle = {
    position: 'fixed',
    top: '40%',
    right: '0',
    transform: 'translateY(-100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    width: 'fit-content',
    maxWidth: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    zIndex: 9999,
  };

  const linkStyle = {
    textDecoration: 'none',
    margin: '5px 0',
  };

  return (
    <menu className={`navbar-menu ${props.device}`} style={menuStyle}>
      {props.device === 'mobile' ? (
        ''
      ) : (
        <Link to="/">
          <img
            src={require('../assets/SaPP_logo.png')}
            alt="Songbirds as Pollinators Project Logo"
            className="nav-image"
          ></img>
        </Link>
      )}
      <Link className="hover-effect" to="/" style={linkStyle}>
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about" style={linkStyle}>
        <h1>About</h1>
      </Link>
      <Link className="hover-effect" to="/species" style={linkStyle}>
        <h1>Species Of Interest</h1>
      </Link>
      <Link className="hover-effect" to="/getInvolved" style={linkStyle}>
        <h1>Get Involved</h1>
      </Link>
    </menu>
  );
}
