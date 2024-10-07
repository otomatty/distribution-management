import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ここでニュースレター登録のロジックを実装
    console.log('Subscribed with email:', email);
    setOpen(true);
    setEmail('');
  };

  // ここを修正
  const handleClose = (_event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'primary.contrastText' }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          ニュースレターに登録
        </Typography>
        <Typography variant="h6" align="center" paragraph>
          最新の学習トレンドや機能アップデート情報をお届けします。
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="メールアドレス"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              bgcolor: 'background.paper',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'primary.contrastText',
                },
                '&:hover fieldset': {
                  borderColor: 'primary.contrastText',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'primary.contrastText',
                },
              },
            }}
          />
          <Button type="submit" variant="contained" color="secondary" size="large" fullWidth sx={{ mt: 2 }}>
            登録する
          </Button>
        </Box>
      </Container>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          ニュースレターに登録しました！
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Newsletter;
