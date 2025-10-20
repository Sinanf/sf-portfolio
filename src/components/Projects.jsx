// src/components/Projects.jsx
import { useSelector } from "react-redux";
import { projectsCopy } from "../data/projectsCopy";

export default function Projects(){
  const language = useSelector(s => s.language.language);
  const t = projectsCopy[language] || projectsCopy.en;

  return (
    <section id="projects" aria-labelledby="projects-title"
      className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 id="projects-title" className="text-2xl md:text-3xl font-bold mb-8">
          {t.sectionTitle}
        </h2>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map(p => (
            <li key={p.id}
                className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 shadow-sm flex flex-col">
              {/* Görsel */}
              <figure className="w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </figure>

              {/* İçerik */}
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm opacity-80 mt-1 flex-1">{p.desc}</p>

                {/* Etiketler */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map(tag => (
                    <span key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-zinc-300 dark:border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Aksiyonlar */}
                <div className="flex gap-3 mt-4">
                  <a href={p.site} target="_blank" rel="noreferrer"
                     className="px-3 py-1 rounded-md text-sm border border-zinc-300 dark:border-zinc-700">
                    {language === "tr" ? "Siteyi Gör" : "View Site"}
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer"
                     className="px-3 py-1 rounded-md text-sm border border-zinc-300 dark:border-zinc-700">
                    GitHub
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
