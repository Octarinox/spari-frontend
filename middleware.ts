import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
   const token = request.cookies.get("jwt");

   const res = await fetch(
      new URL("https://octarinox.tech/api/auth/user/check-auth").href,
      {
         method: "GET",
         headers: {
            cookie: `${token?.name}=${token?.value}`,
         },
         credentials: "include",
      }
   );
   const data = await res.json();
   const unauthorized = !data.user && !request.url.includes("login");
   if (unauthorized) {
      return NextResponse.redirect(new URL("/login", request.url));
   }
   if (request.url.includes("login") && data.user) {
      return NextResponse.redirect(new URL("/", request.url));
   }
   return NextResponse.next();
}

export const config = {
   matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      "/((?!api|_next/static|_next/image|favicon.ico|next-api).*)",
   ],
};
