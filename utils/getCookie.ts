export const getCookie = (headers: any) => {
   let jwt = null;

   if (typeof window !== "undefined") {
      const jwtCookie = document.cookie
         .split(";")
         .find(cookie => cookie.trim().startsWith("jwt="));
      console.log(document.cookie);
      if (jwtCookie) {
         jwt = jwtCookie.split("=")[1];
      }
   } else {
      // Server-side
      if (headers && headers.cookie) {
         const jwtHeader = headers.cookie
            .split(";")
            .find((cookie: any) => cookie.trim().startsWith("jwt="));

         if (jwtHeader) {
            jwt = jwtHeader.split("=")[1];
         }
      }
   }

   return jwt;
};
