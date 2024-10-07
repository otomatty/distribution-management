import React from 'react';
import { Typography, Box } from '@mui/material';

interface EmailDisplayProps {
  email: string;
}

export const EmailDisplay: React.FC<EmailDisplayProps> = ({ email }) => {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Typography variant="body1">確認メールを以下のアドレスに送信しました：</Typography>
      <Typography variant="body1" fontWeight="bold">
        {email}
      </Typography>
    </Box>
  );
};
