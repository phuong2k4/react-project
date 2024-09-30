import React, { useEffect, useState } from 'react';

export default function useClockString() {
  const [timeString, setTimeString] = useState('');
  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      const defaultTime = now.getTime();
      setTimeString(defaultTime);
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return timeString;
}
