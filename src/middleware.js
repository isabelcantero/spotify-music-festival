export { default } from "next-auth/middleware";

export const config = {
  matcher: ['/myfestival/:path*', '/protected/:path*', '/test/:path*', '/tracklist/:path*'],
};