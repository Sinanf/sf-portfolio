// src/components/Header.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguage } from "../store/languageSlice";
import { navCopy } from "../data/navCopy";

export default function Header({ onHireClick }) {
  // Tema (kalıcı)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // Dil
  const dispatch = useDispatch();
  const language = useSelector((s) => s.language.language);
  const onToggleLang = () => dispatch(toggleLanguage());

  // Mode etiketi TR/EN
  const modeLabel =
    theme === "dark"
      ? language === "tr" ? "KARANLIK MOD" : "DARK MODE"
      : language === "tr" ? "AYDINLIK MOD" : "LIGHT MODE";

  // Nav metinleri
  const n = navCopy[language] || navCopy.en;

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      {/* Üst bar: Mode + Dil */}
      <div className="max-w-6xl mx-auto px-4 h-10 flex items-center justify-end gap-3 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="opacity-70 tracking-wide">{modeLabel}</span>
          <button
            type="button"
            onClick={toggleTheme}
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={language === "tr" ? "Temayı değiştir" : "Toggle theme"}
            className="inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-2 py-1"
          >
            <span
              className={`relative w-8 h-4 rounded-full transition
              ${theme === "dark" ? "bg-zinc-900 dark:bg-white" : "bg-zinc-300 dark:bg-zinc-700"}`}
            >
              <span
                className={`absolute top-0.5 h-3 w-3 rounded-full bg-white dark:bg-zinc-900 transition
                ${theme === "dark" ? "right-0.5" : "left-0.5"}`}
              />
            </span>
          </button>
        </div>

        <button
          type="button"
          onClick={onToggleLang}
          className="rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1 tracking-wide"
          title={language === "en" ? "Türkçe'ye geç" : "Switch to English"}
        >
          {language === "en" ? "TÜRKÇE’YE GEÇ" : "SWITCH TO ENGLISH"}
        </button>
      </div>

      {/* Ana header: isim + nav */}
      <div className="max-w-6xl mx-auto h-16 px-4 flex items-center justify-between">
        <a href="#" className="text-sm uppercase tracking-wider font-semibold">
          Sinan Özdemir
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
      <a href="#skills" className="opacity-80 hover:opacity-100">{n.skills}</a>
      <a href="#projects" className="opacity-80 hover:opacity-100">{n.projects}</a>

      {/* Hire me — figmadaki pill, modal açsın */}
      <button
        type="button"
        onClick={onHireClick}
        className="ml-2 inline-flex items-center rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1"
      >
        {n.hire}
      </button>
    </nav>
      </div>
    </header>
  );
}
