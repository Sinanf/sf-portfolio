// src/store/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

// İlk yüklemede localStorage'dan oku, yoksa "en"
const initialLang =
  (typeof window !== "undefined" && localStorage.getItem("language")) || "en";

const languageSlice = createSlice({
  name: "language",
  initialState: { language: initialLang },
  reducers: {
    setLanguage(state, action) {
      state.language = action.payload || "en";
      try {
        localStorage.setItem("language", state.language);
      } catch {
        console.error("Could not access localStorage to set language");
      }
    },
    toggleLanguage(state) {
      state.language = state.language === "en" ? "tr" : "en";
      try {
        localStorage.setItem("language", state.language);
      } catch {
        console.error("Could not access localStorage to set language");
      }
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
