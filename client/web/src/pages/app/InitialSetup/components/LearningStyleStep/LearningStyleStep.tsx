import React, { useState } from 'react';
import { LearningStyleStepContainer, FadeInContainer } from './LearningStyleStep.styles';
import { learningStyleOptions } from '../../../../../data/initialSetupData';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';
import GridSelector from '../../../../../components/app/GridSelector/GridSelector';

interface LearningStyleStepProps {
  learningStyle: string;
  setLearningStyle: (value: string) => void;
  setIsSelected: (value: boolean) => void;
}

const LearningStyleStep: React.FC<LearningStyleStepProps> = ({ learningStyle, setLearningStyle, setIsSelected }) => {
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
    setLearningStyle(itemId);
    setIsSelected(true);
  };

  return (
    <LearningStyleStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={['次はあなたの好みの学習スタイルを教えてください']} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />
      {showForm && (
        <FadeInContainer>
          <GridSelector
            items={learningStyleOptions.map((option) => ({
              id: option.value,
              emoji: '',
              text: option.label,
            }))}
            columns={2}
            multiSelect={false}
            selectedItems={learningStyle ? [learningStyle] : []}
            onItemSelect={handleItemSelect}
          />
        </FadeInContainer>
      )}
    </LearningStyleStepContainer>
  );
};

export default LearningStyleStep;
