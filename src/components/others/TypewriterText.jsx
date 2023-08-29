import React, { useState, useEffect } from "react";

const TypewriterText = ({ text, repetitions }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const cycleCompleted = cycle >= repetitions;
    if (!cycleCompleted) {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 5);

        return () => clearTimeout(timeout);
      } else {
        const nextCycleTimeout = setTimeout(() => {
          setDisplayText("");
          setCurrentIndex(0);
          setCycle((prevCycle) => prevCycle + 1);
        }, 1500);

        return () => clearTimeout(nextCycleTimeout);
      }
    }
  }, [currentIndex, text, cycle, repetitions]);

  return <>{displayText}</>;
};

export default TypewriterText;
