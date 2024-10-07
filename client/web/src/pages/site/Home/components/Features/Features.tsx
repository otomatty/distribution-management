import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import PeopleIcon from '@mui/icons-material/People';
import RepeatIcon from '@mui/icons-material/Repeat';
import AssessmentIcon from '@mui/icons-material/Assessment';

const featuresData = [
  {
    icon: <NoteAltIcon fontSize="large" />,
    title: 'メモ/ドキュメント',
    description: '学びを記録し、振り返る。知識の定着をサポートします。',
  },
  {
    icon: <PeopleIcon fontSize="large" />,
    title: 'コミュニティ/パーティー',
    description: '実践し、アウトプットする場。仲間と共に成長しましょう。',
  },
  {
    icon: <RepeatIcon fontSize="large" />,
    title: '習慣管理/行動記録',
    description: '小さな一歩を積み重ねる。継続的な成長を支援します。',
  },
  {
    icon: <AssessmentIcon fontSize="large" />,
    title: '自己分析',
    description: 'データに基づいて改善する。客観的な自己理解を促進します。',
  },
];

const Features: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          主要機能
        </Typography>
        <Grid container spacing={4}>
          {featuresData.map((feature, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="div"
                  sx={{
                    pt: '56.25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'primary.light',
                  }}
                >
                  {feature.icon}
                </CardMedia>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {feature.title}
                  </Typography>
                  <Typography>{feature.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
