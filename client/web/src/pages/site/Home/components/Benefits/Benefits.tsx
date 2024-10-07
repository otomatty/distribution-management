import React from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import DevicesIcon from '@mui/icons-material/Devices';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BarChartIcon from '@mui/icons-material/BarChart';
import GroupsIcon from '@mui/icons-material/Groups';

const benefitsData = [
  {
    icon: <DevicesIcon fontSize="large" />,
    title: '一元管理',
    description: '複数のアプリを行き来する煩わしさからの解放',
  },
  {
    icon: <EmojiEventsIcon fontSize="large" />,
    title: '過程の楽しさ',
    description: '目標達成だけでなく、成長の過程自体を楽しむ',
  },
  {
    icon: <BarChartIcon fontSize="large" />,
    title: '客観的な自己理解',
    description: '行動の可視化によって自分を知る',
  },
  {
    icon: <GroupsIcon fontSize="large" />,
    title: 'コミュニティサポート',
    description: '仲間と共に成長する喜び',
  },
];

const Benefits: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          LearnersGuildの利点
        </Typography>
        <Grid container spacing={4}>
          {benefitsData.map((benefit, index) => (
            <Grid size={{ xs: 12, sm: 6 }} key={index}>
              <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ mr: 2, color: 'primary.main' }}>{benefit.icon}</Box>
                <Box>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2">{benefit.description}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
