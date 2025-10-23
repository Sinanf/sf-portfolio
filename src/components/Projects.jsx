// src/components/Projects.jsx
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
// theme is read from Redux; no local effect/state needed
import { projectsCopy } from "../data/projectsCopy";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { toast } from "react-toastify";

export default function Projects() {
  const language = useSelector((s) => s.language.language);
  const t = projectsCopy[language] || projectsCopy.en;
  const theme = useSelector((s) => s.theme.theme);
  const isDark = theme === "dark";
  const [showP3Gif, setShowP3Gif] = useState(false);

  useEffect(() => {
    if (!showP3Gif) return;
    const id = 'tenor-embed-js';
    if (!document.getElementById(id)) {
      const s = document.createElement('script');
      s.id = id;
      s.async = true;
      s.src = 'https://tenor.com/embed.js';
      document.body.appendChild(s);
    }
  }, [showP3Gif]);

  const onViewClick = (p) => (e) => {
    if (p.id === "p1") {
      e.preventDefault();
      toast.info(language === "tr" ? "Yeniden hoşgeldin 🏆" : "Welcome back, champ 🏆");
      return;
    }
    if (p.id === "p3") {
      e.preventDefault();
      setShowP3Gif(true);
      setTimeout(() => setShowP3Gif(false), 4500);
      return;
    }
    toast.info(language === "tr" ? "Yeniden hoşgeldin 🏆" : "Welcome back, champ 🏆");
  };

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-top border-base">
      {/* Diğer bölümlerle aynı container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        <h2 id="projects-title" className="text-heading text-2xl md:text-3xl font-bold mb-8">
          {t.sectionTitle}
        </h2>

        <ul className="grid gap-6 sm:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((p) => (
            <li
              key={p.id}
              className="
                bg-card border border-base rounded-xl overflow-hidden shadow-sm
                flex flex-col
                transition-all duration-200 ease-out
                hover:shadow-md hover:-translate-y-0.5
                focus-within:ring-2 focus-within:ring-[var(--accent)]
              "
            >
              {/* Görsel */}
              <figure className="w-full aspect-[4/3] bg-zinc-100 dark:bg-zinc-800">
                <img
                  src={
                    typeof p.image === "object"
                      ? isDark
                        ? p.image.dark || p.image.light
                        : p.image.light || p.image.dark
                      : p.image
                  }
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </figure>

              {/* İçerik */}
              <div className="p-4 md:p-5 flex-1 flex flex-col">
                <h3 className="text-foreground font-semibold text-lg leading-snug">{p.title}</h3>
                <p className="text-[15px] text-muted mt-1 leading-relaxed min-h-[64px]">{p.desc}</p>

                {/* Footer: Etiketler + Aksiyonlar (alta sabitle) */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full border border-base text-foreground/80 bg-surface/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Aksiyonlar */}
                  <div className="flex gap-3 mt-3">
                    <a
                      href={p.site}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium
                        border border-[var(--accent)] text-[var(--accent)]
                        hover:bg-[var(--accent)] hover:text-white
                        transition-colors
                        focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                      "
                      {...{ onClick: onViewClick(p) }}
                    >
                      <FiExternalLink className="text-base" />
                      {language === "tr" ? "Siteyi Gör" : "View Site"}
                    </a>

                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm font-medium
                        border border-base text-foreground/90
                        hover:bg-[#E5E7EB] dark:hover:bg-white/10 hover:text-foreground
                        transition-colors
                        focus:outline-none focus:ring-2 focus:ring-[var(--accent)]
                      "
                    >
                      <FaGithub className="text-base" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {showP3Gif && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div
            className="tenor-gif-embed"
            data-postid="27348946"
            data-share-method="host"
            data-aspect-ratio="1"
            data-width="70%"
          >
            <a href="https://tenor.com/view/boom-gif-27348946" target="_blank" rel="noreferrer">Boom GIF</a>
            <span className="sr-only"> from </span>
            <a href="https://tenor.com/search/boom-gifs" target="_blank" rel="noreferrer">Boom GIFs</a>
          </div>
        </div>
      )}
    </section>
  );
}

