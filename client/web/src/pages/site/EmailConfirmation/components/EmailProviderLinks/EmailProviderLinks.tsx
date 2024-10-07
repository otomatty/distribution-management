import React from 'react';
import { Button, Box } from '@mui/material';
import { EmailProvider } from '../../../../../../../../share/types/auth';

const emailProviders: EmailProvider[] = [
  { name: 'Gmail', url: 'https://mail.google.com', icon: 'gmail-icon.png' },
  { name: 'Yahoo! メール', url: 'https://mail.yahoo.co.jp', icon: 'yahoo-icon.png' },
  { name: 'Outlook', url: 'https://outlook.live.com', icon: 'outlook-icon.png' },
];

export const EmailProviderLinks: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
      {emailProviders.map((provider) => (
        <Button key={provider.name} variant="outlined" href={provider.url} target="_blank" rel="noopener noreferrer" startIcon={<img src={provider.icon} alt={provider.name} width={20} height={20} />}>
          {provider.name}
        </Button>
      ))}
    </Box>
  );
};
