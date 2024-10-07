import React from 'react';
import { Box, Typography, Card, CardContent, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';
import WorkIcon from '@mui/icons-material/Work';
import GroupWorkIcon from '@mui/icons-material/GroupWork';

const useCasesData = [
  {
    icon: <SchoolIcon fontSize="large" />,
    title: '個人学習',
    description: '新しいスキルの習得をサポート。自分のペースで学習を進められます。',
  },
  {
    icon: <BrushIcon fontSize="large" />,
    title: '趣味の深化',
    description: '趣味をより深く楽しむための知識や技術の習得を支援します。',
  },
  {
    icon: <WorkIcon fontSize="large" />,
    title: 'キャリア開発',
    description: '職場でのスキルアップや新しい分野へのチャレンジをサポートします。',
  },
  {
    icon: <GroupWorkIcon fontSize="large" />,
    title: 'チーム学習',
    description: 'グループでの学習や共同プロジェクトの進捗管理に最適です。',
  },
];

const UseCases: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          使用例とユースケース
        </Typography>
        <Grid container spacing={4}>
          {useCasesData.map((useCase, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>{useCase.icon}</Box>
                  <Typography gutterBottom variant="h5" component="h3" align="center">
                    {useCase.title}
                  </Typography>
                  <Typography variant="body2" align="center">
                    {useCase.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default UseCases;
