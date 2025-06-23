import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Box } from '@mui/material';
import caro from '../../assets/Coyle.jpg';
import banner from '../../assets/Banner.jpeg';
import SocialButtons from '../ContactButtons.js';

export default function HomePage() {
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
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
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
            sx={{ fontSize: '36px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            Carolyn Coyle
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontSize: '24px', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
          >
            Wildlife Ecologist
          </Typography>
        </Box>
      </Box>

      {/* Main Content Section */}
      <Grid container spacing={3} justifyContent="center">
        {/* <Grid item xs={11}>
          <img
            src={icon}
            alt="warbler visiting a red currant flower"
            style={{ maxWidth: '100%', marginBottom: '20px' }}
          />
        </Grid> */}

        <Grid item xs={11}>
          <Grid container spacing={2} alignItems="center" justifyContent="space-between">
            <Grid item xs={11} md={3}>
              <img
                src={caro}
                alt="Carolyn Coyle with an Orange Crowned Warbler"
                style={{ maxWidth: '30vw', marginBottom: '20px' }}
              />
            </Grid>
            <Grid item xs={11} md={8}>
              <Typography
                sx={{ fontSize: '18px', textAlign: 'left', fontFamily: 'EB Garamond' }}
                gutterBottom
              >
                Welcome! My name is Carolyn Coyle, a Ph.D. candidate in the Graduate Degree Program
                in Ecology, housed in the Fish, Wildlife, and Conservation Biology Department at
                Colorado State University.
              </Typography>
              <Typography sx={{ fontSize: '16px', textAlign: 'left', fontFamily: 'EB Garamond' }}>
                My research centers on plant-animal interactions, with a special focus on songbirds
                as potential pollinators. With interests that span conservation biology,
                ornithology, and pollination ecology, I have developed a deep passion for
                understanding how birds contribute to ecosystem health, and a curiosity on how this
                may shift across urban gradients.
              </Typography>
              <Typography sx={{ fontSize: '16px', textAlign: 'left', fontFamily: 'EB Garamond' }}>
                As a dedicated conservation biologist and advocate for mental health in academia, I
                seek to blend rigorous science with community engagement, ensuring that my research
                has both local and global impact. Currently, I am seeking postdoctoral opportunities
                where I can apply my expertise in plant-animal interactions, bird ecology, wildlife
                conservation, and participatory science. I also use survey and interview methods,
                ecological modeling, and spatial ecology tools in my work, and seek to strengthen my
                quantitative and qualitative skills as a postdoctoral fellow.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={11}
          md={8}
          sx={{ justifyContent: 'center', textAlign: 'left', width: '100%', padding: '20px' }}
        >
          <SocialButtons />
        </Grid>
        <Grid
          item
          xs={11}
          md={8}
          sx={{ justifyContent: 'center', textAlign: 'left', width: '100%', padding: '20px' }}
        >
          {/* News Section */}
          <Typography
            variant="h5"
            gutterBottom
            textAlign={'left'}
            paddingLeft={'20px'}
            sx={{ fontFamily: 'EB Garamond' }}
          >
            News:
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>4/2025</strong> The Center for Collaborative Conservation has selected our
            project, “Nature in the City: Evaluating social and ecological outcomes of
            community-driven urban restoration projects in Fort Collins” for a CCC Fellowship.
            Carolyn is thrilled to be a part of the CCC Fellows Cohort 15!{' '}
            <a
              href="https://collaborativeconservation.org/learn/fellows-program/fellows-cohort-15/"
              target="_blank"
              rel="noreferrer"
            >
              Read more about the project and other Fellow’s work, here.
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>2/2025</strong> We are incredibly honored to have been awarded an NSF DEB Award
            for my dissertation work on songbird potential pollination.{' '}
            <a
              href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=2437737&HistoricalAwards=false"
              target="_blank"
              rel="noreferrer"
            >
              Read the award abstract here.
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>5/2024</strong> Great news! The Colorado State University Office of the Vice
            President for Researcher (OVPR) has selected me as a part of the VPR Graduate Fellowship
            Cohort!{' '}
            <a
              href="https://www.research.colostate.edu/vpr-graduate-fellowship-program/"
              target="_blank"
              rel="noreferrer"
            >
              Read more about this opportunity here.
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>5/2024</strong> I am honored to have received a Wilson Ornithological Society
            Student Research Grant! Thank you to WOS for supporting my research endeavors.{' '}
            <a
              href="https://wilsonsociety.org/2024/08/15/2024-wos-research-grant-recipients/"
              target="_blank"
              rel="noreferrer"
            >
              Read more here.
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>4/2024</strong> Thank you to the Pasadena Audubon Society for awarding my
            dissertation research a student research grant!{' '}
            <a href="https://pasadenaaudubon.org/grants" target="_blank" rel="noreferrer">
              Read more here.
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>3/2024</strong> I have received a Bloom-Hays Ecological Research Grant awarded
            by the Sea and Sage Audubon Society. Thank you for supporting my dissertation work!{' '}
            <a
              href="https://seaandsageaudubon.org/wp-content/uploads/GrantAward_Tattler_Longer-Article_040724.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Read more here.
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            <strong>2/2024</strong> I am honored that my dissertation research (SaP) has been
            featured in Dr. Jeff Ollerton’s new book: Birds and Flowers: An Intimate 50 Million Year
            Relationship.{' '}
            <a
              href="https://www.barnesandnoble.com/w/birds-and-flowers-jeff-ollerton/1143269095"
              target="_blank"
              rel="noreferrer"
            >
              Read more here.
            </a>
          </Typography>
        </Grid>

        {/* Links Section */}
        <Grid item xs={11} container justifyContent="center">
          <Link to="/" style={{ marginRight: '10px' }}>
            Home
          </Link>
          <Link to="/research" style={{ marginRight: '10px' }}>
            Research
          </Link>
          <Link to="/resume" style={{ marginRight: '10px' }}>
            My Resume
          </Link>
        </Grid>

        {/* <Grid item xs={11}>
          <Link to="/protocol">Pollen Getting Protocol</Link>
        </Grid> */}
      </Grid>
    </Box>
  );
}
