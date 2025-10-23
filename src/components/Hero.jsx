// src/components/Hero.jsx
import { useSelector } from "react-redux";
import { heroCopy } from "../data/heroCopy";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import myPhoto from "../assets/sf-photo.jpg";

export default function Hero({onHireClick}) {
  const language = useSelector((s) => s.language.language);
  const t = heroCopy[language] || heroCopy.en;

  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

      {/* Sol: Başlık + metin + CTA'lar */}
      <div className="space-y-6">
        <h1 className="text-[40px] leading-[1.1] md:text-6xl md:leading-[1.05] font-extrabold tracking-tight">
          {t.title1}
          <br />
          {t.title2}
        </h1>

        <p className="max-w-prose text-muted">
          {t.intro}
        </p>

        <div className="flex flex-wrap gap-3 pt-1">
          {/* Primary (Mor) */}
          <a
            href="mailto:sinanfozdemir@gmail.com"
            onClick={(e) => {
              if (onHireClick) {
                e.preventDefault();
                onHireClick();
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                       bg-[var(--accent)] text-white shadow-sm hover:bg-[#3730A3] transition-colors"
          >
            {t.hire}
          </a>

          {/* Outline (GitHub) */}
          <a
            href="https://github.com/Sinanf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                       border text-[var(--accent)] border-[var(--accent)]
                       hover:bg-[var(--accent)] hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="text-base" />
            {t.github}
          </a>

          {/* Outline (LinkedIn) */}
          <a
            href="https://www.linkedin.com/in/sinanfozdemir/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                       border text-[var(--accent)] border-[var(--accent)]
                       hover:bg-[var(--accent)] hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-base" />
            {t.linkedin}
          </a>
        </div>
      </div>

      {/* Sağ: görsel (responsive + sınırlı genişlik + biraz sola kaydırma) */}
<figure className="justify-self-center md:justify-self-end">
  <div
    className="
      relative
      /* ▼ hafif sola kaydırma (sadece md ve üstü) */
      md:-translate-x-4 lg:-translate-x-6

      /* ▼ responsive genişlik: küçük ekranda ekranın ~%70’i ama asla 360px’i geçmesin */
      w-[min(70vw,360px)]
      /* ▼ orta ve üstünde biraz daha küçük tut */
      md:w-[min(38vw,340px)]

      /* ▼ sabit oran, yumuşak köşeler ve taşmaları kes */
      aspect-[4/5] rounded-[28px] overflow-hidden

      /* ▼ arka plan ve gölge */
      bg-zinc-100 dark:bg-zinc-800 shadow
    "
  >
    <img
      src={myPhoto}
      alt="Sinan Özdemir"
      /* Görselin kendisi taşıyıcıya tam otursun, köşeler daha da yumuşak */
      className="w-full h-full object-cover rounded-[22px]"
      loading="lazy"
      decoding="async"
    />
  </div>
</figure>

    </section>
  );
}
