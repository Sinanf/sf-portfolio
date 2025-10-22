// src/components/HireModal.jsx
import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";

export default function HireModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    firstInputRef.current?.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (e.key === "Tab") {
        const focusables = dialogRef.current?.querySelectorAll(
          'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        const list = Array.from(focusables || []).filter(el => !el.hasAttribute("disabled"));
        if (!list.length) return;
        const first = list[0], last = list[list.length - 1];
        if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Dialog */}
      <div className="absolute inset-0 grid place-items-center p-4">
        <div
          ref={dialogRef}
          className="
            w-full max-w-md rounded-2xl border border-base bg-card
            text-foreground shadow-xl p-5 md:p-6
          "
        >
          {/* Görünmez odak yakalayıcı */}
          <input ref={firstInputRef} className="sr-only" aria-hidden="true" />

          {/* Başlık + Kapat */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-heading text-lg font-semibold">Hire Me</h3>
            <button
              onClick={onClose}
              className="text-sm text-foreground/70 hover:text-foreground"
              aria-label="Kapat"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <ContactForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
