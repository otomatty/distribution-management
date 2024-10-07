import React from 'react';
import { Typography, Link, Box } from '@mui/material';

export const Support: React.FC = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="body2">問題が解決しない場合は、サポートまでお問い合わせください。</Typography>
      <Link href="mailto:support@example.com">support@example.com</Link>
    </Box>
  );
};
