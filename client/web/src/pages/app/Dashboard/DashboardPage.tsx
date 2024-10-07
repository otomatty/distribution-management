import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { useAtom } from 'jotai';
import { userAtom } from '../../../atoms/authAtom';

const DashboardPage: React.FC = () => {
  const [user] = useAtom(userAtom);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          ダッシュボード
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          ようこそ、{user?.email}さん
        </Typography>
        {/* ここにダッシュボードの内容を追加 */}
      </Box>
    </Container>
  );
};

export default DashboardPage;
