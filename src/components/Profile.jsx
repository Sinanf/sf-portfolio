// src/components/Profile.jsx
import { useSelector } from "react-redux";
import { profileCopy } from "../data/profileCopy";
import { personal } from "../data/personal";

export default function Profile(){
  const language = useSelector(s => s.language.language);
  const t = profileCopy[language] || profileCopy.en;

  return (
    <section id="profile" aria-labelledby="profile-title"
      className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10">
        {/* Sol: Basic Info */}
        <div>
          <h2 id="profile-title" className="text-2xl md:text-3xl font-bold mb-6">
            {t.sectionTitle}
          </h2>
          <dl className="divide-y divide-zinc-200 dark:divide-zinc-800 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40">
            <Row label={t.labels.birth}     value={personal.birth} />
            <Row label={t.labels.residence} value={personal.city} />
            <Row label={t.labels.education} value={personal.education} />
            <Row label={t.labels.role}      value={personal.role} />
          </dl>
        </div>

        {/* Sağ: About me */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t.aboutTitle}</h3>
          <p className="opacity-80 leading-relaxed">
            {t.aboutText}
          </p>

          {/* Sosyal butonlar */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={personal.github} target="_blank" rel="noreferrer"
               className="px-4 py-2 rounded-md text-sm border border-zinc-300 dark:border-zinc-700">
              Github
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer"
               className="px-4 py-2 rounded-md text-sm border border-zinc-300 dark:border-zinc-700">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }){
  return (
    <div className="grid grid-cols-[160px_1fr] gap-4 px-4 py-3">
      <dt className="text-sm opacity-70">{label}</dt>
      <dd className="text-sm">{value}</dd>
    </div>
  );
}
