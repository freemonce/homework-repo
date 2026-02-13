import React, { useState, useReducer } from "react";

function TodoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false,
        },
      ];
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );
    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoApp() {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    dispatch({ type: "ADD", payload: input });
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div
      style={{
        padding: "40px",
        width: "300px",
        height: "500px",
        border: "2px solid #fff",
      }}
    >
      <h2 style={{ color: "#e5bd77" }}>Todo List</h2>
      <input
        style={{ height: "30px" }}
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />

      <button
        style={{ margin: "20px", backgroundColor: "#333", color: "#e5bd77" }}
        onClick={handleAdd}
      >
        추가
      </button>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            <span
              style={{ flex: 1, padding: "15px", cursor: "pointer" }}
              onClick={() => dispatch({ type: "TOGGLE", payload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              style={{
                padding: "5px 10px",
                marginLeft: "10px",
                backgroundColor: "#333",
                color: "#e5bd77",
              }}
              onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
