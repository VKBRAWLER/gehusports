"use client";
import { useEffect, useState } from "react";
import calculateTimeLeft from "@func/CalculateTimeLeft";

const Timer = (props) => {
  // Set the target time and time left in state
  const [targetTime] = useState(new Date(props.targetTime));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetTime));

  // Update the time left every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  // Display the time left
  return (
    <p>
      {timeLeft.days && <span>{timeLeft.days}d </span>}
      {timeLeft.hours && <span>{timeLeft.hours}h </span>}
      {timeLeft.minutes && <span>{timeLeft.minutes}m </span>}
      {timeLeft.seconds && <span>{timeLeft.seconds}s</span>}
    </p>
  );
};

export default Timer;