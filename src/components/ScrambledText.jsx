import { useEffect, useRef, useState } from 'react';
import './ScrambledText.css';

const ScrambledText = ({
  radius = 100,
  scrambleChars = '.:-_/\\',
  className = '',
  style = {},
  onClick,
  soundFile,
  children
}) => {
  const rootRef = useRef(null);
  const [chars, setChars] = useState([]);
  const originalText = useRef(children.toString());
  const scrambleTimers = useRef({});
  const audioRef = useRef(null);

  useEffect(() => {
    const text = originalText.current;
    const charArray = text.split('').map((char, idx) => ({
      id: idx,
      original: char,
      current: char,
      isScrambling: false
    }));
    setChars(charArray);

    // Initialize audio if soundFile is provided
    if (soundFile) {
      audioRef.current = new Audio(soundFile);
    }
  }, [soundFile]);

  const scrambleChar = (index) => {
    if (scrambleTimers.current[index]) {
      clearInterval(scrambleTimers.current[index]);
    }

    const originalChar = chars[index].original;
    const scrambleCharSet = scrambleChars.split('');
    let iterations = 0;
    const maxIterations = 8;

    scrambleTimers.current[index] = setInterval(() => {
      setChars(prev => {
        const newChars = [...prev];
        if (iterations < maxIterations) {
          newChars[index] = {
            ...newChars[index],
            current: scrambleCharSet[Math.floor(Math.random() * scrambleCharSet.length)],
            isScrambling: true
          };
        } else {
          newChars[index] = {
            ...newChars[index],
            current: originalChar,
            isScrambling: false
          };
          clearInterval(scrambleTimers.current[index]);
        }
        return newChars;
      });
      iterations++;
    }, 50);
  };

  const handleMouseMove = (e) => {
    if (!rootRef.current || chars.length === 0) return;

    const spans = rootRef.current.querySelectorAll('.char');
    spans.forEach((span, index) => {
      const { left, top, width, height } = span.getBoundingClientRect();
      const dx = e.clientX - (left + width / 2);
      const dy = e.clientY - (top + height / 2);
      const dist = Math.hypot(dx, dy);

      if (dist < radius) {
        scrambleChar(index);
      }
    });
  };

  const handleClick = () => {
    // Play sound if audio is available
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Reset to start
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    }

    // Call custom onClick if provided
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      ref={rootRef} 
      className={`text-block ${className}`} 
      style={style}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    >
      <p>
        {chars.map((char, index) => (
          <span key={index} className="char">
            {char.current === ' ' ? '\u00A0' : char.current}
          </span>
        ))}
      </p>
    </div>
  );
};

export default ScrambledText;
