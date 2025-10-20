// src/components/HireModal.jsx
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function HireModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  if (!open) return null;

  const onChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const postJSON = (url, data) =>
    axios.post(url, data, { headers: { "Content-Type": "application/json" } });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true);
    try {
      // 1) BRIEF'İN İSTEDİĞİ: önce workintech'e dene
      try {
        await postJSON("https://reqres.in/api/workintech", form);
        // Çalışırsa burada başarı kabul ederiz (normalde etmiyor)
        toast.success("Mesajınız gönderildi (workintech)!");
        setForm({ name: "", email: "", message: "" });
        onClose();
        return;
      } catch {
        // ÇİFT HATA TOSTU İSTEMİYORUZ → sadece bilgi ver ve DEMO endpoint'e geç
        toast.info("Brief endpoint yanıt vermedi → demo endpoint ile gönderiyorum…");
      }

      // 2) DEMO BAŞARI: CORS sorunsuz, 200/201 dönen bir uç nokta
      //    Reqres/users ortamında yine 401 aldığın için httpbin kullandık.
      const res = await postJSON("https://httpbin.org/post", form);
      const ok = res.status >= 200 && res.status < 300;
      if (ok) {
        toast.success("Mesajınız başarıyla gönderildi (demo).");
        setForm({ name: "", email: "", message: "" });
        onClose();
        return;
      }
      toast.error(`Beklenmeyen yanıt: ${res.status}`);
    } catch (err) {
      const code = err?.response?.status;
      const detail = err?.response?.data?.error || err.message;
      toast.error(code ? `Hata: ${code} – ${detail}` : "Ağ hatası. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-md rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 p-5 shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Hire Me</h3>
            <button onClick={onClose} className="text-sm opacity-70">✕</button>
          </div>
          <form onSubmit={onSubmit} className="grid gap-3">
            <input
              name="name" placeholder="Ad Soyad" value={form.name} onChange={onChange}
              className="px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent"
            />
            <input
              name="email" type="email" placeholder="E-posta" value={form.email} onChange={onChange}
              className="px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent"
            />
            <textarea
              name="message" rows={4} placeholder="Mesaj"
              value={form.message} onChange={onChange}
              className="px-3 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent resize-none"
            />
            <button
              type="submit" disabled={loading}
              className="mt-1 px-4 py-2 rounded-md font-medium bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
            >
              {loading ? "Gönderiliyor..." : "Gönder"}
            </button>
          </form>
          <p className="mt-3 text-xs opacity-60">
            Önce <code>reqres.in/api/workintech</code> denenir (brief). Yanıt gelmezse demo amaçlı
            <code className="ml-1">httpbin.org/post</code> ile başarı akışı gösterilir.
          </p>
        </div>
      </div>
    </div>
  );
}
