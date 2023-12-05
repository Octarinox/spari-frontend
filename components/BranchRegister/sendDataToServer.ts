import axiosInstance from "@/axios/axios-instance";

export async function sendDataToServer(data: any) {
   try {
      const apiUrl = `https://octarinox.tech/api/branch/register`;
      const response = await axiosInstance.post("/auth/branch/register", data);
   } catch (error: any) {
      console.error("Error while sending data:", error.message);
   }
}
