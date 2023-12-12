import axiosInstance from "@/axios/axios-instance";

export async function sendUserDataToServer(data: any) {
   return await axiosInstance.post("/auth/user/register", data);
}
