import { useEffect, useState } from 'react';

const AnimatedCounter = ({ start = 0, targetNumber, speed = 500 }: any) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / speed;
    let animationFrameId: any;

    const animate = () => {
      start += increment;
      if (start < targetNumber) {
        setCurrentNumber(Math.ceil(start));
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCurrentNumber(targetNumber);
      }
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);

  }, [targetNumber, speed]);

  return <div>{currentNumber}</div>;
};

export default AnimatedCounter;
