import React from "react";

export default function EmailInput({
  email,
  onEmailChange,
  isEmailChecked,
  setIsEmailChecked,
}) {
  const handleCheck = () => {
    // 1. 형식 검사
    if (!email.includes("@")) {
      alert("올바른 이메일 형식이 아닙니다.");
      return;
    }

    // 2. 중복 검사 (예: user@test.com은 이미 있다고 가정)
    if (email === "user@test.com") {
      alert("이미 사용 중인 이메일입니다.");
      setIsEmailChecked(false);
    } else {
      alert("사용 가능한 이메일입니다.");
      setIsEmailChecked(true);
    }
  };

  // 스타일 객체
  const inputStyle = {
    padding: "12px",
    fontSize: "16px",
    width: "250px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      {" "}
      {/* 간격 확보 */}
      <div
        className="input-group"
        style={{ display: "flex", gap: "10px", justifyContent: "center" }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          placeholder="이메일을 입력하세요"
          style={inputStyle}
        />
        <button
          type="button"
          onClick={handleCheck}
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          중복 검사
        </button>
      </div>
      {isEmailChecked && (
        <p style={{ color: "#fff", fontSize: "16px", marginTop: "5px" }}>
          ✅ 사용 가능한 이메일입니다.
        </p>
      )}
    </div>
  );
}
