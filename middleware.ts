import { auth } from "@/lib/auth";

export default auth((req) => {
  if (!req.auth) {
    const loginUrl = new URL("/giris", req.url);
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: [
    "/panel/:path*",
    "/tarot/:path*",
    "/yuxu/:path*",
    "/burc/:path*",
    "/numerologiya/:path*",
  ],
};
