import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import PostDetail from "../src/pages/PostDetail";
import Home from "../src/pages/Home";
import PostList from "../src/pages/PostList";

export default function App() {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "30px",
          fontSize: "20px",
        }}
      >
        <Link to="/">홈</Link>
        <Link to="/posts">글 목록</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}
