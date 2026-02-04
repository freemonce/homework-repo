import React from "react";

function ProfileCard({ name, age, job, isDark }) {
  const cardStyle = {
    border: isDark ? "1px solid white" : "1px solid black",
    padding: "20px",
    margin: "10px",
    width: "100px",
    textAlign: "center",
    borderRadius: "8px",
  };

  return (
    <div style={cardStyle}>
      <div className="card">
        <h3>{name}</h3>
        <p>{age}세</p>
        <p>{job}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
