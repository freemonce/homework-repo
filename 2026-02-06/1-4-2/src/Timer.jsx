import React, { useEffect, useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(new Date());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerId;

    // 1. 실행 중(isRunning)일 때만 인터벌을 생성합니다.
    if (isRunning) {
      timerId = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }

    // 2. Clean-up 함수: 다음 useEffect가 실행되거나 컴포넌트가 사라질 때 타이머를 제거합니다.
    return () => {
      clearInterval(timerId);
    };
  }, [isRunning]); // 의존성 배열: isRunning이 바뀔 때마다 타이머를 껐다 켰다 합니다.

  // 시간 포맷팅 (00:00:00 형식)
  const formattedTime = time.toLocaleTimeString();

  return (
    <div
      style={{ textAlign: "center", padding: "50px", fontFamily: "monospace" }}
    >
      <h1>🕒 Real-time Clock</h1>

      <div
        style={{
          fontSize: "3rem",
          margin: "20px 0",
          color: isRunning ? " #D3D3D3 " : "#888",
        }}
      >
        {formattedTime}
      </div>

      <button
        onClick={() => setIsRunning(!isRunning)}
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          cursor: "pointer",
          backgroundColor: isRunning ? "#ff6b6b" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isRunning ? "정지 (Stop)" : "시작 (Start)"}
      </button>

      {!isRunning && <p style={{ color: "#ff6b6b" }}>시계가 멈췄습니다.</p>}
    </div>
  );
}
