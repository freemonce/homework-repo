import React from "react";

function Card() {
  const name = "이승주";
  const birthYear = 1992;
  const hobbies = ["헬스", "음악", "유튜브"];
  const currentYear = new Date().getFullYear();
  const mbti = "ISFJ";

  // 카드 전체를 감싸는 스타일
  const cardStyle = {
    width: "300px",
    padding: "20px",
    margin: "20px auto",
    borderRadius: "15px", // 모서리를 둥글게
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // 부드러운 그림자 효과
    border: "1px solid #eee",
    textAlign: "center",
    fontFamily: "sans-serif",
  };

  // 이름 부분 스타일
  const nameStyle = {
    fontSize: "24px",
    color: "#2e7d32", // 진한 녹색
    margin: "10px 0",
    borderBottom: "2px solid #e8f5e9",
    paddingBottom: "10px",
  };

  // 상세 정보 텍스트 스타일
  const infoStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    margin: "5px 0",
  };

  return (
    <div style={cardStyle}>
      <h3 style={{ color: "#aaa", fontSize: "14px", marginBottom: "0" }}>
        PROFILE
      </h3>
      <h1 style={nameStyle}>{name}</h1>

      <div style={{ textAlign: "left", paddingLeft: "20px" }}>
        <p style={infoStyle}>
          <b>출생연도:</b> {birthYear}
        </p>
        <p style={infoStyle}>
          <b>취미:</b> {hobbies.join(", ")}
        </p>
        <p style={infoStyle}>
          <b>나이:</b> {currentYear - birthYear}세
        </p>
        <p style={infoStyle}>
          <b>MBTI:</b>{" "}
          <span style={{ color: "#1976d2", fontWeight: "bold" }}>{mbti}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
