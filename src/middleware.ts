import { NextRequest, NextResponse } from "next/server";

const ALLOWED_ORIGINS = ["https://vocaliza.app", "https://www.vocaliza.app"];

if (process.env.NODE_ENV === "development") {
  ALLOWED_ORIGINS.push("http://localhost:3000");
}

export function middleware(req: NextRequest) {
  const origin = req.headers.get("Origin");

  if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json(
      { error: "Forbidden: Invalid origin" },
      { status: 403 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/waitlist/:path*",
};
