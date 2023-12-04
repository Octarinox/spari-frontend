import { url } from "@/constants/shared-constants";

export async function SendUserDataToServer(data: any) {
   try {
      const apiUrl = `${url}/api/auth/user/register`;
      const response = await fetch(apiUrl, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
         credentials: "include",
      });

      if (response.ok) {
         const responseData = await response.json();
         console.log("Data sent successfully:", responseData);
         return responseData; // Return the response data
      } else {
         console.error("Failed to send data:", response.statusText);
         throw new Error("Failed to send data");
      }
   } catch (error: any) {
      console.error("Error while sending data:", error.message);
      throw error;
   }
}
