import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { userAtom, signupEmailAtom } from '../../../atoms/authAtom';
import { signUp } from '../../../utils/auth';
import { TextField, Button, Box, Alert, Divider, Typography } from '@mui/material';
import { GoogleLoginButton } from '../GoogleLoginButton/GoogleLoginButton';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const setUser = useSetAtom(userAtom);
  const setSignupEmail = useSetAtom(signupEmailAtom);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('パスワードが一致しません。');
      return;
    }
    try {
      const { user } = await signUp(email, password);
      setUser(user);
      setSignupEmail(email); // メールアドレスをatomに設定
      navigate('/email-confirmation'); // 成功時に確認ページにリダイレクト
    } catch (error) {
      console.error('サインアップエラー:', error);
      setError('サインアップに失敗しました。別のメールアドレスを試すか、後でもう一度お試しください。');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {error && <Alert severity="error">{error}</Alert>}
          <TextField type="email" label="メールアドレス" value={email} onChange={(e) => setEmail(e.target.value)} required fullWidth />
          <TextField type="password" label="パスワード" value={password} onChange={(e) => setPassword(e.target.value)} required fullWidth />
          <TextField type="password" label="パスワード（確認）" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required fullWidth />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            サインアップ
          </Button>
        </Box>
      </form>
      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          または
        </Typography>
      </Divider>
      <GoogleLoginButton text="Googleで新規登録" />
    </Box>
  );
};
