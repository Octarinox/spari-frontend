import { AxiosResponse } from "axios";
import axiosInstance from "@/axios/axios-instance";

interface LoginRequest {
   email: string;
   password: string;
}

interface LoginResponse {
   data: any;
}

export async function POST(request: Request): Promise<Response> {
   const req: LoginRequest = await request.json();

   try {
      const response: AxiosResponse<LoginResponse> = await axiosInstance.post(
         "/auth/user/login",
         {
            email: req.email,
            password: req.password,
         }
      );

      if (response.status !== 200) {
         throw new Error("Network response was not OK");
      }

      const data: LoginResponse = response.data;
      let jwtToken;
      const rawCookies: string | null = getCookieFromResponse(response, "/");
      if (rawCookies && process.env.NEXT_PUBLIC_ENV) {
         jwtToken = extractJwtToken(rawCookies);
      }
      return new Response(JSON.stringify({ data, token: jwtToken }), {
         status: 200,
         headers: {
            "Content-Type": "application/json",
            "Set-Cookie": rawCookies || "",
         },
      });
   } catch (error: any) {
      console.error(error);
      return new Response(JSON.stringify({ error: error.message }), {
         status: 400,
         headers: { "Content-Type": "application/json" },
      });
   }
}

function extractJwtToken(cookie: string): string | null {
   const cookieParts = cookie.split(";");
   console.log(cookieParts);
   for (const part of cookieParts) {
      const [name, value] = part.trim().split("=");

      if (name === "jwt" && value) {
         return value;
      }
   }

   return null;
}

function getCookieFromResponse(
   response: AxiosResponse,
   path: string
): string | null {
   const rawCookies: string[] | undefined = response.headers["set-cookie"];
   return rawCookies
      ? rawCookies
           .map(cookie => {
              const cookieAttributes = cookie
                 .split(";")
                 .map(attr => attr.trim());
              const cookieName = cookieAttributes.shift();
              return `${cookieName}; Path=${path}; ${cookieAttributes.join(
                 "; "
              )}`;
           })
           .join("; ")
      : null;
}
