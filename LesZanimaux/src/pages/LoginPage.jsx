import { Button, Container, Typography, Box } from '@mui/material';
import { loginWithGoogle } from '../services/authService';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/collection');
    } catch (error) {
      console.error('Erreur de connexion :', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        gap={3}
      >
        <Typography variant="h3" fontWeight="bold">
          🐾 Les Zanimaux
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Le jeu de cartes des animaux sauvages
        </Typography>
        <Button variant="contained" size="large" onClick={handleLogin}>
          Se connecter avec Google
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;