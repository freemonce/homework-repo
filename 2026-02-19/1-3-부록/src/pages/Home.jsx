import React from "react";
import homeIcon from "../assets/house_10751558.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{}}>
        <img
          src={homeIcon}
          alt="Home"
          style={{ width: "200px", height: "150px" }}
        />
        <h2>미니 블로그 홈</h2>
        <button
          onClick={() => navigate("/posts")}
          style={{
            backgroundColor: "#2563eb",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {" "}
          글 목록 보러가기
        </button>
      </div>
    </>
  );
}
