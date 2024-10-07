import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@mui/material';
import { SignUp } from '../../../components/app/SignUp/SignUp';
import { Link as RouterLink } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom align="center">
            新規登録
          </Typography>
          <SignUp />
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Typography variant="body2">
              すでにアカウントをお持ちの方は{' '}
              <Link component={RouterLink} to="/login">
                ログイン
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default SignUpPage;
