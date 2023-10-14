"use client";
import { useEffect, useState } from "react";
const Timer = (props) => {
  const [targetTime] = useState(new Date(props.targetTime));
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  });

  function calculateTimeLeft() {
    const difference = (+new Date(targetTime)) - (+new Date());
    console.log(difference);
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    else {
        timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };
    }
    return timeLeft;
  }
  return (
    <div>
      {timeLeft.days && <span>{timeLeft.days}d </span>}
      {timeLeft.hours && <span>{timeLeft.hours}h </span>}
      {timeLeft.minutes && <span>{timeLeft.minutes}m </span>}
      {timeLeft.seconds && <span>{timeLeft.seconds}s</span>}
    </div>
  );
};

export default Timer;