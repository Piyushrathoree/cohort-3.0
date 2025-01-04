import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null); // Use a more descriptive name

  const startClock = () => {
    if (intervalRef.current !== null) {
      return; // Prevent starting a new interval if one is already running
    }

    let value = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    intervalRef.current = value;
  };

  const stopClock = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null; // Reset the ref after stopping the interval
  };

  return (
    <>
      <div>
        <h1 className="text-2xl">Stopwatch</h1>
        <h3 className="text-2xl">{count}</h3>
        <br />
        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <button onClick={startClock}>Start</button>
          <button onClick={stopClock}>Stop</button>
        </div>
      </div>
    </>
  );
}

export default App;
