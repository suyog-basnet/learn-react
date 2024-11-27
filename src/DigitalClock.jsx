import React, { useState, useEffect } from "react";

export default function DigitalClock({ backgroundColor }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    const padZero = (number) => (number < 10 ? `0${number}` : number);
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor }}
    >
      <div className="w-full max-w-md p-4 text-center bg-black/50 rounded-md backdrop-blur-sm">
        <h1 className="text-6xl font-mono font-bold text-white text-shadow-md">
          {formatTime()}
        </h1>
      </div>
    </div>
  );
}
