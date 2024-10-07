import React, { useState } from 'react';
import { LearningTimeStepContainer, FadeInContainer } from './LearningTimeStep.styles';
import { learningTimeOptions } from '../../../../../data/initialSetupData';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';
import GridSelector from '../../../../../components/app/GridSelector/GridSelector';

interface LearningTimeStepProps {
  learningTime: string;
  setLearningTime: (value: string) => void;
  setIsSelected: (value: boolean) => void;
}

const LearningTimeStep: React.FC<LearningTimeStepProps> = ({ learningTime, setLearningTime, setIsSelected }) => {
  const [showForm, setShowForm] = useState(false);

  const skipAllAnimations = () => {
    setShowForm(true);
  };

  const handleComplete = () => {
    setTimeout(() => {
      setShowForm(true);
    }, 500);
  };

  const handleItemSelect = (itemId: string) => {
    setLearningTime(itemId);
    setIsSelected(true);
  };

  return (
    <LearningTimeStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={['1日の学習時間はどのくらいですか？']} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />
      {showForm && (
        <FadeInContainer>
          <GridSelector
            items={learningTimeOptions.map((option) => ({
              id: option.value,
              emoji: '',
              text: option.label,
            }))}
            columns={2}
            multiSelect={false}
            selectedItems={learningTime ? [learningTime] : []}
            onItemSelect={handleItemSelect}
          />
        </FadeInContainer>
      )}
    </LearningTimeStepContainer>
  );
};

export default LearningTimeStep;
