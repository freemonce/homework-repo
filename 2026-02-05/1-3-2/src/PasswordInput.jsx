import React from "react";

export default function PasswordInput({
  password,
  confirmPassword,
  onPwdChange,
}) {
  // 에러 조건 계산
  const isError = password.length > 0 && password.length < 8;
  const isMisMatch = confirmPassword.length > 0 && password !== confirmPassword;

  // 공통 입력창 스타일
  const inputStyle = {
    padding: "12px",
    fontSize: "16px",
    width: "100%",
    maxWidth: "360px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      {/* 비밀번호 입력 섹션 */}
      <div style={{ width: "100%", maxWidth: "360px", textAlign: "left" }}>
        <input
          type="password"
          placeholder="비밀번호 (8자 이상)"
          value={password}
          onChange={(e) => onPwdChange("password", e.target.value)}
          style={{
            ...inputStyle,
            borderColor: isError ? "red" : "#ccc",
          }}
        />
        {isError && (
          <p
            style={{
              color: "red",
              fontSize: "12px",
              marginTop: "5px",
              marginLeft: "5px",
            }}
          >
            8자 이상 입력해주세요!
          </p>
        )}
      </div>

      {/* 비밀번호 확인 입력 섹션 */}
      <div style={{ width: "100%", maxWidth: "360px", textAlign: "left" }}>
        <input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => onPwdChange("confirmPassword", e.target.value)}
          style={{
            ...inputStyle,
            borderColor: isMisMatch ? "red" : "#ccc",
          }}
        />
        {isMisMatch && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              marginTop: "5px",
              marginLeft: "5px",
            }}
          >
            비밀번호가 일치하지 않습니다!
          </p>
        )}
      </div>
    </div>
  );
}
