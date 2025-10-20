// src/components/Hero.jsx
import { useSelector } from "react-redux";
import { heroCopy } from "../data/heroCopy";
import myPhoto from "../assets/sf-photo.jpg";

export default function Hero(){
  const language = useSelector((s) => s.language.language);
  const t = heroCopy[language] || heroCopy.en;

  return (
    <section className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-8 items-center">
      {/* Sol: başlık + intro + CTA'lar */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {t.title1}<br />{t.title2}
        </h1>

        <p className="opacity-80 max-w-prose">
          {t.intro}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="mailto:sinanfozdemir@gmail.com"
            className="px-4 py-2 rounded-md text-sm font-medium bg-zinc-900 text-white
                       dark:bg-white dark:text-zinc-900"
          >
            {t.hire}
          </a>

          <a
            href="https://github.com/Sinanf"
            target="_blank" rel="noreferrer"
            className="px-4 py-2 rounded-md text-sm border border-zinc-300 dark:border-zinc-700"
          >
            {t.github}
          </a>

          <a
            href="https://www.linkedin.com/in/sinanfozdemir/"
            target="_blank" rel="noreferrer"
            className="px-4 py-2 rounded-md text-sm border border-zinc-300 dark:border-zinc-700"
          >
            {t.linkedin}
          </a>
        </div>
      </div>

      {/* Sağ: görsel placeholder (tasarımdaki alan) */}
      <figure className="justify-self-center md:justify-self-end">
        <div className="w-[420px] md:w-[400px]  rounded-3xl overflow-hidden shadow
                  bg-zinc-100 dark:bg-zinc-800">
        <img
          src={myPhoto}
          alt="Sinan Özdemir"
          className="w-full h-full object-fill object-center"
        />

        </div>
      </figure>
    </section>
  );
}
