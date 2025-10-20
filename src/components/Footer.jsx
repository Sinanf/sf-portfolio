// src/components/Footer.jsx
import { useSelector } from "react-redux";
import { footerCopy } from "../data/footerCopy";
import { personal } from "../data/personal";

export default function Footer(){
  const language = useSelector(s => s.language.language);
  const t = footerCopy[language] || footerCopy.en;

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 items-start">
        {/* Sol: büyük başlık + email */}
        <div className="pr-6">
          <h3 className="text-2xl md:text-3xl font-bold leading-snug">
            {t.big1}<br/>{t.big2}
          </h3>

          <div className="mt-6 text-sm">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 underline underline-offset-2"
            >
              <span role="img" aria-label="email">👉</span>
              {personal.email}
            </a>
          </div>
        </div>

        {/* Sağ: sağa hizalı linkler */}
        <div className="mt-8 md:mt-0 md:justify-self-end text-sm flex items-center gap-4">
          <a href={personal.blog || "#"} className="opacity-80 hover:opacity-100">
            {t.blog}
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer"
             className="opacity-80 hover:opacity-100">
            {t.github}
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer"
             className="opacity-80 hover:opacity-100">
            {t.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
