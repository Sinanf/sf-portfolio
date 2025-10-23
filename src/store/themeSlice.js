// src/store/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialTheme =
  (typeof window !== "undefined" && localStorage.getItem("theme")) || "light";

const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: initialTheme },
  reducers: {
    setTheme(state, action) {
      const next = action.payload === "dark" ? "dark" : "light";
      state.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        console.error("Could not access localStorage to set theme");
      }
    },
    toggleTheme(state) {
      const next = state.theme === "dark" ? "light" : "dark";
      state.theme = next;
      try {
        localStorage.setItem("theme", next);
      } catch {
        console.error("Could not access localStorage to set theme");
      }
    },
  },
});

export const { setTheme, toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;

