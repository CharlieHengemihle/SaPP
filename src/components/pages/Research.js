import { Box, Typography, Grid } from '@mui/material';
import { fundingSources } from '../contents.js';
import banner from '../../assets/Banner.jpeg';

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
          <Typography variant="h1" gutterBottom>
            Research
          </Typography>
        </Box>
      </Box>
      <Typography variant="h3" gutterBottom>
        Dissertation Work: Songbirds as Pollinators (SaP) Project
      </Typography>
      <Grid container spacing={2} justifyContent="center" textAlign={'left'}>
        <Grid item xs={12} md={8}>
          <Typography variant="h5">
            <strong>Research Team:</strong>
          </Typography>
          <Typography>
            Conducted under P.I. Dr. Liba Pejchar, in collaboration with Dr. Caitlin Wells, Teia
            Schweizer, Dr. Seth Davis, and Dr. Xiaoping Li.
          </Typography>

          <Typography variant="h5">
            <strong>Collaboration:</strong>
          </Typography>
          <Typography>
            Partnering with the Institute for Bird Populations (IBP) Monitoring Avian Production and
            Survival (MAPS) stations, as well as independent banding groups, we received pollen
            swabs from thousands of birds across the western U.S. and British Columbia. (put map
            here)
          </Typography>

          <Typography variant="h5">
            <strong>Current Research Focus:</strong>
          </Typography>
          <Typography>
            <strong>Bird Characteristics & Pollen:</strong> What individual bird traits (e.g., sex,
            age) or environmental factors (e.g., date of first flowering) are linked to the presence
            of pollen on songbirds?
          </Typography>
          <Typography>
            <strong>Flower Characteristics & Bird Preferences:</strong> Are particular plant
            morphological characteristics (e.g., flower color, shape) associated with a higher
            probability of flower-foraging and pollen-carrying by songbirds? (Image 1 (pic 3) |
            Image 2 (pic 2))
          </Typography>
          <Typography>
            <strong>Species Richness & Network Redundancy:</strong> Does species richness or the
            relative abundance of functional groups (songbirds vs. hummingbirds) contribute to
            network indices associated with redundancy, in bird-flower networks?
          </Typography>

          <Typography variant="h5" gutterBottom paddingTop={'15px'}>
            Funding for this work is generously provided by:
          </Typography>

          <Typography component="p" sx={{ fontStyle: 'italic' }}>
            {fundingSources.join(', ')}
          </Typography>

          <Typography>
            For more information about the project, visit{' '}
            <a href="https://carolyncoyle.wixsite.com/sapproject">here</a>.
          </Typography>

          <Typography>Using Participatory Science to Explore Bird-Flower Interactions</Typography>

          <Typography>
            In collaboration with Dr. Liba Pejchar and Morgan Strickrod (Sol Botany), we are
            investigating songbird-flower interactions using iNaturalist, for two California Jepson
            Floristic Provinces{' '}
            <a href="https://ucjeps.berkeley.edu/eflora/filter_keys.html">link</a>. We hope to
            create plant-pollinator networks for these two adjacent regions to highlight
            participatory science as an exciting tool to explore interactions.
          </Typography>

          <Typography variant="h4" gutterBottom>
            Graduate Student Mental Health Access
          </Typography>

          <Typography>
            Mental health in graduate studies is a critically important issue, as the pressures of
            academia can disproportionately affect students with marginalized identities, amplifying
            the need for accessible mental health resources and support systems. I am a co-leader on
            a survey-based project exploring barriers to accessing mental health for graduate
            students in life sciences. Our data collection is complete and we are currently
            preparing our findings for publication.
          </Typography>

          <Typography variant="h4" gutterBottom>
            Past Research:
          </Typography>

          <Typography variant="h5" gutterBottom>
            Do Orange-crowned Warblers Pollinate Vine Maple?
          </Typography>

          <Typography>
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

          <Typography>
            Coyle, Carolyn M., and Dustin G. Gannon. &quot;Observations of orange-crowned warblers
            in vine maple.&quot; Northwestern Naturalist 102.1 (2021): 94-95.
            <a href="https://doi.org/10.1898/1051-1733-102.1.94">
              https://doi.org/10.1898/1051-1733-102.1.94
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
