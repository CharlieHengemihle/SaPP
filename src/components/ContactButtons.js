import { Button, IconButton, Box } from '@mui/material';
import { Email } from '@mui/icons-material';
import TwitterIcon from '@mui/icons-material/Twitter';
import inaturalist from '../assets/inaturalist.png';

export default function SocialButtons() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:carolyncoyle@outlook.com';
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: 2,
        padding: 2,
        alignItems: 'center',
      }}
    >
      <IconButton
        color="primary"
        aria-label="Twitter"
        onClick={() => window.open('https://twitter.com/yourclient', '_blank')}
      >
        <TwitterIcon fontSize="large" />
      </IconButton>
      <Button variant="contained" color="primary" startIcon={<Email />} onClick={handleEmailClick}>
        Contact Me
      </Button>

      <IconButton
        // color="primary"
        aria-label="iNaturalist"
        onClick={() => window.open('https://inaturalist.org/observations?user_id=coylec', '_blank')}
        sx={{ height: '55px' }}
      >
        <img
          src={inaturalist}
          alt={'the inaturalist logo'}
          style={{ maxHeight: '100%', objectFit: 'contain' }}
        />
      </IconButton>
    </Box>
  );
}
