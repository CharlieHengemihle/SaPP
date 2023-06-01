import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../assets/SaPP_logo.png';

export default function HomePage() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgb(218, 222, 203)',
  };

  const imageStyle = {
    maxWidth: '100%',
    marginBottom: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const subheadingStyle = {
    fontSize: '18px',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    marginBottom: '20px',
  };

  const linkContainerStyle = {
    marginBottom: '20px',
  };

  const linkStyle = {
    marginRight: '10px',
  };

  return (
    <div style={containerStyle}>
      <img src={icon} alt="warbler visiting a red currant flower" style={imageStyle} />
      <h1 style={headingStyle}>Welcome to the SaP Project</h1>
      <h2 style={subheadingStyle}>Songbirds as Pollinators</h2>
      <p style={paragraphStyle}>
        Every spring, millions of songbirds leave their wintering grounds and migrate north to their
        breeding range. These birds provide a variety of benefits to nature and people such as pest
        control and seed dispersal, as well as aesthetic beauty and recreational opportunities.
        Another service that these birds may provide is pollination: however, the nature and
        frequency of pollination by North American migrants has not been systematically
        investigated, until now. Though many songbirds may forage in flowers and provide pollination
        services as a result; tanagers (genus Piranga), new world orioles (genus Icterus), and
        wood-warblers (family Parulidae) have frequently been observed and described in literature
        foraging in flowers and hummingbird feeders across North America.
      </p>
      <p style={paragraphStyle}>
        By collaborating with bird banders across western North America and nature enthusiasts
        across the globe, we will work to understand the role of flower foraging songbirds in
        pollination systems.
      </p>
      <div style={linkContainerStyle}>
        <Link to="/About" style={linkStyle}>
          Learn More
        </Link>
        <Link to="/Goals" style={linkStyle}>
          Goals & Motivation
        </Link>
        <Link to="/getInvolved" style={linkStyle}>
          Get Involved
        </Link>
      </div>
      <Link to="/protocol">Pollen Getting Protocol</Link>
    </div>
  );
}
