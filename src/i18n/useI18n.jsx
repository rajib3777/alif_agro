import React from "react";
import { translations } from "./translations";

const I18nCtx = React.createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = React.useState(() => localStorage.getItem("alif_lang") || "bn");

  React.useEffect(() => {
    localStorage.setItem("alif_lang", lang);
    document.documentElement.lang = lang === "bn" ? "bn" : "en";
  }, [lang]);

  const t = React.useCallback(
    (path) => {
      const parts = path.split(".");
      let cur = translations[lang];
      for (const p of parts) cur = cur?.[p];
      return cur ?? path;
    },
    [lang]
  );

  const value = React.useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <I18nCtx.Provider value={value}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = React.useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}