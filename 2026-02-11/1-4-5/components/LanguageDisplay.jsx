import React from "react";
import { UseLanguage } from "../contexts/LanguageContext";

export default function LanguageDisplay() {
  const { language, setLanguage, t } = UseLanguage();
  return (
    <div
      style={{
        width: "150px",
        height: "200px",
        padding: "50px",
        border: "2px solid white",
      }}
    >
      <div style={{ fontsize: "20px" }}>
        <p>{t("greeting")}</p>
        <p>{t("welcome")}</p>
        <p>{t("food")}</p>
      </div>
      <button onClick={() => setLanguage(language === "ko" ? "en" : "ko")}>
        {t("changeLanguage")}
      </button>
    </div>
  );
}
