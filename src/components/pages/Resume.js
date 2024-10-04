import { Box, Grid, Grid2, Typography } from '@mui/material';

export default function Resume() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
        backgroundColor: '#747474',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontFamily: 'EB Garamond', color: 'white' }}
      >
        My Resume
      </Typography>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8} width={'100%'}>
          <iframe
            src="https://docs.google.com/document/d/1-8p-HA3g2_Z4tOfZVfnc8Dm2745z3k9K/pub?embedded=true"
            style={{
              width: '100%',
              maxWidth: '900px',
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
