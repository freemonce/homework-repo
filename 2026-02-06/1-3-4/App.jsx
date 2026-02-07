import React, { useState } from "react";
import Input from "./Input";

export default function App() {
  const [todos, setTodos] = useState([]);

  // 추가 로직
  const handleAdd = (text) => {
    const newTodo = { id: Date.now(), text: text };
    setTodos([...todos, newTodo]);
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>My Todo List</h1>

      {/* 입력 컴포넌트에 추가 함수 전달 */}
      <Input onAdd={handleAdd} />

      {/* 목록 표시 섹션 */}
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              fontSize: "18px",
            }}
          >
            <span>{todo.text}</span>
            <button
              onClick={() => handleRemove(todo.id)}
              style={{ padding: "2px 8px", cursor: "pointer" }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
