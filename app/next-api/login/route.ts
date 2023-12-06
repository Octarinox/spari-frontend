export async function POST(request: Request) {
   const req = await request.json();

   try {
      const response = await fetch(
         "https://octarinox.tech/api/auth/user/login",
         {
            method: "POST",
            body: JSON.stringify({ email: req.email, password: req.password }),
            headers: {
               "Content-Type": "application/json",
            },
            credentials: "include",
         }
      );

      if (!response.ok) {
         throw new Error("network response was not OK");
      }
      const data = await response.json();
      console.log(data);
      const rawCookies = response.headers.get("set-cookie");
      return new Response(JSON.stringify({ data }), {
         status: 200,
         headers: {
            "Content-Type": "application/json",
            "Set-Cookie": rawCookies as string,
         },
      });
   } catch (error) {
      return new Response(JSON.stringify({ error }), {
         status: 400,
         headers: { "Content-Type": "application/json" },
      });
   }
}
