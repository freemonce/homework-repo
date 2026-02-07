import React, { useState } from "react";

export default function Input({ onAdd }) {
  const [inputText, setInputText] = useState("");

  const handleSunbmit = (e) => {
    e.preventDefault();

    // 유효성 검사: 빈 텍스트 방지
    if (!inputText.trim()) {
      alert("할 일을 입력해주세요!");
      return;
    }

    onAdd(inputText);
    setInputText("");
  };

  const inputStyle = {
    padding: "12px",
    fontSize: "16px",
    width: "250px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  return (
    <form
      onSubmit={handleSunbmit}
      style={{ display: "flex", justifyContent: "center", gap: "10px" }}
    >
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="할 일을 입력하세요"
        style={inputStyle}
      />
      <button
        type="submit"
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#4caf50",
          border: "none",
          borderRadius: "4px",
        }}
      >
        추가
      </button>
    </form>
  );
}
