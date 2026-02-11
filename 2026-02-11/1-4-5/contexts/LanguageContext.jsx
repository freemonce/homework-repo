import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ko");

  const translations = {
    ko: {
      greeting: "안녕하세요",
      welcome: "환영합니다",
      food: "식사하셨어요?",
      changeLanguage: "언어 변경",
    },
    en: {
      greeting: "Hello",
      welcome: "Welcome",
      food: "Have you eaten?",
      changeLanguage: "Change Language",
    },
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const UseLanguage = () => {
  return useContext(LanguageContext);
};
