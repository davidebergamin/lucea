import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const CANONICAL_HOST = "luceafoto.com";

export function middleware(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").split(":")[0];

  if (host === `www.${CANONICAL_HOST}`) {
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`https://${CANONICAL_HOST}${pathname}${search}`, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2)$).*)"]
};
