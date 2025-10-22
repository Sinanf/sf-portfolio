// src/components/Skills.jsx
import { useSelector } from "react-redux";

/**
 * Not: skillsCopy içinde her öğe şöyle varsayılıyor:
 * { icon: "js" | "react" | "node" | ... , title: string, desc: string }
 * Eğer farklı anahtarlar varsa ICONS map'inde karşılığını ekleyebilirsin.
 */
import { skillsCopy } from "../data/skillsCopy";

// React Icons (marka renkleriyle)
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiRedux,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiGit,
  SiTypescript,
} from "react-icons/si";

// ikon -> bileşen eşleşmesi (orijinal marka renkleri)
const ICONS = {
  js: <SiJavascript size={28} color="#F7DF1E" />,
  react: <SiReact size={28} color="#61DAFB" />,
  node: <SiNodedotjs size={28} color="#339933" />,
  redux: <SiRedux size={28} color="#764ABC" />,
  tailwind: <SiTailwindcss size={28} color="#38BDF8" />,
  html: <SiHtml5 size={28} color="#E44D26" />,
  css: <SiCss3 size={28} color="#1572B6" />,
  git: <SiGit size={28} color="#F05032" />,
  ts: <SiTypescript size={28} color="#3178C6" />,
};

export default function Skills() {
  const language = useSelector((s) => s.language.language);
  const list = skillsCopy[language] || skillsCopy.en;

  return (
    <section id="skills" aria-labelledby="skills-title"
      className="border-t border-base">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Başlık – mor başlık rengi (index.css > .text-heading) */}
        <h2 id="skills-title" className="text-heading text-2xl md:text-3xl font-bold mb-8">
          {language === "tr" ? "Yetenekler" : "Skills"}
        </h2>

        {/* Kartlar */}
        <ul className="grid gap-6 sm:gap-7 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item, idx) => (
            <li
              key={item.title + idx}
              className="
                bg-card border border-base rounded-xl p-5 shadow-sm transition-all duration-200 ease-out hover:shadow-md hover:-translate-y-0.5 focus-within:ring-2 focus-within:ring-[var(--accent)]
   
              "
            >
              <div className="flex items-start gap-4">
                {/* İkon (sabit boy, marka rengi) */}
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0">
                  {ICONS[item.icon] ?? (
                    <div className="w-7 h-7 rounded bg-slate-300" />
                  )}
                </div>

                {/* Metinler */}
                <div className="flex-1">
                  {/* Başlık: koyu, rahat okunur */}
                  <h3 className="text-foreground text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  {/* Açıklama: hafif daha soluk ama ince değil */}
                  <p className="text-[15px] text-muted mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
