// Leichtgewichtige Anmeldung ohne externen Dienst:
// Session als HMAC-signiertes Cookie. Zugangsdaten kommen aus Umgebungsvariablen.
//  - INTERN_USERS : JSON-Liste [{ "email": "...", "password": "...", "name": "..." }]  (für mehrere Konten)
//  - Fallback: INTERN_USER / INTERN_PASSWORD (ein gemeinsames Konto)
//  - INTERN_SECRET: Schlüssel zum Signieren der Session (Fallback: INTERN_PASSWORD)

const te = new TextEncoder();

export const SESSION_COOKIE = "mw_session";

function toB64Url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromB64Url(s: string): Uint8Array {
  let t = s.replace(/-/g, "+").replace(/_/g, "/");
  while (t.length % 4) t += "=";
  const bin = atob(t);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

async function sign(secret: string, msg: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    te.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const sig = await crypto.subtle.sign("HMAC", key, te.encode(msg));
  return toB64Url(new Uint8Array(sig));
}

function authSecret(): string {
  return process.env.INTERN_SECRET || process.env.INTERN_PASSWORD || "mariawald-dev-secret";
}

export async function createSession(id: string, days = 7): Promise<string> {
  const exp = Date.now() + days * 86400000;
  const payload = `${toB64Url(te.encode(id))}.${exp}`;
  const sig = await sign(authSecret(), payload);
  return `${payload}.${sig}`;
}

export async function verifySession(token: string | undefined): Promise<string | null> {
  if (!token) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [idB64, exp, sig] = parts;
  const expected = await sign(authSecret(), `${idB64}.${exp}`);
  if (sig !== expected) return null;
  if (Number(exp) < Date.now()) return null;
  try {
    return new TextDecoder().decode(fromB64Url(idB64));
  } catch {
    return null;
  }
}

export function checkCredentials(id: string, password: string): { ok: boolean; name?: string } {
  const raw = process.env.INTERN_USERS;
  if (raw) {
    try {
      const users = JSON.parse(raw) as { email: string; password: string; name?: string }[];
      const u = users.find(
        (x) => x.email.toLowerCase() === id.toLowerCase() && x.password === password,
      );
      if (u) return { ok: true, name: u.name };
    } catch {
      // ungültiges JSON ignorieren und auf Fallback zurückfallen
    }
  }
  const fu = process.env.INTERN_USER || "mariawald";
  const fp = process.env.INTERN_PASSWORD;
  if (fp && id === fu && password === fp) return { ok: true };
  return { ok: false };
}
