import React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import RouteIcon from '@mui/icons-material/Route';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import VisibilityIcon from '@mui/icons-material/Visibility';

const conceptsData = [
  {
    icon: <AutoGraphIcon fontSize="large" />,
    title: '習慣化',
    description: '継続は力なり。LearnersGuildで、学びを日常に。',
  },
  {
    icon: <RouteIcon fontSize="large" />,
    title: '過程重視',
    description: '目標よりも旅を。成長の過程を楽しむ仕組みを。',
  },
  {
    icon: <AllInclusiveIcon fontSize="large" />,
    title: 'オールインワン',
    description: '学び、記録、実践、振り返り。すべてを1つのアプリで。',
  },
  {
    icon: <VisibilityIcon fontSize="large" />,
    title: '行動の可視化',
    description: '見えないものは変えられない。あなたの成長を可視化。',
  },
];

const Concepts: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          主要コンセプト
        </Typography>
        <Grid container spacing={4}>
          {conceptsData.map((concept, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {concept.icon}
                <Typography variant="h6" component="h3" align="center" sx={{ mt: 2, mb: 1 }}>
                  {concept.title}
                </Typography>
                <Typography variant="body2" align="center">
                  {concept.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Concepts;
