import { Box, Typography, Grid } from '@mui/material';
import { fundingSources } from '../contents.js';
import banner from '../../assets/Banner.jpeg';
import { Link } from 'react-router-dom';
import SapLogo from '../../assets/SaPP_logo.png';
import observations from '../../assets/observations.png';
import ccc from '../../assets/CCC.png';
import birds from '../../assets/birds.png';
import stations from '../../assets/stations.png';
import swab from '../../assets/swab.gif';

export default function Research() {
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
            Research
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
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            Conducted under P.I. Dr. Liba Pejchar, in collaboration with Dr. Caitlin Wells, Teia
            Schweizer, Dr. Seth Davis, and Dr. Xiaoping Li.
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: 'EB Garamond' }}>
            <strong>Collaboration:</strong>
          </Typography>
          <Typography sx={{ fontFamily: 'EB Garamond' }}>
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

          <Typography
            variant="h5"
            gutterBottom
            paddingTop={'15px'}
            fontWeight={'bold'}
            sx={{ fontFamily: 'EB Garamond' }}
          >
            Using Participatory Science to Explore Bird-Flower Interactions
          </Typography>

          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            In collaboration with Dr. Liba Pejchar and Morgan Strickrod (Sol Botany), we are
            investigating songbird-flower interactions using iNaturalist, for two California Jepson
            Floristic Provinces{' '}
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
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
            <img
              src={observations}
              alt="Map showing locations of observations reported on iNaturalist"
              style={{ maxWidth: '30vw', objectFit: 'cover' }}
            />
            <img
              src={birds}
              alt="Images of birds flower foraging from iNaturalist"
              style={{ width: '30vw', objectFit: 'cover' }}
            />
          </div>

          <Typography
            fontWeight={'bold'}
            variant="h5"
            gutterBottom
            sx={{ fontFamily: 'EB Garamond' }}
          >
            Graduate Student Mental Health Access
          </Typography>

          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            Mental health in graduate studies is a critically important issue, as the pressures of
            academia can disproportionately affect students with marginalized identities, amplifying
            the need for accessible mental health resources and support systems. I am a co-leader on
            a survey-based project exploring barriers to accessing mental health for graduate
            students in life sciences. Our data collection is complete and we have submitted a
            manuscript that is in review.
          </Typography>

          <Typography
            fontWeight={'bold'}
            variant="h5"
            gutterBottom
            sx={{ fontFamily: 'EB Garamond' }}
          >
            Nature in the City: Evaluating social and ecological outcomes of community-driven urban
            restoration projects in Fort Collins
          </Typography>
          <img
            src={ccc}
            alt="Center for Collaborative Conservation logo"
            style={{ maxWidth: '65vw', objectFit: 'cover' }}
          />

          <Typography sx={{ fontFamily: 'EB Garamond' }}>
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

          <Typography variant="h4" gutterBottom sx={{ fontFamily: 'EB Garamond' }}>
            Past Research:
          </Typography>

          <Typography
            fontWeight={'bold'}
            variant="h5"
            gutterBottom
            sx={{ fontFamily: 'EB Garamond' }}
          >
            Do Orange-crowned Warblers Pollinate Vine Maple?
          </Typography>

          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            Could Orange-crowned Warblers contribute to pollination of vine maples? In 2018-2019,
            inspired by and under the guidance of Dr. Aaron Liston, with help and support from Dr.
            Matt Betts and the Portland Garden Club (Kathleen R. Pamplin Fund), I sought to answer
            this question in collaboration with Dr. Dustin Gannon. Using various forms of netting, I
            excluded birds and/or insects from vine maple blossoms before, during, and after the
            flowering period. While our sample size and spatial distribution was not adequate to
            confirm these conclusions, we found that vine maple blossoms that did not have access to
            the full suite of pollinators had reduced seed weight and production. Interestingly, we
            did observe an Orange-crowned Warbler flower-foraging in our study trees during one of
            our observation periods. We additionally noted numerous Orange-crowned Warblers foraging
            in big-leaf maples located adjacent to the study site throughout the flowering period.
            This early work led me to pursue a National Science Foundation Graduate Research
            Fellowship, expanding this work geographically and to a larger suite of bird species.
          </Typography>

          <Typography sx={{ fontFamily: 'EB Garamond' }}>
            Coyle, Carolyn M., and Dustin G. Gannon. &quot;Observations of orange-crowned warblers
            in vine maple.&quot; Northwestern Naturalist 102.1 (2021): 94-95.
            <a href="https://doi.org/10.1898/1051-1733-102.1.94">
              https://doi.org/10.1898/1051-1733-102.1.94
            </a>
          </Typography>
        </Grid>
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
      </Grid>
    </Box>
  );
}
