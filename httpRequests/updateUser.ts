import axiosInstance from "@/axios/axios-instance";

export async function updateUserRequest(data: any, id: string) {
   const payload = {
      id,
      data,
   };
   console.log(payload);
   return await axiosInstance.put("/auth/user/update", payload);
}
