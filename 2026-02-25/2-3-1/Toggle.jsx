import React, { useState } from "react";

export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => setIsOn(!isOn)}
          style={{ backgroundColor: isOn ? "green" : "gray" }}
        >
          {isOn ? "On" : "OFF"}
        </button>
      </div>
    </>
  );
}
