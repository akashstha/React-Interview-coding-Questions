import { useState } from "react";
import "./styles.css";

export default function App() {
  /* Create a Counter component with increment and decrement buttons. */
  //state storage for counter
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>Counter is : {counter}</h1>
      {/*  increment button with disable */}
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      {/*     decreament button with disable */}
      <button
        onClick={() => setCounter((prev) => prev - 1)}
        style={{ marginLeft: "20px" }}
        disabled={counter <= 0}
      >
        Decrement
      </button>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCounter(0)}
          style={{ marginLeft: "20px" }}
          disabled={counter <= 0}
        >
          Reset
        </button>
      </div>

      <h2>Good Luck for Interview</h2>
    </div>
  );
}
