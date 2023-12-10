import axiosInstance from "@/axios/axios-instance";

export async function getUsersRequest() {
   try {
      const response = await axiosInstance.post("/auth/user/get-users");
      if (response.status === 200) {
         return response.data;
      } else {
         throw new Error("Failed to send data");
      }
   } catch (error: any) {
      console.error("Error while sending data:", error.message);
      throw error;
   }
}
