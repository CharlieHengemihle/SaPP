import { Button, IconButton, Box } from '@mui/material';
import { Email } from '@mui/icons-material';
import inaturalist from '../assets/inaturalist.png';
import { FaBluesky } from 'react-icons/fa6';

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
        aria-label="BlueSky"
        onClick={() => window.open('https://bsky.app/profile/carolyncoyle.bsky.social', '_blank')}
      >
        <FaBluesky fontSize="xx-large" />
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
