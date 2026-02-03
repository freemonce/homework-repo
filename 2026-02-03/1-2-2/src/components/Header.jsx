import React from "react";

function Header() {
  const headerStyle = {
    textAlign: "center",
    fontsize: "20px",
    color: "#888",
  };

  return (
    <header style={headerStyle}>
      <h1>My Website</h1>
    </header>
  );
}

export default Header;
