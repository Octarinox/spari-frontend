import axiosFacerec from "@/axios/axios-facerec";

export async function updateSubject(currname: any, name: any) {
   try {
      const response = await axiosFacerec.put(`/api/v1/recognition/subjects/${currname}`, {"subject": name}, {headers: {"Content-Type": "application/json"}});
      if (response.status === 200) {
         return response.data;
      } else {
         throw new Error("Failed to get data");
      }
   } catch (error: any) {
      console.error("Error while sending data:", error.message);
      throw error;
   }
}