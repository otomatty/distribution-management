import React, { useState } from 'react';
import { OccupationStepContainer, FadeInContainer } from './OccupationStep.styled';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';
import { Radio, RadioGroup, FormControlLabel, FormControl, TextField } from '@mui/material';

interface AdultOccupationStepProps {
  birthdate: string;
  occupation: string;
  setOccupation: (value: string) => void;
  setIsSelected: (value: boolean) => void;
}

const occupationOptions = ['会社員（正社員）', '会社員（契約社員・派遣社員）', '公務員', '自営業', 'フリーランス', 'パート・アルバイト', '専業主婦・主夫', '学生', '無職', 'その他'];

const AdultOccupationStep: React.FC<AdultOccupationStepProps> = ({ birthdate, occupation, setOccupation, setIsSelected }) => {
  const [showForm, setShowForm] = useState(false);
  const [showOtherInput, setShowOtherInput] = useState(false);

  const skipAllAnimations = () => {
    setShowForm(true);
  };

  const handleComplete = () => {
    setTimeout(() => {
      setShowForm(true);
    }, 500);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setOccupation(value);
    setShowOtherInput(value === 'その他');
    setIsSelected(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOccupation(event.target.value);
    setIsSelected(true);
  };

  const birthdateMessage = `${new Date(birthdate).getMonth() + 1}月${new Date(birthdate).getDate()}日生まれですね！`;

  const today = new Date();
  const isBirthday = today.getMonth() === new Date(birthdate).getMonth() && today.getDate() === new Date(birthdate).getDate();

  const messages = isBirthday ? [birthdateMessage, '誕生日おめでとうございます！', 'ご職業は何をされていますか？'] : [birthdateMessage, 'ご職業は何をされていますか？'];

  return (
    <OccupationStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={messages} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />
      {showForm && (
        <FadeInContainer>
          <FormControl component="fieldset">
            <RadioGroup aria-label="occupation" name="occupation" value={occupation} onChange={handleRadioChange}>
              {occupationOptions.map((option) => (
                <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
              ))}
            </RadioGroup>
          </FormControl>
          {showOtherInput && <TextField fullWidth variant="outlined" value={occupation === 'その他' ? '' : occupation} onChange={handleInputChange} placeholder="具体的な職業を入力してください" required margin="normal" />}
        </FadeInContainer>
      )}
    </OccupationStepContainer>
  );
};

export default AdultOccupationStep;
