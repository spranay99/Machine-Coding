import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", placeItems: "center" }}
    >
      <h1 style={{ fontSize: "4rem", margin: "0" }}>Counter</h1>
      <span style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
        {counter}
      </span>
      <div>
        <button
          style={{
            backgroundColor: "green",
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer",
          }}
          onClick={(e) => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: "red",
            fontSize: "2rem",
            padding: "0.5rem",
            margin: "1rem",
            cursor: "pointer",
          }}
          onClick={(e) => setCounter(counter <= 0 ? 0 : counter - 1)}
        >
          -
        </button>
        <button
          style={{
            backgroundColor: "yellow",
            fontSize: "2rem",
            padding: "0.5rem",
            cursor: "pointer",
          }}
          onClick={(e) => setCounter(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
