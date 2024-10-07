import React from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';
import PeopleIcon from '@mui/icons-material/People';

const Community: React.FC = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          コミュニティに参加しよう
        </Typography>
        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 2 }}>
                <PeopleIcon sx={{ fontSize: 60, color: 'primary.main' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 10 }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  LearnersGuildコミュニティ
                </Typography>
                <Typography variant="body1" paragraph>
                  同じ志を持つ学習者たちと繋がり、モチベーションを高め合いましょう。 質問の投稿、経験の共有、学習の成果発表など、様々な形で交流できます。
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  現在のメンバー数: 10,000+
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button size="large" color="primary" variant="contained" fullWidth>
              コミュニティに参加する
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
};

export default Community;
