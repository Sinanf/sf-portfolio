// src/components/Profile.jsx
import { useSelector } from "react-redux";
import { profileCopy } from "../data/profileCopy";
import { personal } from "../data/personal";

export default function Profile() {
  const language = useSelector((s) => s.language.language);
  const t = profileCopy[language] || profileCopy.en;

  return (
    <section id="profile" aria-labelledby="profile-title" className="border-t border-base">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Başlık – mor tonlu */}
        <h2 id="profile-title" className="text-heading text-2xl md:text-3xl font-bold mb-8">
          {t.sectionTitle}
        </h2>

        {/* 2 sütun: Sol = Basic Info, Sağ = About Me (ikisi de kart) */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div className="bg-card border border-base rounded-xl overflow-hidden">
            <dl className="divide-y divide-base">
              <Row label={t.labels.birth}     value={personal.birth} />
              <Row label={t.labels.residence} value={personal.city} />
              <Row label={t.labels.education} value={personal.education} />
              <Row label={t.labels.role}      value={personal.role} />
            </dl>
          </div>

          {/* About Me */}
          <div className="bg-card border border-base rounded-xl p-5 md:p-6">
            <h3 className="text-foreground text-xl font-semibold mb-3">{t.aboutTitle}</h3>
            <p className="text-[15px] text-muted leading-relaxed">{t.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-4 px-5 md:px-6 py-4">
      {/* Etiketler: kalın ve açık/koyu temada kontrastlı */}
      <dt className="text-foreground font-semibold">{label}</dt>
      {/* Değerler: ana metin rengi, rahat okunur */}
      <dd className="text-foreground">{value}</dd>
    </div>
  );
}
