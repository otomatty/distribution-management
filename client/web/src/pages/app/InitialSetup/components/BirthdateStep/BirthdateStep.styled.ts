import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const BirthdateStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const BirthdateInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const ToggleLabel = styled.span`
  margin-right: 10px;
  font-size: 16px;
`;

export const FadeInContainer = styled.div`
  animation: ${fadeIn} 1s ease-in-out;
`;

export const RadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
