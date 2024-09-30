import { Box, Typography } from '@mui/material';

export default function Resume() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        My Resume
      </Typography>
      <iframe
        src="https://docs.google.com/document/d/1-8p-HA3g2_Z4tOfZVfnc8Dm2745z3k9K/pub?embedded=true"
        style={{
          width: '100%',
          height: '800px',
          border: 'none',
          boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
          alignContent: 'center',
        }}
        title="Resume"
      ></iframe>
    </Box>
  );
}
