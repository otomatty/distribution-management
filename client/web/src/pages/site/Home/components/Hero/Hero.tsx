import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          成長を習慣に。LearnersGuildで、学びの旅を楽しもう。
        </Typography>
        <Typography variant="h5" paragraph>
          目標達成の過程を重視し、成長に必要な全ての機能を1つのアプリで。
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button component={Link} to="/signup" variant="contained" color="secondary" size="large" sx={{ mr: 2 }}>
            無料で始める
          </Button>
          <Button component={Link} to="/demo" variant="outlined" color="inherit" size="large">
            デモを見る
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
