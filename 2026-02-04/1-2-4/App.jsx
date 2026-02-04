import React from "react";
import Post from "./src/components/Post";
import ProfileCard from "./src/components/ProfileCard";

function App() {
  // 다크 모드
  const [isDark, setDark] = useState(false);
  // 프로필 매니저
  const [userName, setUserName] = useState("이승주");
  const [statusMsg, setStatusMsg] = useState("오늘도 열공 중!");

  const [isEditing, setIsEditing] = useState(false);

  const themeStyle = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#000",
    padding: "20px",
    transition: "all 0.3s ease",
  };

  const inlineStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={themeStyle}>
      <div style={inlineStyle} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* 다크 모드 토글 */}
        <button
          onClick={() => setDark(!isDark)}
          style={{ marginBottom: "20px" }}
        >
          {isDark ? "라이트모드" : "다크모드"}
        </button>
        {/* --- 프로필 편집 섹션 --- */}
        <div
          style={{
            border: "1px solid gray",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
            textAlign: "center",
          }}
        >
          {isEditing ? (
            /* 2. 수정 모드: input창들과 [저장] 버튼이 보임 */
            <>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="이름 입력"
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="text"
                  value={statusMsg}
                  onChange={(e) => setStatusMsg(e.target.value)}
                  placeholder="상태 메시지 입력"
                />
              </div>
              {/* 3. 저장 버튼 누르면 다시 조회 모드로(false) 변경 */}
              <button onClick={() => setIsEditing(false)}>저장</button>
            </>
          ) : (
            /* 1. 조회 모드: 텍스트와 [편집] 버튼이 보임 */
            <>
              <h2>{userName}</h2>
              <p style={{ color: "gray" }}>{statusMsg}</p>
              <button onClick={() => setIsEditing(true)}>편집</button>
            </>
          )}
        </div>
        하단 결과물 출력
        <div style={{ marginTop: "30px", display: "flex", gap: "10px" }}>
          <ProfileCard name={userName} job={statusMsg} isDark={isDark} />
          <ProfileCard name="영희" job="개발자" isDark={isDark} />
        </div>
        <div style={{ width: "100%", maxWidth: "400px", marginTop: "20px" }}>
          <Post
            author={userName}
            content="프로필 모드 전환 기능을 만들었어요!"
            isDark={isDark}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
