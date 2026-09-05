import { NextResponse } from "next/server";
import { SESSION_COOKIE, checkCredentials, createSession } from "@/lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const password = typeof body.password === "string" ? body.password : "";

  if (!email || !password) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const result = checkCredentials(email, password);
  if (!result.ok) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const token = await createSession(email);
  const response = NextResponse.json({ ok: true });
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 86400,
  });
  return response;
}
