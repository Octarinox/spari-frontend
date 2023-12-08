import axiosInstance from "@/axios/axios-instance";

export async function getBranchesRequest() {
   try {
      const response = await axiosInstance.get("/auth/branch/get-branches");
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
