import React, { useEffect, useRef, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState({ hrs: 0, min: 0, sec: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const { hrs, min, sec } = prevTime;
          if (sec < 59) {
            return { ...prevTime, sec: sec + 1 };
          }
          if (min < 59) {
            return { ...prevTime, min: min + 1, sec: 0 };
          }
          return { hrs: hrs + 1, min: 0, sec: 0 };
        });
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const formatTime = (unit) => unit.toString().padStart(2, "0");

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime({ hrs: 0, min: 0, sec: 0 });
  };

  return (
    <div className="stopwatch-container">
      <h1>Stopwatch</h1>
      <div>
        <span>{formatTime(time.hrs)}</span> hrs :{" "}
        <span>{formatTime(time.min)}</span> min :{" "}
        <span>{formatTime(time.sec)}</span> sec
      </div>
      <br />
      <button onClick={handleStart}>Start</button>{" "}
      <button onClick={handleStop}>Stop</button>{" "}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
