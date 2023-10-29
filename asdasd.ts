import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function asdasd(request: NextRequest) {
   // const token = request.cookies.get("jwt");
   // console.log(request.cookies);
   // const res = await fetch(
   //    new URL("https://34.159.254.154:3001/api/user/check-auth").href,
   //    {
   //       method: "GET",
   //       headers: {
   //          cookie: `${token?.name}=${token?.value}`,
   //       },
   //       credentials: "include",
   //    }
   // );
   // const data = await res.json();
   // console.log(data);
   // if (!data.user) {
   //    return NextResponse.redirect(new URL("/login", request.url));
   // }
   return NextResponse.next();
}

export const config = {
   matcher: "/settings",
};
