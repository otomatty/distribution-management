import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const blink = keyframes`
  0% { border-right-color: rgba(0,0,0,.75); }
  50% { border-right-color: transparent; }
  100% { border-right-color: rgba(0,0,0,.75); }
`;

export const MessageContainer = styled.h1`
  font-size: 24px;
  font-weight: bold;
  white-space: pre-wrap;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
`;

export const Cursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, 0.75);
  animation: ${blink} 1s step-end infinite;
`;
