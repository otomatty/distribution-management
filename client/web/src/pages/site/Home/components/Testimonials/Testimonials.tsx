import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    name: '山田太郎',
    role: '大学生',
    content: 'LearnersGuildのおかげで、学習習慣が身につきました。毎日の小さな進歩が大きな自信につながっています。',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: '佐藤花子',
    role: 'フリーランスデザイナー',
    content: '複数のアプリを使い分ける必要がなくなり、学習管理が格段に楽になりました。創造的な時間が増えて嬉しいです。',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: '鈴木一郎',
    role: 'IT企業マネージャー',
    content: 'チーム全体の成長を可視化できるようになり、メンバーのモチベーション向上に役立っています。',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
];

const Testimonials: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          ユーザーの声
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', mb: 2 }}>
                    <Avatar src={testimonial.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" component="h3">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                    <FormatQuoteIcon sx={{ fontSize: 40, color: 'primary.main', mr: 1 }} />
                    <Typography variant="body1" paragraph>
                      {testimonial.content}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
