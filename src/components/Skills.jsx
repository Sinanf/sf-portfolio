import { useSelector } from "react-redux";
import { skillsCopy } from "../data/skillsCopy";
import { icons } from "../assets/icons";

export default function Skills(){
  const language = useSelector(s => s.language.language);
  const list = skillsCopy[language] || skillsCopy.en;

  return (
    <section id="skills" aria-labelledby="skills-title"
      className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <h2 id="skills-title" className="text-2xl md:text-3xl font-bold mb-8">
          {language === "tr" ? "Yetenekler" : "Skills"}
        </h2>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => {
            const src = icons[s.icon]; // js/react/node...
            return (
              <li key={s.title + i}
                  className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5
                             bg-white dark:bg-zinc-900/40 shadow-sm">
                <div className="flex items-start gap-4">
                  {/* İKON */}
                  <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800
                                  flex items-center justify-center shrink-0 overflow-hidden">
                    {src ? (
                      <img src={src} alt={s.title} className="w-6 h-6" />
                    ) : (
                      <span className="text-[10px] uppercase opacity-60">{s.icon}</span>
                    )}
                  </div>

                  {/* METİN */}
                  <div>
                    <h3 className="font-semibold text-lg">{s.title}</h3>
                    <p className="text-sm opacity-80 mt-1">{s.desc}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
