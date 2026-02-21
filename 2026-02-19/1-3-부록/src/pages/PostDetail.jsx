import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostDetail() {
  const { id } = useParams();
  const nav = useNavigate();

  const postData = [
    { id: "1", title: "React는 재미있다", content: "아니.. 친해지는 중이다.." },
    { id: "2", title: "SPA의 장점", content: "깜빡임이 없어서 좋다." },
    { id: "3", title: "Router 정복", content: "아니.. 친해지는 중이다.." },
  ];

  const post = postData.find((item) => item.id === id);

  if (!post) {
    return <div>존재하지 않는 글입니다.</div>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "25px" }}>{post.title}</h2>

      <p style={{ fontSize: "18px", marginTop: "20px", color: "#999" }}>
        {post.content}
      </p>

      <button
        onClick={() => nav(-1)}
        style={{ marginTop: "20px", cursor: "pointer" }}
      >
        뒤로 가기
      </button>
    </div>
  );
}
