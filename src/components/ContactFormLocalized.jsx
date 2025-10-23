import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useContactMutation } from "../hooks/useContactMutation";

export default function ContactFormLocalized({ onSuccess }) {
  const language = useSelector((s) => s.language.language);

  const t = language === "tr"
    ? {
        name: "Ad Soyad",
        email: "E-posta",
        message: "Mesaj",
        submit: "Gönder",
        sending: "Gönderiliyor...",
        success: "Mesajın gönderildi! Teşekkürler.",
        error: "Gönderim başarısız. Lütfen tekrar deneyin.",
        required: "Lütfen tüm alanları doldurun.",
      }
    : {
        name: "Full Name",
        email: "Email",
        message: "Message",
        submit: "Send",
        sending: "Sending...",
        success: "Your message has been sent! Thank you.",
        error: "Failed to send. Please try again.",
        required: "Please fill out all fields.",
      };

  const { mutate, isPending } = useContactMutation({
    onSuccess: () => {
      toast.success(t.success);
      onSuccess?.();
    },
    onError: () => toast.error(t.error),
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
      toast.error(t.required);
      return;
    }
    mutate(payload);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input name="name" placeholder={t.name} className="px-3 py-2 rounded-md border dark:border-zinc-700 bg-transparent" />
      <input name="email" type="email" placeholder={t.email} className="px-3 py-2 rounded-md border dark:border-zinc-700 bg-transparent" />
      <textarea name="message" rows={4} placeholder={t.message} className="px-3 py-2 rounded-md border dark:border-zinc-700 bg-transparent resize-none" />
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
        {isPending ? t.sending : t.submit}
      </button>
    </form>
  );
}

