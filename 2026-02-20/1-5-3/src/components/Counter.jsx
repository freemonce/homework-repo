import React from "react";
import useCounterStore from "../stores/useCounterStore";

export default function Counter() {
  const count = useCounterStore((state) => state.count);

  const increment = useCounterStore((state) => state.increment);

  const decrement = useCounterStore((state) => state.decrement);

  const reset = useCounterStore((state) => state.reset);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "350px",
        height: "300px",
        backgroundColor: "#2c2c2c",
        borderRadius: "15px",
      }}
    >
      <h2 style={{}}>Zutstand 카운트</h2>
      <h1>{count}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
