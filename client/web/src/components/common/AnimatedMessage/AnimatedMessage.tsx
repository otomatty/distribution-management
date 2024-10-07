import React, { useState, useEffect, useCallback } from 'react';
import { MessageContainer, Cursor } from './AnimatedMessage.styles';

interface AnimatedMessageProps {
  messages: string[];
  delay: number;
  keepCursor?: boolean;
  onComplete?: () => void;
  skipAll?: () => void;
}

const AnimatedMessage: React.FC<AnimatedMessageProps> = ({ messages, delay, keepCursor = false, onComplete, skipAll }) => {
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [showCursor, setShowCursor] = useState(false);

  const skipAnimation = useCallback(() => {
    setDisplayedMessage(messages.join('\n'));
    if (!keepCursor) {
      setShowCursor(false);
    }
    if (skipAll) {
      skipAll();
    }
    if (onComplete) {
      onComplete();
    }
  }, [messages, keepCursor, skipAll, onComplete]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const startAnimation = () => {
      setDisplayedMessage('');
      setShowCursor(true);
      let index = 0;
      const fullMessage = messages.join('\n');
      interval = setInterval(() => {
        setDisplayedMessage(fullMessage.slice(0, index + 1));
        index++;
        if (index === fullMessage.length) {
          clearInterval(interval);
          if (!keepCursor) {
            setShowCursor(false);
          }
          if (onComplete) {
            onComplete();
          }
        }
      }, 100);
    };

    const timer = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [messages, delay, keepCursor, onComplete]);

  return (
    <MessageContainer onClick={skipAnimation}>
      {displayedMessage.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {showCursor && i === arr.length - 1 && <Cursor />}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </MessageContainer>
  );
};

export default AnimatedMessage;
