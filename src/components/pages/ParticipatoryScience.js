import { Box, Typography, Grid } from '@mui/material';
import banner from '../../assets/Banner.jpeg';
import { Link } from 'react-router-dom';
import observations from '../../assets/observations.png';
import ccc from '../../assets/CCC.png';
import birds from '../../assets/birds.png';
import INaturalistWidget from '../INaturalistWidget.js';

export default function ParticipatoryScience() {
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
          <Typography
            variant="h1"
            gutterBottom
            paddingTop={'40px'}
            sx={{ fontFamily: 'EB Garamond' }}
          >
            Community Centered Work
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} justifyContent="center" textAlign={'left'}>
        <Grid item xs={11} md={9}>
          <Typography
            variant="h4"
            gutterBottom
            paddingTop={'15px'}
            fontWeight={'bold'}
            sx={{ fontFamily: 'EB Garamond' }}
          >
            Using Participatory Science to Explore Bird-Flower Interactions
          </Typography>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '30px',
              alignItems: 'stretch',
              minHeight: '500px',
            }}
          >
            <div
              style={{
                flex: '1',
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'EB Garamond',
                  marginBottom: '20px',
                  fontSize: '1.5rem',
                  padding: '20px 20px 0 20px',
                }}
              >
                In collaboration with Dr. Liba Pejchar and Morgan Strickrod (Sol Botany), we are
                investigating songbird-flower interactions using iNaturalist, for two California
                Jepson Floristic Provinces{' '}
                <a
                  href="https://ucjeps.berkeley.edu/eflora/filter_keys.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  link
                </a>
                . We hope to create plant-pollinator networks for these two adjacent regions to
                highlight participatory science as an exciting tool to explore interactions.
              </Typography>

              <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
                <img
                  src={observations}
                  alt="Map showing locations of observations reported on iNaturalist"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    marginBottom: '20px',
                  }}
                />
              </div>
            </div>

            <div
              style={{
                flex: '1',
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <INaturalistWidget />
            </div>
          </div>

          <Typography
            fontWeight={'bold'}
            variant="h4"
            gutterBottom
            sx={{ fontFamily: 'EB Garamond', paddingTop: '20px' }}
          >
            Graduate Student Mental Health Access
          </Typography>

          <Typography sx={{ fontFamily: 'EB Garamond', fontSize: '1.2rem' }}>
            Mental health in graduate studies is a critically important issue, as the pressures of
            academia can disproportionately affect students with marginalized identities, amplifying
            the need for accessible mental health resources and support systems. I am a co-leader on
            a survey-based project exploring barriers to accessing mental health for graduate
            students in life sciences. Our data collection is complete and we have submitted a
            manuscript that is in review.
          </Typography>

          <Typography
            fontWeight={'bold'}
            variant="h4"
            gutterBottom
            sx={{ fontFamily: 'EB Garamond', paddingTop: '20px' }}
          >
            Nature in the City: Evaluating social and ecological outcomes of community-driven urban
            restoration projects in Fort Collins
          </Typography>

          <Typography sx={{ fontFamily: 'EB Garamond', fontSize: '1.2rem' }}>
            Mid-sized cities, such as Fort Collins, are often expanding more rapidly than large
            metropolitan areas, but the paths forward for sustaining biodiversity for nature and
            people in these spaces are less well understood. In recognition that a growing
            population could lead to the loss of green space, community concern prompted the City of
            Fort Collins to launch the Nature in the City (NIC) Program which focuses on increasing
            connectivity, fostering stewardship, and providing access to experiences and functional
            habitat for people, wildlife, and plants. Our team&apos;s goal is to understand what
            contributes to project success and longevity, identify coverage gaps, and evaluate
            biodiversity outcomes to ensure the NIC program&apos;s long-term effectiveness. We
            further aim to explore how community and city perspectives on project success align or
            diverge.
          </Typography>
          <img
            src={ccc}
            alt="Center for Collaborative Conservation logo"
            style={{ maxWidth: '65vw', objectFit: 'cover' }}
          />
        </Grid>
        <Grid item xs={11} container justifyContent="center">
          <Link to="/" style={{ marginRight: '10px' }}>
            Home
          </Link>
          <Link to="/research/dissertation" style={{ marginRight: '10px' }}>
            Dissertation Work
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
      </Grid>
    </Box>
  );
}
