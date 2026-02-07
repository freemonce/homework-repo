import React from "react";

export default function CheckBox({ isAgree, onAgreeChange }) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={isAgree}
          onChange={(e) => onAgreeChange(e.target.checked)}
        />
        <label>약관 동의</label>
        {!isAgree && (
          <p style={{ color: "red", fontSize: "14px" }}>약관에 동의해주세요.</p>
        )}
      </div>
    </>
  );
}
