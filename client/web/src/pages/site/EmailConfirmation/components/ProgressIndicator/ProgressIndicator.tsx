import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = ['アカウント作成', 'メール確認', 'プロフィール設定'];

export const ProgressIndicator: React.FC = () => {
  return (
    <Stepper activeStep={1} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
