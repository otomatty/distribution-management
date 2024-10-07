import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

interface CountdownTimerProps {
  initialTime: number;
  onComplete: () => void;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialTime, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft === 0) {
      onComplete();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  return <Typography variant="body2">再送信可能まで: {timeLeft}秒</Typography>;
};
