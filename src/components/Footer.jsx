// src/components/Footer.jsx
import { useSelector } from "react-redux";
import { footerCopy } from "../data/footerCopy";
import { personal } from "../data/personal";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const language = useSelector((s) => s.language.language);
  const t = footerCopy[language] || footerCopy.en;

  return (
    <footer className="mt-12 border-t border-base bg-chrome">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 items-start">
        {/* Sol: başlık + email */}
        <div className="pr-0 md:pr-6">
          <h3 className="text-heading text-3xl md:text-4xl font-bold leading-snug">
            {t.big1}
            <br />
            {t.big2}
          </h3>

          <div className="mt-6 text-base">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 underline underline-offset-2 text-foreground hover:opacity-90"
            >
              <FiMail className="text-lg" aria-hidden="true" />
              <span>{personal.email}</span>
            </a>
          </div>
        </div>

        {/* Sağ: Blog / GitHub / LinkedIn — pill + border + yumuşak hover */}
        <div className="mt-8 md:mt-0 md:justify-self-end flex items-center gap-4 text-sm font-medium">
          {personal.blog ? (
            <a
              href={personal.blog}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full
             border border-base text-foreground/80
             hover:bg-[#E5E7EB] dark:hover:bg-white/10 hover:text-foreground
             transition-colors"
            >
              {t.blog}
            </a>
          ) : null}

          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full
             border border-base text-foreground/80
             hover:bg-[#E5E7EB] dark:hover:bg-white/10 hover:text-foreground
             transition-colors"
          >
            {/* GitHub marka rengi (#181717) */}
            <FaGithub className="text-base" style={{ color: "#181717" }} />
            {t.github}
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full
             border border-base text-foreground/80
             hover:bg-[#E5E7EB] dark:hover:bg-white/10 hover:text-foreground
             transition-colors"
          >
            {/* LinkedIn marka rengi */}
            <FaLinkedin className="text-base" style={{ color: "#0A66C2" }} />
            {t.linkedin}
          </a>
        </div>
      </div>
    </footer>
  );
}
