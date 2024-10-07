import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@mui/material';
import { Login } from '../../../components/app/Login/Login';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            ログイン
          </Typography>
          <Login />
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              アカウントをお持ちでない方は{' '}
              <Link component={RouterLink} to="/signup">
                新規登録
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
