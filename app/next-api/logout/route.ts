import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
   try {
      cookies().delete("jwt");

      return NextResponse.json({ message: "logged out" });
   } catch (error) {
      console.error(error);
   }
}
