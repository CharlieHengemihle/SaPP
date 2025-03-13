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
      }}
    >
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8} width={'100%'}>
          <iframe
            src={resumeUrl}
            style={{
              width: '100%',
              maxWidth: '1900px',
              height: '800px',
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
