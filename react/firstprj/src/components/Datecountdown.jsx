import React, { useState, useEffect } from "react";

function DateCountdown() {
  // Set target date (YYYY, MM-1, DD, HH, MM, SS)
  const targetDate = new Date(2026, 0, 10, 10, 0, 0); // Jan 15, 2026 10:00 AM

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { expired: true };
    }

    return {
      expired: false,
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.expired) {
    return <h2>⏰ Time’s up!</h2>;
  }

  return (
    <div>
      <h2>Countdown using Date</h2>
      <p>
        {timeLeft.days} Days : {timeLeft.hours} Hours :
        {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds
      </p>
    </div>
  );
}

export default DateCountdown;
