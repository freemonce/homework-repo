import React, { useState } from "react";

export default function Product() {
  // 상품 데이터
  const PRODUCTS = [
    { id: 1, name: "구스 롱패딩", price: 200000 },
    { id: 2, name: "기모 청바지", price: 50000 },
    { id: 3, name: "롱 코트", price: 180000 },
    { id: 4, name: "수면양말", price: 2000 },
  ];

  // 상태 관리
  const [cart, setCart] = useState([]);

  // 기능: 장바구니 담기
  const addToCart = (product) => {
    // 중복 담기 방지 로직
    if (cart.find((item) => item.id === product.id)) {
      alert("이미 장바구니에 담긴 상품입니다.");
      return;
    }
    setCart([...cart, product]);
  };

  // 삭제 (filter로 걸러내기)
  const removeFromCart = (targetId) => {
    setCart(cart.filter((item) => item.id !== targetId));
  };

  // 장바구니가 담긴 총 금액(Derived State)
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>쇼핑 카트</h1>

      {/* 상품 목록 섹션 */}
      <section style={{ marginBottom: "40px" }}>
        <h2>상품 목록</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.price.toLocaleString()}원</p>
              <button onClick={() => addToCart(product)}>담기</button>
            </div>
          ))}
        </div>
      </section>

      <hr />

      {/* 장바구니 섹션 */}
      <section style={{ marginTop: "40px" }}>
        <h2>장바구니</h2>
        {cart.length === 0 ? (
          <p style={{ color: "#888" }}>장바구니가 비어 있습니다.</p>
        ) : (
          <ul style={{ padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  listStyle: "none",
                  marginBottom: "10px",
                  background: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  color: "#222",
                  border: "1px solid",
                }}
              >
                <span>
                  {item.name} - {item.price.toLocaleString()}원
                </span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: "red" }}
                >
                  삭제
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* 총 합계 표시 */}
        <div
          style={{
            marginTop: "20px",
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "right",
            borderTop: "2px solid #000",
            paddingTop: "10px",
          }}
        >
          총 결제 금액:{" "}
          <span style={{ color: "#007bff" }}>
            {totalPrice.toLocaleString()}원
          </span>
        </div>
      </section>
    </div>
  );
}
