import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [timeId, setTimeId] = useState(0);

  const handleStart = () => {
    const timeId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    setTimeId(timeId);
  };
  const handleStop = () => {
    clearInterval(timeId);
    setCount(count);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

export default App;
