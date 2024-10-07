import React, { useState, useEffect } from 'react';
import { NameStepContainer, NameInput, FadeInContainer, ToggleContainer } from './NameStep.styles';
import { Switch, FormControlLabel } from '@mui/material';
import AnimatedMessage from '../../../../../components/common/AnimatedMessage/AnimatedMessage';

interface NameStepProps {
  name: string;
  setName: (value: string) => void;
  setIsSelected: (value: boolean) => void;
  googleName: string | null;
}

const NameStep: React.FC<NameStepProps> = ({ name, setName, setIsSelected, googleName }) => {
  const [useGoogleName, setUseGoogleName] = useState(!!googleName);
  const [showForm, setShowForm] = useState(false);

  const skipAllAnimations = () => {
    setShowForm(true);
  };

  const handleComplete = () => {
    setTimeout(() => {
      setShowForm(true);
    }, 500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setUseGoogleName(checked);
    if (checked && googleName) {
      setName(googleName);
    } else {
      setName('');
    }
  };

  useEffect(() => {
    setIsSelected(!!name);
  }, [name, setIsSelected]);

  useEffect(() => {
    if (useGoogleName && googleName) {
      setName(googleName);
    }
  }, [useGoogleName, googleName, setName]);

  return (
    <NameStepContainer onClick={skipAllAnimations}>
      <AnimatedMessage messages={['まずはあなたのことを教えてください', 'お名前を教えていただけますか？']} delay={0} skipAll={skipAllAnimations} onComplete={handleComplete} />
      {showForm && (
        <FadeInContainer>
          {googleName && (
            <ToggleContainer>
              <FormControlLabel control={<Switch checked={useGoogleName} onChange={handleToggleChange} name="useGoogleName" color="primary" />} label={`Googleアカウントの名前を使用する (${googleName})`} />
            </ToggleContainer>
          )}
          <NameInput type="text" value={useGoogleName ? googleName || '' : name} onChange={handleInputChange} disabled={useGoogleName} required />
        </FadeInContainer>
      )}
    </NameStepContainer>
  );
};

export default NameStep;
