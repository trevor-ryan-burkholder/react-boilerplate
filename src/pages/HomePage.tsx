import { Container, Typography, Box, Divider } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth={false} sx={{ mt: 6 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          Homepage
        </Typography>
        <Divider />
      </Box>
    </Container>
  );
};

export default HomePage;
