import React from "react";
import { Link, useNavigate } from "react-router-dom";
import postIcon from "../assets/icons8-목록-96.png";

export default function PostList() {
  const posts = [
    { id: 1, title: "1. React는 재미있다" },
    { id: 2, title: "2. SPA의 장점" },
    { id: 3, title: "3. Router 정복" },
  ];

  const nav = useNavigate();

  return (
    <>
      <div style={{ padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
          <img
            src={postIcon}
            style={{ width: "65px", height: "50px" }}
            alt="post"
          ></img>
          <h2>글 목록</h2>
        </div>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "30px 20px",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              style={{ textDecoration: "none" }}
            >
              {post.title}
            </Link>
          ))}
        </div>
        <button onClick={() => nav("/")}>← 홈으로</button>
      </div>
    </>
  );
}
