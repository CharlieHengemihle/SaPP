import { Box, Typography, Grid } from '@mui/material';
import { fundingSources } from '../contents.js';
import banner from '../../assets/Banner.jpeg';
import { Link } from 'react-router-dom';
import SapLogo from '../../assets/caro_art.png';
import stations from '../../assets/stations.png';
import swab from '../../assets/swab.gif';

export default function DissertationWork() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(218, 222, 203)',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '300px',
          marginBottom: '20px',
        }}
      >
        <img
          src={banner}
          alt="Orange Crowned Warbler in prunus species"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
          }}
        >
          <Typography variant="h1" gutterBottom sx={{ fontFamily: 'EB Garamond' }}>
            Dissertation Research
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          maxWidth: '75vw',
          justifyContent: 'center',
          textAlign: 'center',
          justifySelf: 'center',
        }}
      >
        <img
          src={SapLogo}
          alt="SaP Logo"
          style={{
            height: '7rem',
            width: 'auto',
          }}
        />

        <Typography variant="h3" gutterBottom sx={{ fontFamily: 'EB Garamond' }}>
          Dissertation Work: Songbirds as Pollinators (SaP) Project
        </Typography>
      </div>
      <Grid container spacing={2} justifyContent="center" textAlign={'left'}>
        <Grid item xs={11} md={9}>
          <Typography variant="h5" sx={{ fontFamily: 'EB Garamond' }}>
            <strong>Research Team:</strong>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond', fontSize: '1.25rem', fontWeight: '500' }}>
            Conducted under P.I. Dr. Liba Pejchar, in collaboration with Dr. Caitlin Wells, Abigail
            Feuka, Dr. Seth Davis, and Dr. Xiaoping Li.
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: 'EB Garamond', fontSize: '1.2rem' }}>
            <strong>Collaboration:</strong>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond', fontSize: '1.2rem' }}>
            Partnering with the Institute for Bird Populations (IBP) Monitoring Avian Production and
            Survival (MAPS) stations, as well as independent banding groups, we received pollen
            swabs from thousands of birds across the western U.S. and British Columbia. (put map
            here)
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: 'EB Garamond' }}>
            <strong>Current Research Focus:</strong>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>Bird Characteristics & Pollen:</strong> What individual bird traits (e.g., sex,
            age) or environmental factors (e.g., date of first flowering) are linked to the presence
            of pollen on songbirds?
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>Flower Characteristics & Bird Preferences:</strong> Are particular plant
            morphological characteristics (e.g., flower color, shape) associated with a higher
            probability of flower-foraging and pollen-carrying by songbirds? (
            <a
              href="https://www.inaturalist.org/observations/182423257"
              target="_blank"
              rel="noreferrer"
            >
              Image 1 (pic 3)
            </a>
            {' | '}
            <a
              href="https://www.inaturalist.org/observations/212152059"
              target="_blank"
              rel="noreferrer"
            >
              Image 2 (pic 2)
            </a>
            )
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>Species Richness & Network Redundancy:</strong> Does species richness or the
            relative abundance of functional groups (songbirds vs. hummingbirds) contribute to
            network indices associated with redundancy, in bird-flower networks?
          </Typography>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            <img
              src={stations}
              alt="A map of the banding station locations participating in this project"
              style={{ maxWidth: '30vw', objectFit: 'cover' }}
            />
            <img
              src={swab}
              alt="Banders at Bear Divide Banding Station swab birds for pollen. Gif courtesy of Bear Divide Banding Station"
              style={{ maxWidth: '30vw', objectFit: 'cover' }}
            />
          </div>

          <Typography
            variant="h5"
            gutterBottom
            paddingTop={'15px'}
            sx={{ fontFamily: 'EB Garamond' }}
          >
            Funding for this work is generously provided by:
          </Typography>

          <Typography component="p" sx={{ fontStyle: 'italic', fontFamily: 'EB Garamond' }}>
            {fundingSources.join(', ')}
          </Typography>

          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            For more information about the project, visit{' '}
            <a href="https://carolyncoyle.wixsite.com/sapproject">here</a>.
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={11} container justifyContent="center">
        <Link to="/" style={{ marginRight: '10px' }}>
          Home
        </Link>
        <Link to="/research/dissertation" style={{ marginRight: '10px' }}>
          Dissertation Work (SaP Project)
        </Link>
        <Link to="/research/participatory-science" style={{ marginRight: '10px' }}>
          Participatory Science
        </Link>
        <Link to="/research/past" style={{ marginRight: '10px' }}>
          Past Research
        </Link>
        <Link to="/resume" style={{ marginRight: '10px' }}>
          My Resume
        </Link>
      </Grid>
    </Box>
  );
}
