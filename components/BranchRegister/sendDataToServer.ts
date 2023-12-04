import { url } from "@/constants/shared-constants";

export async function sendDataToServer(data: any) {
   try {
      const apiUrl = `${url}/api/auth/branch/register`;
      const response = await fetch(apiUrl, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(data),
         credentials: "include",
      });

      if (response.ok) {
         console.log("Data sent successfully:", data);
      } else {
         console.error("Failed to send data:", response.statusText);
      }
   } catch (error: any) {
      console.error("Error while sending data:", error.message);
   }
}
