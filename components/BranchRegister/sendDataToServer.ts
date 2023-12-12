import axiosInstance from "@/axios/axios-instance";

export async function sendDataToServer(data: any) {
   return await axiosInstance.post("/auth/branch/register", data);
}
