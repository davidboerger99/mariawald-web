import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, verifySession } from "@/lib/auth";

// Schützt den internen Bereich (/intern) und dessen Dateiablage.
// Ohne gültige Session wird auf die Login-Seite umgeleitet.
export async function proxy(request: NextRequest) {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  const user = await verifySession(token);
  if (user) return NextResponse.next();

  const url = new URL("/login", request.url);
  url.searchParams.set("next", request.nextUrl.pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/intern", "/intern/:path*", "/intern-dateien/:path*"],
};
