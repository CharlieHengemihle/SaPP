import { Box, Grid } from '@mui/material';

export default function Resume() {
  const resumeUrl = '/resume.pdf';
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#323639',
        minHeight: '100vh',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        <Grid item xs={12} md={8} width={'100%'}>
          <iframe
            src={resumeUrl}
            style={{
              width: '100%',
              maxWidth: '1900px',
              height: 'calc(100vh - 80px)',
              border: 'none',
              boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
              margin: 'auto',
              display: 'block',
            }}
            title="Resume"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}
