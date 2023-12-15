import axiosInstance from "@/axios/axios-instance";

export async function updateBranchesRequest(data: any, ids: string[]) {
   const payload = {
      ids,
      data,
   };
   return await axiosInstance.put("/auth/branch/update", payload);
}
