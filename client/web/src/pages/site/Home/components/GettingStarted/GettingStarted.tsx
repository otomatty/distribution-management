import React from 'react';
import { Box, Typography, Stepper, Step, StepLabel, StepContent, Button, Paper, Container } from '@mui/material';

const steps = [
  {
    label: 'アカウントを作成',
    description: `まずは無料でアカウントを作成します。メールアドレスと簡単なプロフィール情報を入力するだけです。`,
  },
  {
    label: '学習目標を設定',
    description: 'あなたの学習目標を設定します。短期的な目標と長期的な目標を分けて考えるのがおすすめです。',
  },
  {
    label: '日々の学習を記録',
    description: `学んだことをメモやドキュメントに記録します。小さな進歩も大切にしましょう。`,
  },
  {
    label: 'コミュニティに参加',
    description: `同じ目標を持つ仲間とつながり、モチベーションを高め合いましょう。`,
  },
  {
    label: '振り返りと改善',
    description: `定期的に学習の進捗を振り返り、必要に応じて計画を調整します。`,
  },
];

const GettingStarted: React.FC = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          始め方ガイド
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel optional={index === steps.length - 1 ? <Typography variant="caption">最後のステップ</Typography> : null}>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                      {index === steps.length - 1 ? '完了' : '次へ'}
                    </Button>
                    <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                      戻る
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>全てのステップが完了しました - LearnersGuildを始める準備が整いました！</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              最初から見る
            </Button>
          </Paper>
        )}
      </Container>
    </Box>
  );
};

export default GettingStarted;
