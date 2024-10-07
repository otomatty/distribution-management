import React, { useState } from 'react';
import { LearningGoalStepContainer, FadeInContainer } from './LearningGoalStep.styled';
import { learningGoalOptions } from '../../../../../data/initialSetupData';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';
import GridSelector from '../../../../../components/app/GridSelector/GridSelector';

interface LearningGoalStepProps {
  learningGoal: string;
  setLearningGoal: (value: string) => void;
  setIsSelected: (value: boolean) => void;
}

const LearningGoalStep: React.FC<LearningGoalStepProps> = ({ learningGoal, setLearningGoal, setIsSelected }) => {
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
    setLearningGoal(itemId);
    setIsSelected(true);
  };

  return (
    <LearningGoalStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={['次は学ぶ目的を教えてください']} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />
      {showForm && (
        <FadeInContainer>
          <GridSelector
            items={learningGoalOptions.map((option) => ({
              id: option.value,
              emoji: '',
              text: option.label,
            }))}
            columns={2}
            multiSelect={false}
            selectedItems={learningGoal ? [learningGoal] : []}
            onItemSelect={handleItemSelect}
          />
        </FadeInContainer>
      )}
    </LearningGoalStepContainer>
  );
};

export default LearningGoalStep;
