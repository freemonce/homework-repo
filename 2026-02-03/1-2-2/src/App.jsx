import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";

function App() {
  const appContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  };

  return (
    <>
      <div style={appContainerStyle}>
        <Header />
        <main>
          <Card />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
