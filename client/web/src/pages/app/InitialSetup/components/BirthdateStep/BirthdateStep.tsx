import React, { useState, useEffect } from 'react';
import { BirthdateStepContainer, BirthdateInput, FadeInContainer } from './BirthdateStep.styled';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

interface BirthdateStepProps {
  birthdate: string;
  setBirthdate: (value: string) => void;
  setIsSelected: (value: boolean) => void;
  privacyLevel: string;
  setPrivacyLevel: (value: string) => void;
  name: string;
}

const BirthdateStep: React.FC<BirthdateStepProps> = ({ birthdate, setBirthdate, setIsSelected, privacyLevel, setPrivacyLevel, name }) => {
  const [showForm, setShowForm] = useState(false);
  const [skip, setSkip] = useState(false);

  const skipAllAnimations = () => {
    setSkip(true);
    setShowForm(true);
  };

  const handleComplete = () => {
    setTimeout(() => {
      setShowForm(true);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthdate(value);
    setIsSelected(!!value);
  };

  const handlePrivacyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrivacyLevel(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!skip) {
        setShowForm(true);
      }
    }, 6000);

    return () => clearTimeout(timer);
  }, [skip]);

  return (
    <BirthdateStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={[`ようこそ${name}さん！`, '次にあなたの誕生日を教えていただけますか？', '誕生日の公開範囲も選択してください']} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />
      {showForm && (
        <FadeInContainer>
          <BirthdateInput type="date" value={birthdate} onChange={handleInputChange} min="1930-01-01" max="9999-12-31" required />
          <RadioGroup value={privacyLevel} onChange={handlePrivacyChange}>
            <FormControlLabel control={<Radio value="public" />} label="一般公開" />
            <FormControlLabel control={<Radio value="followers" />} label="フォロワー限定公開" />
            <FormControlLabel control={<Radio value="friends" />} label="フレンド限定公開" />
            <FormControlLabel control={<Radio value="private" />} label="公開しない" />
          </RadioGroup>
        </FadeInContainer>
      )}
    </BirthdateStepContainer>
  );
};

export default BirthdateStep;
