import React from "react";
import { LanguageProvider } from "../contexts/LanguageContext";
import LanguageDisplay from "../components/LanguageDisplay";

export default function App() {
  return (
    <>
      <LanguageProvider>
        <LanguageDisplay />
      </LanguageProvider>
    </>
  );
}
