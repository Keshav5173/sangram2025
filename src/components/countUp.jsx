import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const   CountUpOnScroll = ({ end, start = 0, duration = 2 ,suffix='+'}) => {
  const [hasCounted, setHasCounted] = useState(false);
  const countUpRef = useRef(null);

  const handleScroll = () => {
    if (!hasCounted && countUpRef.current) {
      const { top } = countUpRef.current.getBoundingClientRect();
      if (top <= window.innerHeight) {
        setHasCounted(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasCounted]);

  return (
    <div ref={countUpRef}>
      {hasCounted ? (
        <CountUp start={start} end={end} duration={duration} suffix={suffix} />
      ) : (
        start
      )}
    </div>
  );
};

export default CountUpOnScroll;