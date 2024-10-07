import React, { useState } from 'react';
import { DeviceStepContainer, FadeInContainer } from './DeviceStep.styled';
import { deviceOptions } from '../../../../../data/initialSetupData';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';
import GridSelector from '../../../../../components/app/GridSelector/GridSelector';

interface DeviceStepProps {
  device: string;
  setDevice: (value: string) => void;
  setIsSelected: (value: boolean) => void;
}

const DeviceStep: React.FC<DeviceStepProps> = ({ device, setDevice, setIsSelected }) => {
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
    setDevice(itemId);
    setIsSelected(true);
  };

  return (
    <DeviceStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={['主に使用するデバイスを教えてください']} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />
      {showForm && (
        <FadeInContainer>
          <GridSelector
            items={deviceOptions.map((option) => ({
              id: option.value,
              emoji: '',
              text: option.label,
            }))}
            columns={2}
            multiSelect={false}
            selectedItems={device ? [device] : []}
            onItemSelect={handleItemSelect}
          />
        </FadeInContainer>
      )}
    </DeviceStepContainer>
  );
};

export default DeviceStep;
