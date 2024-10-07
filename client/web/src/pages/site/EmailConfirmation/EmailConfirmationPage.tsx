import React, { useState } from 'react';
import { Box, Typography, Paper, Container, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { signupEmailAtom } from '../../../atoms/authAtom';
import { ResendEmail } from './components/ResendEmail/ResendEmail';
import { CountdownTimer } from './components/CountdownTimer/CountdownTimer';
import { EmailProviderLinks } from './components/EmailProviderLinks/EmailProviderLinks';
import { FAQ } from './components/FAQ/FAQ';
import { Support } from './components/Support/Support';
import { ProgressIndicator } from './components/ProgressIndicator/ProgressIndicator';
import { EmailDisplay } from './components/EmailDisplay/EmailDisplay';

const EmailConfirmationPage: React.FC = () => {
  const email = useAtomValue(signupEmailAtom);
  const [canResend, setCanResend] = useState(false);

  const handleResendComplete = () => {
    setCanResend(true);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <ProgressIndicator />
          <Typography variant="h4" component="h1" gutterBottom align="center">
            メールを確認してください
          </Typography>
          <EmailDisplay email={email} />
          <Typography variant="body1" paragraph>
            登録いただいたメールアドレスに確認メールを送信しました。メール内のリンクをクリックして、アカウントを有効化してください。
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            メールが届かない場合は、迷惑メールフォルダをご確認ください。
          </Typography>
          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            {canResend ? <ResendEmail email={email} /> : <CountdownTimer initialTime={60} onComplete={handleResendComplete} />}
            <EmailProviderLinks />
          </Box>
          <Box sx={{ mt: 4 }}>
            <FAQ />
          </Box>
          <Support />
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button component={RouterLink} to="/" variant="contained" color="primary">
              ホームに戻る
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default EmailConfirmationPage;
