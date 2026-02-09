import React, { useEffect, useState, useRef } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    // 중복 실행 방지
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  useEffect(() => {
    return () => {
      // 컴포넌트가 사라질 때 정리
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const formatTime = (time) => {
    const minutes = String(Math.floor((time / 60000) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((time / 1000) % 60)).padStart(2, "0");
    const milliseconds = String(Math.floor((time / 10) % 100)).padStart(2, "0");
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  const styles = {
    container: {
      backgroundColor: "#121212",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
    },
    card: {
      backgroundColor: "#1a2233",
      padding: "60px 40px",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
      textAlign: "center",
      width: "400px",
      border: "1px solid #2d3748",
    },
    timerDisplay: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "30px",
      fontFamily: "monospace", // 숫자가 너비에 따라 흔들리지 않게 함
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "30px",
    },
    button: {
      padding: "15px 40px",
      fontSize: "1.2rem",
      fontWeight: "bold",
      borderRadius: "30px",
      border: "none",
      cursor: "pointer",
      color: "white",
      transition: "0.2s",
    },
    startButton: {
      backgroundColor: "#2563eb",
    },
    stopButton: {
      backgroundColor: "#742a2a", // 어두운 레드
      opacity: 0.8,
    },
    resetButton: {
      backgroundColor: "transparent",
      border: "none",
      color: "#718096",
      textDecoration: "underline",
      cursor: "pointer",
      fontSize: "1rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.timerDisplay}>{formatTime(time)}</div>
        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.button, ...styles.startButton }}
            onClick={start}
          >
            시작 (Start)
          </button>
          <button
            style={{ ...styles.button, ...styles.stopButton }}
            onClick={stop}
          >
            정지 (Stop)
          </button>
        </div>
        <button style={styles.resetButton} onClick={reset}>
          초기화 (Reset)
        </button>
      </div>
    </div>
  );
}
