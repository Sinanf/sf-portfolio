import { useMutation } from "@tanstack/react-query";

export function useContactMutation({ onSuccess, onError } = {}) {
  return useMutation({
    mutationFn: async (payload) => {
      const res = await fetch("/api/contact", { // ← serverless relay (Vercel)
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      return res.json().catch(() => ({})); // json değilse boş obje
    },
    onSuccess,
    onError,
    retry: 0, // demo için retry kapalı (isteğe bağlı)
  });
}
