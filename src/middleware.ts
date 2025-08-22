// middleware.ts
import { NextResponse } from "next/server";

export function middleware(req: Request) {
  // Clone incoming request headers and add x-url
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-url", req.url);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}
