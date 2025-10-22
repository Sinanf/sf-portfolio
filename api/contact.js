// api/contact.js
import { Buffer } from 'buffer';
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  let payload = {};
  try {
    if (req.body && Object.keys(req.body).length) {
      payload = req.body;
    } else {
      const chunks = [];
      for await (const c of req) chunks.push(c);
      const raw = Buffer.concat(chunks).toString();
      payload = raw ? JSON.parse(raw) : {};
    }
  } catch {
    payload = {};
  }

  try {
    // ✅ ÇALIŞAN MOCK: 201 Created döndürür
    const upstream = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const text = await upstream.text(); // passthrough
    res.status(upstream.status).send(text);
  } catch (err) {
    res.status(500).json({ error: "Proxy error", detail: err?.message });
  }
}
