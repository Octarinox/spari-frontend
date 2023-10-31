import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
   console.log(request.url);
   const token = request.cookies.get("jwt");
   console.log(request.cookies);
   const res = await fetch(
      new URL("https://octarinox.tech/api/user/check-auth").href,
      {
         method: "GET",
         headers: {
            cookie: `${token?.name}=${token?.value}`,
         },
         credentials: "include",
      }
   );
   const data = await res.json();
   console.log(data);
   if (!data.user) {
      return NextResponse.redirect(new URL("/login", request.url));
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
      "/((?!api|_next/static|_next/image|favicon.ico).*)",
   ],
};
