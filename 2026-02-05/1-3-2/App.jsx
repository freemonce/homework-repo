import React, { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import CheckBox from "./CheckBox";

export default function App() {
  const [formData, setFromData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isAgree: false,
  });
  const [isEmailChecked, setIsEmailChecked] = useState(false);

  const handleEmailChange = (val) => {
    setFromData({ ...formData, email: val });
    setIsEmailChecked(false);
  };

  const handleSubmit = () => {
    // 유효성 검사
    if (!isEmailChecked) return alert("이메일 중복 검사를 완료해주세요.");
    if (formData.password.length < 8)
      return alert("비밀번호는 8자 이상이어야 합니다.");
    if (formData.password !== formData.confirmPassword)
      return alert("비밀번호가 일치하지 않습니다.");
    if (!formData.isAgree) return alert("약관에 동의해주세요.");

    alert("🎉 가입 성공!");
  };

  return (
    <div
      className="signup-container"
      style={{ textAlign: "center", padding: "50px" }}
    >
      <h1 style={{ marginBottom: "40px" }}>회원가입</h1>

      {/* 각 컴포넌트를 감싸는 div에 간격을 줍니다 */}
      <div style={{ marginBottom: "30px" }}>
        <EmailInput
          email={formData.email}
          onEmailChange={handleEmailChange}
          isEmailChecked={isEmailChecked}
          setIsEmailChecked={setIsEmailChecked}
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <PasswordInput
          password={formData.password}
          confirmPassword={formData.confirmPassword}
          onPwdChange={(field, val) =>
            setFromData({ ...formData, [field]: val })
          }
        />
      </div>

      <div style={{ marginBottom: "30px" }}>
        <CheckBox
          isAgree={formData.isAgree}
          onAgreeChange={(val) => setFromData({ ...formData, isAgree: val })}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          padding: "15px 40px",
          fontSize: "18px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        가입하기
      </button>
    </div>
  );
}
