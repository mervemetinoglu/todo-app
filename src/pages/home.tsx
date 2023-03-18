import { Box } from '@mui/material';
import { Container } from '@/components';

const Home = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <Container />
    </Box>
  );
};

export default Home;
