import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import Grid from '@mui/material/Grid2';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              LearnersGuild
            </Typography>
            <Typography variant="body2" color="text.secondary">
              効率的な学習管理で、あなたの成長をサポートします。
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, sm: 2 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              製品
            </Typography>
            <Link href="#" variant="subtitle1" color="text.secondary" display="block">
              機能
            </Link>
            <Link href="#" variant="subtitle1" color="text.secondary" display="block">
              料金プラン
            </Link>
            <Link href="#" variant="subtitle1" color="text.secondary" display="block">
              ダウンロード
            </Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 2 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              サポート
            </Typography>
            <Link href="#" variant="subtitle1" color="text.secondary" display="block">
              ヘルプセンター
            </Link>
            <Link href="#" variant="subtitle1" color="text.secondary" display="block">
              お問い合わせ
            </Link>
            <Link href="#" variant="subtitle1" color="text.secondary" display="block">
              FAQ
            </Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 2 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              法的情報
            </Typography>
            <Link href="#" variant="subtitle1" color="text.secondary" display="block">
              利用規約
            </Link>
            <Link href="#" variant="subtitle1" color="text.secondary" display="block">
              プライバシーポリシー
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://learnersguild.com/">
              LearnersGuild
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
        <Box mt={2} display="flex" justifyContent="center">
          <Link href="#" color="inherit" sx={{ mx: 1.5 }}>
            <FacebookIcon />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1.5 }}>
            <TwitterIcon />
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1.5 }}>
            <InstagramIcon />
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
