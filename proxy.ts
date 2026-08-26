import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Basic-Auth-Schutz für den internen Bereich (/intern) und dessen Dateiablage.
// Zugangsdaten kommen aus den Umgebungsvariablen INTERN_USER / INTERN_PASSWORD.
export function proxy(request: NextRequest) {
  const expectedUser = process.env.INTERN_USER || "mariawald";
  const expectedPass = process.env.INTERN_PASSWORD;

  // Ohne gesetztes Passwort bleibt der Bereich vollständig gesperrt.
  if (expectedPass) {
    const header = request.headers.get("authorization");
    if (header?.startsWith("Basic ")) {
      const decoded = atob(header.slice(6));
      const sep = decoded.indexOf(":");
      const user = decoded.slice(0, sep);
      const pass = decoded.slice(sep + 1);
      if (user === expectedUser && pass === expectedPass) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse("Zugang nur für Mitarbeitende der Abtei.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Interner Bereich Mariawald", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/intern", "/intern/:path*", "/intern-dateien/:path*"],
};
