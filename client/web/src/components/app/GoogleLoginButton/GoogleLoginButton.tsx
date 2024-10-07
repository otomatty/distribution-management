import React from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { signInWithGoogle } from '../../../utils/auth';

interface GoogleLoginButtonProps {
  text?: string;
}

export const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({ text = 'Googleでログイン' }) => {
  const handleGoogleLogin = async () => {
    try {
      const { url } = await signInWithGoogle();
      if (url) {
        // Googleの認証ページにリダイレクト
        window.location.href = url;
      }
    } catch (error) {
      console.error('Googleログインエラー:', error);
    }
  };

  return (
    <Button variant="outlined" startIcon={<GoogleIcon />} onClick={handleGoogleLogin} fullWidth>
      {text}
    </Button>
  );
};
