import { Box, Typography, Grid } from '@mui/material';
import banner from '../../assets/Banner.jpeg';
import { Link } from 'react-router-dom';
import exclusion from '../../assets/Exclusion.png';

export default function PastResearch() {
  return (
    <Box
      sx={{
        backgroundColor: 'rgb(218, 222, 203)',
        textAlign: 'center',
        height: '100vh',
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
            Past Research
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} justifyContent="center" textAlign={'left'}>
        <Grid item xs={11} md={9}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyItems="center"
          >
            <img
              src={exclusion}
              alt="Exclusion of birds and insects from vine maple blossoms"
              style={{
                maxWidth: '30vw',
                objectFit: 'cover',
                marginRight: '20px',
                paddingLeft: '20px',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: 'EB Garamond' }}>
                Past Research:
              </Typography>

              <Typography
                fontWeight={'bold'}
                variant="h5"
                marginBottom={'20px'}
                sx={{ fontFamily: 'EB Garamond' }}
              >
                Do Orange-crowned Warblers Pollinate Vine Maple?
              </Typography>
              <Typography sx={{ fontFamily: 'EB Garamond', fontSize: '1.2rem' }}>
                Could Orange-crowned Warblers contribute to pollination of vine maples? In
                2018-2019, inspired by and under the guidance of Dr. Aaron Liston, with help and
                support from Dr. Matt Betts and the Portland Garden Club (Kathleen R. Pamplin Fund),
                I sought to answer this question in collaboration with Dr. Dustin Gannon. Using
                various forms of netting, I excluded birds and/or insects from vine maple blossoms
                before, during, and after the flowering period. While our sample size and spatial
                distribution was not adequate to confirm these conclusions, we found that vine maple
                blossoms that did not have access to the full suite of pollinators had reduced seed
                weight and production. Interestingly, we did observe an Orange-crowned Warbler
                flower-foraging in our study trees during one of our observation periods. We
                additionally noted numerous Orange-crowned Warblers foraging in big-leaf maples
                located adjacent to the study site throughout the flowering period. This early work
                led me to pursue a National Science Foundation Graduate Research Fellowship,
                expanding this work geographically and to a larger suite of bird species.
              </Typography>

              <Typography sx={{ fontFamily: 'EB Garamond', fontSize: '1.2rem', fontWeight: '600' }}>
                Coyle, Carolyn M., and Dustin G. Gannon. &quot;Observations of orange-crowned
                warblers in vine maple.&quot; Northwestern Naturalist 102.1 (2021): 94-95.
                <a href="https://doi.org/10.1898/1051-1733-102.1.94">
                  https://doi.org/10.1898/1051-1733-102.1.94
                </a>
              </Typography>
            </div>
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
      </Grid>
    </Box>
  );
}
