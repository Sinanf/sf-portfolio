// src/components/Header.jsx
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// Replaced FaUserCircle with a custom image logo

export default function Header({ onHireClick, onLangToggle }) {
  const language = useSelector((s) => s.language.language);

  // kalıcı tema
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const ui =
    language === "tr"
      ? {
          modeAction: theme === "dark" ? "Aydınlık Moda Geç" : "Karanlık Moda Geç",
          langBtn: "SWITCH TO ENGLISH",
          skills: "Yetenekler",
          projects: "Projeler",
          hire: "Beni İşe Al",
          logoName: "Sinan Faik Özdemir",
        }
      : {
          modeAction: theme === "dark" ? "Light Mode" : "Dark Mode",
          langBtn: "TÜRKÇE’YE GEÇ",
          skills: "Skills",
          projects: "Projects",
          hire: "Hire me",
          logoName: "Sinan Faik Özdemir",
        };

  return (
    <header
      className="border-b border-base sticky top-0 z-10
                    bg-chrome/90 dark:bg-zinc-900/90
                    supports-[backdrop-filter]:backdrop-blur-md"
    >
      {/* Üst Şerit: Tema + Dil */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-10 flex items-center justify-end gap-4 text-xs">
        {/* Tema anahtarı */}
        <button
          onClick={toggleTheme}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1
                     border border-[#3B3A46] text-white"
          aria-pressed={theme === "dark"}
          title={ui.modeAction}
        >
          <span className="tracking-wide">{ui.modeAction}</span>
          <span
            className={`w-9 h-4 rounded-full relative transition
                       ${theme === "dark" ? "bg-zinc-600" : "bg-zinc-400"}`}
            aria-hidden="true"
          >
            <span
              className={`absolute top-0.5 h-3 w-3 rounded-full bg-white transition
                         ${theme === "dark" ? "right-0.5" : "left-0.5"}`}
            />
          </span>
        </button>

        {/* Dil */}
        <button
          onClick={onLangToggle}
          className="rounded-full px-3 py-1 border border-[#3B3A46] text-white"
        >
          {ui.langBtn}
        </button>
      </div>

      

      {/* Ana Satır: Logo + Nav */}
      <div className="max-w-6xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between">
        {/* Logo + image */}
        <a
          href="#"
          className="inline-flex items-center gap-2 text-base md:text-lg uppercase tracking-wider
                     font-semibold text-white"
        >
          <img
            src="https://i.imgflip.com/1um67c.jpg?a488928"
            alt="Logo"
            className="w-12 h-12 rounded-full object-cover hover:w-17 hover:h-17 transition-all"
          />
          {ui.logoName}
        </a>

        <nav className="flex items-center
            gap-3 sm:gap-6
            text-xs sm:text-sm
            opacity-80
            flex-wrap">
          <a
            href="#skills"
            className="text-white/80 hover:text-white transition-colors"
          >
            {ui.skills}
          </a>
          <a
            href="#projects"
            className="text-white/80 hover:text-white transition-colors"
          >
            {ui.projects}
          </a>

          {/* HIRE BUTON */}
          <button
            type="button"
            onClick={onHireClick}
            className="ml-2 inline-flex items-center rounded-full px-3 py-1 text-sm
    font-semibold
    border border-[var(--accent)] text-[var(--accent)]
    transition-colors
    hover:bg-[var(--accent)] hover:text-white
    focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          >
            {ui.hire}
          </button>
        </nav>
      </div>
    </header>
  );
}
