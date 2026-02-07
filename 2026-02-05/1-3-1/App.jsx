import React, { useState } from "react";
import "./App.css";

export default function App() {
  // 상태 관리 : 뒤집힘  여부(boolean)와 좋아요 수 (number)
  const [isFlipped, setIsFliped] = useState(false);
  const [likes, setLikes] = useState(0);

  // 카드 뒤집기 핸들러
  const handleFlip = () => {
    setIsFliped(!isFlipped);
  };

  // 좋아요 핸들러
  const handleLike = (e) => {
    e.stopPropagation();
    setLikes((prev) => prev + 1);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <div className="card-container">
          <div
            className="card"
            onClick={handleFlip}
            style={{
              transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {/* 앞면: User Name */}
            <div className="front">
              <div style={{ fontSize: "40px", marginBottom: "10px" }}>👤</div>
              <h2 style={{ margin: "0" }}>이승주</h2>
              <p style={{ color: "#95a5a6", margin: "5px 0" }}>Frontend Dev</p>

              <button className="like-button" onClick={handleLike}>
                ❤️ <span>{likes}</span>
              </button>
            </div>

            {/* 뒷면: My Skills */}
            <div className="back">
              <h2 style={{ color: "#4a90e2", marginBottom: "15px" }}>
                My Skills [희망사항]
              </h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Vue</span>
                <span className="skill-tag">JS</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px", color: "#888" }}>
          <p>
            현재 상태: {isFlipped ? "뒷면 (Skills)" : "앞면 (Profile)"} | ❤️{" "}
            {likes}
          </p>
          <p style={{ color: "#ff6b6b", fontWeight: "bold" }}>
            ▲ 하트 클릭 시 카드 뒤집힘 방지 필수!
          </p>
        </div>
      </div>
    </>
  );
}
