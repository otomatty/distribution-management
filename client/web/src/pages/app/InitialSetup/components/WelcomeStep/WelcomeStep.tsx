import React, { useState } from 'react';
import { WelcomeStepContainer, StartButton, FadeInContainer } from './WelcomeStep.styles';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';

interface WelcomeStepProps {
  handleNextStep: () => void;
}

const WelcomeStep: React.FC<WelcomeStepProps> = ({ handleNextStep }) => {
  const [showFadeIn, setShowFadeIn] = useState(false);

  const skipAllAnimations = () => {
    setShowFadeIn(true);
  };

  const handleComplete = () => {
    setTimeout(() => {
      setShowFadeIn(true);
    }, 500);
  };

  return (
    <WelcomeStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={['Me-LXPへようこそ！', 'これからあなたの学習をサポートするためにいくつか質問をします', 'あなたについて教えてください']} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />

      {showFadeIn && (
        <FadeInContainer>
          <StartButton type="button" onClick={handleNextStep}>
            回答を始める
          </StartButton>
        </FadeInContainer>
      )}
    </WelcomeStepContainer>
  );
};

export default WelcomeStep;
