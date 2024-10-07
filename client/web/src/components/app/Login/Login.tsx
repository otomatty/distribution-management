import React, { useState } from 'react';
import { useSetAtom } from 'jotai';
import { userAtom } from '../../../atoms/authAtom';
import { signIn } from '../../../utils/auth';
import { TextField, Button, Box, Alert, Divider, Typography } from '@mui/material';
import { GoogleLoginButton } from '../GoogleLoginButton/GoogleLoginButton';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const setUser = useSetAtom(userAtom);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const { user } = await signIn(email, password);
      setUser(user);
    } catch (error) {
      console.error('ログインエラー:', error);
      setError('ログインに失敗しました。メールアドレスとパスワードを確認してください。');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField type="email" label="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
          <TextField type="password" label="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            ログイン
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          または
        </Typography>
      </Divider>
      <GoogleLoginButton />
    </Box>
  );
};
