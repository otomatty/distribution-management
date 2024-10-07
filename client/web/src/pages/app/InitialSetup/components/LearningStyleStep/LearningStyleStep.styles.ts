import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const LearningStyleStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const FadeInContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-in-out;
  width: 100%;
`;

export const LearningStyleStepLabel = styled.label`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const LearningStyleStepSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
`;

export const LearningStyleStepButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
