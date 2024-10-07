import React, { useState } from 'react';
import { OccupationStepContainer, FadeInContainer } from './OccupationStep.styled';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';
import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';

interface StudentOccupationStepProps {
  birthdate: string;
  isStudent: boolean;
  setIsStudent: (value: boolean) => void;
  setIsSelected: (value: boolean) => void;
}

const StudentOccupationStep: React.FC<StudentOccupationStepProps> = ({ birthdate, isStudent, setIsStudent, setIsSelected }) => {
  const [showForm, setShowForm] = useState(false);

  const skipAllAnimations = () => {
    setShowForm(true);
  };

  const handleComplete = () => {
    setTimeout(() => {
      setShowForm(true);
    }, 500);
  };

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value === 'true';
    setIsStudent(value);
    setIsSelected(true);
  };

  const birthdateMessage = `${new Date(birthdate).getMonth() + 1}月${new Date(birthdate).getDate()}日生まれですね！`;

  const today = new Date();
  const isBirthday = today.getMonth() === new Date(birthdate).getMonth() && today.getDate() === new Date(birthdate).getDate();

  const messages = isBirthday ? [birthdateMessage, '誕生日おめでとうございます！', '今は学生ですか？'] : [birthdateMessage, '今は学生ですか？'];

  return (
    <OccupationStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={messages} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />
      {showForm && (
        <FadeInContainer>
          <FormControl component="fieldset">
            <RadioGroup aria-label="isStudent" name="isStudent" value={isStudent.toString()} onChange={handleRadioChange}>
              <FormControlLabel value="true" control={<Radio />} label="はい" />
              <FormControlLabel value="false" control={<Radio />} label="いいえ" />
            </RadioGroup>
          </FormControl>
        </FadeInContainer>
      )}
    </OccupationStepContainer>
  );
};

export default StudentOccupationStep;
