"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import jaJson from "../locales/ja.json";
import enJson from "../locales/en.json";

const resources = {
  ja: { translation: jaJson },
  en: { translation: enJson },
};

i18n.use(initReactI18next).init({
  lng: "en", // 使用する言語
  fallbackLng: "en", // 言語での翻訳が利用できない場合に使用する言語。
  resources, // 使用する言語ファイル
  interpolation: {
    // react already safes from xss
    escapeValue: false, // XSSインジェクションを回避するために渡された値をエスケープする
  },
});

export default i18n;
