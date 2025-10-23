import { toast } from "react-toastify";
import { useContactMutation } from "../hooks/useContactMutation";

export default function ContactForm({ onSuccess }) {
  const { mutate, isPending } = useContactMutation({
    onSuccess: () => {
      toast.success("Mesajın gönderildi! Teşekkürler.");
      onSuccess?.();
    },
    onError: () => toast.error("Gönderim başarısız. Lütfen tekrar dene."),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const payload = {
      name: f.get("name")?.trim(),
      email: f.get("email")?.trim(),
      message: f.get("message")?.trim(),
    };
    if (!payload.name || !payload.email || !payload.message) {
      toast.error("Lütfen tüm alanları doldurun.");
      return;
    }
    mutate(payload);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input name="name" placeholder="Ad Soyad" className="px-3 py-2 rounded-md border dark:border-zinc-700 bg-transparent" />
      <input name="email" type="email" placeholder="E-posta" className="px-3 py-2 rounded-md border dark:border-zinc-700 bg-transparent" />
      <textarea name="message" rows={4} placeholder="Mesaj" className="px-3 py-2 rounded-md border dark:border-zinc-700 bg-transparent resize-none" />
      <button type="submit" disabled={isPending} className="
    relative inline-flex items-center justify-center
    px-4 py-2 rounded-md text-sm font-semibold
    transition
    bg-[var(--accent)] text-white
    shadow-sm
    hover:bg-[var(--accent-700)] hover:shadow
    active:scale-[0.99]
    focus:outline-none
    focus:ring-2 focus:ring-[var(--accent)]
    focus:ring-offset-2 focus:ring-offset-[var(--bg)]
    disabled:opacity-50 disabled:cursor-not-allowed
  ">
  <span aria-hidden="true" className="mr-1.5"></span>
        {isPending ? "Gönderiliyor..." : "Gönder"}
      </button>
    </form>
  );
}
