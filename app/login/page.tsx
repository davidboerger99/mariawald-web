"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const f = new FormData(e.currentTarget);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: f.get("email"), password: f.get("password") }),
    }).catch(() => null);
    setLoading(false);

    if (res && res.ok) {
      const next = new URLSearchParams(window.location.search).get("next") || "/intern";
      router.push(next.startsWith("/") ? next : "/intern");
      router.refresh();
    } else {
      setError("E-Mail oder Passwort ist nicht korrekt.");
    }
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-[15px] text-heading outline-none transition-colors focus:border-heading";

  return (
    <div className="flex min-h-[calc(100vh-84px)] items-center justify-center bg-cream px-5 py-16">
      <div className="w-full max-w-[420px] rounded-2xl border border-black/5 bg-white p-8 shadow-[0_18px_50px_rgba(30,38,92,0.12)]">
        <Link href="/" aria-label="Zur Startseite" className="flex justify-center">
          <Image
            src="/images/logo-kloster-mariawald.png"
            alt="Kloster Mariawald"
            width={261}
            height={180}
            className="h-16 w-auto"
          />
        </Link>
        <h1 className="mt-6 text-center text-[24px] font-bold text-heading">Mitglieder Login</h1>
        <p className="mt-2 text-center text-[14px] text-foreground/60">
          Bitte melden Sie sich mit Ihren Zugangsdaten an.
        </p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <label className="block text-[14px] font-medium text-heading">
            E-Mail oder Benutzername
            <input name="email" type="text" autoComplete="username" required className={field} />
          </label>
          <label className="block text-[14px] font-medium text-heading">
            Passwort
            <input name="password" type="password" autoComplete="current-password" required className={field} />
          </label>

          {error && <p className="text-[14px] text-logo-red">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-navy py-3 text-[14px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-navy-dark disabled:opacity-60"
          >
            {loading ? "Anmelden …" : "Anmelden"}
          </button>
        </form>
      </div>
    </div>
  );
}
