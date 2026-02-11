import React from "react";
import { useCounter } from "../components/UseCounter"; // 훅 가져오기

export default function Counter() {
  const { count, increment, decrement, reset, isMax, isMin } = useCounter(0, {
    min: 0,
    max: 10,
  });

  const countStyle = {
    fontSize: "4rem",
    fontWeight: "bold",
    transition: "0.3s",
    color: `rgb(${count * 25}, 100, ${255 - count * 25})`,
    transform: `scale(${1 + count * 0.05})`,
    marginBottom: "20px",
  };

  // 2. 공통 버튼 스타일
  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1.5rem",
    cursor: "pointer",
    borderRadius: "8px",
    border: "1px solid #ccc",
    transition: "0.2s",
  };

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        textAlign: "center",
        padding: "50px",
        backgroundColor: "#FAF3E0",
        borderRadius: "20px",
      }}
    >
      <h1 style={countStyle}>{count}</h1>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {/* 최소치 도달 시 버튼 비활성화 및 색상 변경 */}
        <button
          onClick={decrement}
          style={{ ...buttonStyle, backgroundColor: isMin ? "#ddd" : "white" }}
          disabled={isMin}
        >
          -
        </button>

        <button onClick={reset} style={buttonStyle}>
          Reset
        </button>

        {/* 최대치 도달 시 버튼 비활성화 및 색상 변경 */}
        <button
          onClick={increment}
          style={{
            ...buttonStyle,
            backgroundColor: isMax ? "#ddd" : "#2563eb",
            color: isMax ? "black" : "white",
          }}
          disabled={isMax}
        >
          +
        </button>
      </div>

      {isMax && (
        <p style={{ color: "red", marginTop: "10px" }}>
          최대값에 도달했습니다!
        </p>
      )}
    </div>
  );
}
