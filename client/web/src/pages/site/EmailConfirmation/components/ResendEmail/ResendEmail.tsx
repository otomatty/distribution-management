import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import { useAuth } from '../../../../../hooks/useAuth';
import { AuthError } from '@supabase/supabase-js';

interface ResendEmailProps {
  email: string;
}

export const ResendEmail: React.FC<ResendEmailProps> = ({ email }) => {
  const [isResending, setIsResending] = useState(false);
  const [resendError, setResendError] = useState<string | null>(null);
  const { resendConfirmationEmail } = useAuth();

  const handleResend = async () => {
    setIsResending(true);
    setResendError(null);
    try {
      const { error } = await resendConfirmationEmail(email);
      if (error) {
        throw error;
      }
      // 成功メッセージを表示するなどの処理をここに追加できます
    } catch (error) {
      if (error instanceof AuthError) {
        setResendError(`確認メールの再送信に失敗しました: ${error.message}`);
      } else {
        setResendError('確認メールの再送信に失敗しました。しばらくしてからもう一度お試しください。');
      }
    } finally {
      setIsResending(false);
    }
  };

  return (
    <Box>
      <Button variant="outlined" onClick={handleResend} disabled={isResending}>
        確認メールを再送信
      </Button>
      {resendError && (
        <Typography color="error" variant="body2" sx={{ mt: 1 }}>
          {resendError}
        </Typography>
      )}
    </Box>
  );
};
